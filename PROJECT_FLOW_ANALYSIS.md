# Token-Gated Poll: Complete Project Flow Analysis

## 🎯 Project Overview
A blockchain-based voting system where users must own an NFT (Membership NFT) to participate in polls. The system combines smart contracts with a Next.js frontend.

---

## 📊 Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                    BLOCKCHAIN (Sepolia)                     │
│                                                             │
│  ┌──────────────────────┐      ┌──────────────────────┐   │
│  │  MembershipNFT.sol   │      │     Poll.sol         │   │
│  │  (ERC721 Contract)   │      │ (Voting Contract)    │   │
│  │                      │      │                      │   │
│  │ - safeMint()         │      │ - vote()             │   │
│  │ - balanceOf()        │      │ - getOptions()       │   │
│  │ - totalSupply()      │      │ - getVotes()         │   │
│  └──────────┬───────────┘      └──────────┬───────────┘   │
│             │                    (references MembershipNFT) │
│             │                             │                │
└─────────────┼─────────────────────────────┼────────────────┘
              │                             │
              │ Contract Address            │ Contract Address
              │                             │
┌─────────────▼─────────────────────────────▼────────────────┐
│         FRONTEND (Next.js + Wagmi + Viem)                  │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │              _app.tsx                                │  │
│  │  - WagmiProvider Setup                              │  │
│  │  - QueryClient Setup                                │  │
│  │  - Network: Sepolia                                 │  │
│  │  - RPC: NEXT_PUBLIC_RPC_URL env var                │  │
│  └─────────────────────────────────────────────────────┘  │
│                           │                                │
│         ┌─────────────────┼─────────────────┐              │
│         ▼                 ▼                 ▼              │
│  ┌─────────────┐  ┌──────────────┐  ┌─────────────┐     │
│  │ index.tsx   │  │ poll.tsx     │  │Components   │     │
│  │ (HOME PAGE) │  │ (POLL PAGE)  │  │- Connect    │     │
│  │             │  │              │  │  Button     │     │
│  │ Status: Not │  │ Status:      │  └─────────────┘     │
│  │ Member ❌   │  │ Member ✅    │                       │
│  │             │  │              │                       │
│  │ Actions:    │  │ Actions:     │                       │
│  │ 1. Mint NFT │  │ 1. View Poll │                       │
│  └─────────────┘  │ 2. Vote      │                       │
│                   │ 3. View Votes│                       │
│                   └──────────────┘                       │
└─────────────────────────────────────────────────────────┘
```

---

## 🔄 User Journey & Data Flow

### **STEP 1: INITIAL STATE - User Connects Wallet**
```
User → Opens App → Clicks "Connect Wallet" (ConnectButton.tsx)
      ↓
      index.tsx: useAccount() → gets wallet address
      ↓
      Check membership: useReadContract(balanceOf) → Reads MembershipNFT contract
      ↓
      Result: Is user a member? YES ✅ / NO ❌
```

### **STEP 2A: NOT A MEMBER - Mint NFT Flow**
```
User NOT Member ❌
      ↓
Check in index.tsx: isMember === false
      ↓
Show: "Become a Member 🪙" button
      ↓
User clicks "Become a Member"
      ↓
handleMint() calls writeContract(MembershipNFT.safeMint())
      ↓
Transaction sent to Sepolia
      ↓
MembershipNFT.sol: safeMint(userAddress)
  - Mints new NFT token
  - Token ID: _nextTokenId (auto-incremented)
  - Owner: userAddress
      ↓
Transaction confirmed ✅
      ↓
balanceOf now returns 1 (or more if they have multiple)
      ↓
UI updates: Show "Member ✅" and "Go to Poll" link
```

### **STEP 2B: IS A MEMBER - Access Poll**
```
User IS Member ✅
      ↓
index.tsx: isMember === true
      ↓
Show: "Go to Poll" link
      ↓
User clicks link → Navigate to /poll
      ↓
poll.tsx loads
```

### **STEP 3: ON POLL PAGE - Voting Flow**
```
poll.tsx Components Load:
      │
      ├─ useReadContract() → Fetch poll.question
      │   Poll.sol: question state variable
      │   Display: "What should we build next?"
      │
      ├─ useReadContract() → Fetch poll.getOptions()
      │   Poll.sol: returns ["DAO", "NFT", "DeFi"]
      │   Display: List of poll options
      │
      ├─ useReadContracts() → Fetch votes for EACH option
      │   For each option index (0, 1, 2):
      │     Poll.sol: votes[optionIndex] → vote count
      │   Display: "Votes: X" for each option
      │
      └─ useReadContract() → Check hasVoted status
          Poll.sol: hasVoted[userAddress]
          Result: Has user already voted? YES/NO
              
User sees poll options with vote counts

User clicks a vote button (e.g., "Vote for DAO")
      ↓
handleVote(index) → writeContract(Poll.vote(index))
      ↓
Transaction sent to Sepolia
      ↓
Poll.sol: vote(optionIndex)
  1. Verify: membershipNFT.balanceOf(msg.sender) > 0
     ✓ User has NFT → Continue
     ✗ User doesn't have NFT → REVERT
  
  2. Verify: !hasVoted[msg.sender]
     ✓ User hasn't voted → Continue
     ✗ User already voted → REVERT
  
  3. Verify: optionIndex < options.length
     ✓ Valid option → Continue
     ✗ Invalid option → REVERT
  
  4. If all checks pass:
     - hasVoted[msg.sender] = true
     - votes[optionIndex]++
      ↓
Transaction confirmed ✅
      ↓
UI updates:
  - Vote count increases
  - Show "You have already voted" message
  - Disable vote buttons
```

---

## 📁 File Structure & Purpose

### **Smart Contracts** (`/contracts`)

#### `MembershipNFT.sol`
- **Purpose**: Create membership NFTs
- **Key Functions**:
  - `safeMint(to)`: Mint a new NFT to an address
  - `balanceOf(owner)`: Check how many NFTs an address owns
- **Key State**:
  - `_nextTokenId`: Counter for token IDs
  
#### `Poll.sol`
- **Purpose**: Create and manage voting
- **Dependencies**: References MembershipNFT contract
- **Key Functions**:
  - `vote(optionIndex)`: Cast a vote (only if user has NFT)
  - `getOptions()`: Return all poll options
- **Key State**:
  - `question`: Poll question text
  - `options`: Array of voting options
  - `hasVoted`: Tracks if address has voted
  - `votes`: Tracks vote count per option

---

### **Backend Deployment** (`/scripts`)

#### `deploy.js`
1. Deploys **MembershipNFT** first
2. Gets MembershipNFT contract address
3. Deploys **Poll** with MembershipNFT address as constructor parameter
4. Logs both contract addresses for frontend config

**Output**:
```
MembershipNFT deployed to: 0x...
Poll deployed to: 0x...
```

---

### **Frontend** (`/frontend`)

#### Configuration Files
- **`lib/contracts.ts`**: 
  - Stores contract addresses (`membershipAddress`, `pollAddress`)
  - Contains ABI definitions for smart contract functions
  
- **`lib/wagmi.comfig.ts`**: 
  - (Duplicate of _app.tsx config - can be removed)
  - Should store wagmi configuration

- **`_app.tsx`** (Important):
  - Sets up Wagmi provider for blockchain connection
  - Configures Sepolia testnet
  - Sets up React Query client for data caching
  - **Requires**: `NEXT_PUBLIC_RPC_URL` environment variable

#### Pages

- **`pages/index.tsx`** (Home Page):
  - **Shows**: Wallet connection status
  - **Checks**: If user is NFT member or not
  - **Actions**: 
    - If NOT member: Show "Become a Member" button → Mint NFT
    - If member: Show "Go to Poll" button → Navigate to poll
  - **Flow**: Connect wallet → Check membership → Mint or Vote

- **`pages/poll.tsx`** (Poll Page):
  - **Shows**: Poll question and options
  - **Shows**: Vote counts for each option
  - **Checks**: If user already voted
  - **Actions**: 
    - If not voted: Show vote buttons
    - If voted: Disable buttons + show "Already voted" message
  - **Restrictions**: Only accessible if user has membership NFT

#### Components

- **`components/ConnectButton.tsx`**:
  - Renders wallet connection buttons
  - Shows connected address
  - Allows disconnect
  - Used on index.tsx

---

## 🔐 Access Control Flow

```
┌─────────────────────────────────────────────────┐
│         USER WANTS TO VOTE ON POLL              │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ STEP 1: FRONTEND CHECK                          │
│ - Check localStorage/wagmi connection          │
│ - If not connected → Show "Connect Wallet"     │
│ - If connected → Continue                      │
└─────────────────────────────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ STEP 2: FRONTEND READ (index.tsx)               │
│ - useReadContract(balanceOf)                   │
│ - Reads MembershipNFT.balanceOf(userAddress)  │
│ - If result > 0 → User is member ✅            │
│ - If result = 0 → User not member ❌           │
└─────────────────────────────────────────────────┘
                    ↓
               User not member?
                    ↓
         ┌─────────────────────────┐
         │ REDIRECT TO MINT PAGE   │
         │ "Become a Member"       │
         └─────────────────────────┘
                    ↓
               User is member?
                    ↓
         ┌─────────────────────────┐
         │ ALLOW POLL ACCESS       │
         │ Navigate to /poll       │
         └─────────────────────────┘
                    ↓
┌─────────────────────────────────────────────────┐
│ STEP 3: SMART CONTRACT CHECK (Poll.sol)         │
│ When user calls vote(optionIndex):              │
│                                                 │
│ Check 1: membershipNFT.balanceOf(msg.sender)   │
│   - If balance > 0 → ✅ User has NFT            │
│   - If balance = 0 → ❌ REVERT                  │
│                                                 │
│ Check 2: !hasVoted[msg.sender]                 │
│   - If false → ✅ User hasn't voted             │
│   - If true → ❌ REVERT (already voted)         │
│                                                 │
│ Check 3: optionIndex < options.length          │
│   - If true → ✅ Valid option                   │
│   - If false → ❌ REVERT (invalid option)       │
│                                                 │
│ Result: ✅ All checks pass → Vote counted      │
└─────────────────────────────────────────────────┘
```

---

## 🚀 Development Flow Checklist

### **Phase 1: Setup**
- [ ] Install dependencies: `npm install` (root) + `npm install` (frontend)
- [ ] Set up `.env.local` in frontend with `NEXT_PUBLIC_RPC_URL`
- [ ] Set up `.env` in root with `PRIVATE_KEY`

### **Phase 2: Deployment**
- [ ] Have Sepolia testnet ETH in deployer wallet
- [ ] Run: `npx hardhat compile` → Compiles contracts
- [ ] Run: `npx hardhat run scripts/deploy.js --network sepolia`
- [ ] Get contract addresses from output
- [ ] Update `frontend/lib/contracts.ts` with real addresses

### **Phase 3: Frontend Development**
- [ ] Run: `cd frontend && npm run dev`
- [ ] Test wallet connection
- [ ] Test NFT minting
- [ ] Test poll voting

### **Phase 4: Testing**
- [ ] User 1: Connect → Mint NFT → See membership status
- [ ] User 2: Connect → Try voting (should fail - not member)
- [ ] User 1: Vote on poll → Verify vote counted
- [ ] User 1: Try to vote again → Should fail (already voted)
- [ ] User 2: Get NFT somehow → Then vote should work

---

## ⚠️ Key Issues & Improvements Needed

### **Current Issues**:
1. **Missing `mint` function**: MembershipNFT has only `safeMint()` but frontend calls `mint()`
2. **Contract addresses hardcoded**: `frontend/lib/contracts.ts` has placeholder addresses
3. **ABI mismatch**: Functions in ABI don't match actual contract (e.g., `mint` vs `safeMint`)
4. **Public RPC**: Alchemy key is public in hardhat.config.js
5. **Error handling**: Limited error feedback to users
6. **No transaction receipts**: Frontend doesn't wait for confirmations properly

### **Recommended Fixes**:
```solidity
// In MembershipNFT.sol - Add public mint function:
function mint(address to) public onlyOwner {
    _safeMint(to, _nextTokenId);
    _nextTokenId++;
}
```

---

## 📋 Environment Variables Required

### **Frontend** (`frontend/.env.local`):
```
NEXT_PUBLIC_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/YOUR_ALCHEMY_KEY
```

### **Root** (`.env`):
```
PRIVATE_KEY=your_wallet_private_key
```

### **Frontend** (`frontend/lib/contracts.ts`):
```typescript
// After deployment, update these:
export const membershipAddress = "0x..."; // From deploy output
export const pollAddress = "0x..."; // From deploy output
```

---

## 🎓 How Everything Connects

```
USER START
    ↓
Connects Wallet (Wagmi)
    ↓
Frontend checks membership:
  Contract call → MembershipNFT.balanceOf(userAddress)
    ↓
If 0 NFTs:
  Show mint button
  User clicks → safeMint(userAddress) transaction
  MembershipNFT updates state → _nextTokenId++
  ↓
If 1+ NFTs:
  Show "Go to Poll" link
  User navigates → /poll page
  Frontend fetches poll data:
    - question
    - options
    - votes per option
    - hasVoted[userAddress]
  ↓
User clicks vote button
  → writeContract(Poll.vote(optionIndex))
  ↓
Smart contract validates:
  1. User has NFT (balanceOf > 0)
  2. User hasn't voted before (hasVoted == false)
  3. Option is valid (index < length)
  ↓
If valid:
  hasVoted[userAddress] = true
  votes[optionIndex]++
  Transaction confirmed ✅
  ↓
Frontend updates UI:
  - Vote count increases
  - Show "Already voted" message
  - Disable vote buttons
```

---

## 🛠️ Quick Command Reference

```bash
# Root directory
npm install                          # Install dependencies
npm run compile                      # Compile smart contracts
npm run hardhat run scripts/deploy.js --network sepolia  # Deploy contracts

# Frontend directory
cd frontend
npm install                          # Install frontend dependencies
npm run dev                          # Run development server (localhost:3000)
npm run build                        # Build for production
npm run start                        # Start production server
```

---

**Now you have clarity on the complete flow! Ready to develop? 🚀**
