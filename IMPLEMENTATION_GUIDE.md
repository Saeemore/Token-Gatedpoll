# Step-by-Step Implementation Guide

## 📍 Current State Analysis

Your project has:
- ✅ Solidity contracts written (MembershipNFT.sol, Poll.sol)
- ✅ Frontend structure set up (Next.js, Wagmi)
- ✅ Scripts ready to deploy
- ❌ **Not deployed** - contracts not on blockchain yet
- ❌ **Not configured** - addresses not set in frontend
- ❌ **Has bugs** - ABI mismatch, missing error handling

---

## 🚀 PHASE 1: SETUP (Day 1)

### Step 1.1: Install Dependencies

**In root directory:**
```bash
npm install
```

**In frontend directory:**
```bash
cd frontend
npm install
cd ..
```

### Step 1.2: Setup Environment Files

**Create `.env` in root** (for hardhat):
```
PRIVATE_KEY=your_wallet_private_key_from_metamask
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_alchemy_key
```

**Get these values:**
1. **Private Key**: 
   - Open MetaMask → Click account → Three dots → Account Details → Export Private Key
   - ⚠️ NEVER share this!

2. **Alchemy Key**:
   - Go to alchemy.com
   - Sign up free
   - Create app on Sepolia testnet
   - Copy API key

**Create `frontend/.env.local`** (for Next.js):
```
NEXT_PUBLIC_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/your_alchemy_key
```

### Step 1.3: Get Sepolia Testnet ETH

You need test ETH for deployment:
1. Go to https://www.alchemy.com/faucets/ethereum-sepolia
2. Connect MetaMask
3. Request 0.5 ETH (free)
4. Wait 1-2 minutes
5. Check balance in MetaMask

---

## 🔧 PHASE 2: FIX CRITICAL BUGS (Day 1-2)

### Step 2.1: Fix Smart Contract - MembershipNFT.sol

**Goal**: Make it so users can mint their own NFTs

**Current state**: Only `safeMint()` exists, no `mint()` function

**Action**: Edit [contracts/MembershipNFT.sol](contracts/MembershipNFT.sol)

Replace:
```solidity
contract MembershipNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    constructor(address initialOwner) ERC721("MembershipNFT", "MNFT") Ownable(initialOwner) {}

    function safeMint(address to) {
        _safeMint(to, _nextTokenId);
        _nextTokenId++;
    }
}
```

With:
```solidity
contract MembershipNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    constructor(address initialOwner) ERC721("MembershipNFT", "MNFT") Ownable(initialOwner) {}

    // ✅ Public function so users can mint for themselves
    function mint() public {
        _safeMint(msg.sender, _nextTokenId);
        _nextTokenId++;
    }

    // ✅ Also keep this for admin minting if needed
    function safeMint(address to) public onlyOwner {
        _safeMint(to, _nextTokenId);
        _nextTokenId++;
    }
}
```

### Step 2.2: Fix Smart Contract - Poll.sol

**Goal**: Match with MembershipNFT changes

**Current state**: Good, but ensure it references correct contract

**Check**: [contracts/Poll.sol](contracts/Poll.sol) is correct ✅

The interface and vote function look good.

### Step 2.3: Update Frontend ABI

**Goal**: Frontend ABI must match contract functions

**Action**: Edit [frontend/lib/contracts.ts](frontend/lib/contracts.ts)

Replace:
```typescript
export const membershipAbi = [
  {
    type: "function",
    name: "mint",  // ❌ This was wrong
    stateMutability: "nonpayable",
    inputs: [{ name: "to", type: "address" }],
    outputs: [],
  },
  // ... rest
];
```

With:
```typescript
export const membershipAbi = [
  {
    type: "function",
    name: "mint",
    stateMutability: "nonpayable",
    inputs: [],  // ✅ No parameters - user mints for themselves
    outputs: [],
  },
  {
    type: "function",
    name: "safeMint",  // ✅ Also include safeMint for admin
    stateMutability: "nonpayable",
    inputs: [{ name: "to", type: "address" }],
    outputs: [],
  },
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
];
```

### Step 2.4: Compile Smart Contracts

**Goal**: Check for syntax errors

```bash
npm run compile
```

**Expected output**:
```
Successfully compiled 2 Solidity files
```

If errors appear, fix them before proceeding.

---

## 🌐 PHASE 3: DEPLOY CONTRACTS (Day 2)

### Step 3.1: Deploy to Sepolia

**Goal**: Get contract addresses

```bash
npm run hardhat run scripts/deploy.js -- --network sepolia
```

**Expected output**:
```
Deploying with: 0xYourAddress
MembershipNFT deployed to: 0x1234567890123456789012345678901234567890
Poll deployed to: 0xabcdefabcdefabcdefabcdefabcdefabcdefabcd
```

**📌 Copy these addresses - you'll need them!**

### Step 3.2: Update Frontend with Contract Addresses

**Goal**: Frontend knows where contracts are

**Action**: Edit [frontend/lib/contracts.ts](frontend/lib/contracts.ts)

Replace:
```typescript
export const membershipAddress = "YOUR_MEMBERSHIP_CONTRACT_ADDRESS";
export const pollAddress = "YOUR_POLL_CONTRACT_ADDRESS";
```

With your actual addresses:
```typescript
export const membershipAddress = "0x1234567890123456789012345678901234567890";
export const pollAddress = "0xabcdefabcdefabcdefabcdefabcdefabcdefabcd";
```

### Step 3.3: Verify Deployment

**Goal**: Confirm contracts are on blockchain

Go to https://sepolia.etherscan.io/
- Search for your MembershipNFT address
- Search for your Poll address
- Should show contract code

---

## 🎨 PHASE 4: FIX FRONTEND LOGIC (Day 2-3)

### Step 4.1: Fix Mint Error Handling

**Goal**: Handle mint failures properly, refetch after success

**Action**: Edit [frontend/pages/index.tsx](frontend/pages/index.tsx)

Replace the `handleMint` function:

```typescript
// Before
const handleMint = async () => {
  if (!address) {
    setError("Please connect your wallet first");
    return;
  }

  setError(null);
  setIsMinting(true);

  try {
    writeContract({
      address: membershipAddress as `0x${string}`,
      abi: membershipAbi,
      functionName: "mint",
      args: [address],
    });
  } catch (err) {
    setError(err instanceof Error ? err.message : "Transaction failed");
    setIsMinting(false);
  }
};
```

With:

```typescript
// After
const handleMint = async () => {
  if (!address) {
    setError("Please connect your wallet first");
    return;
  }

  setError(null);
  setIsMinting(true);

  try {
    // ✅ Add no parameters - user mints for themselves
    writeContract({
      address: membershipAddress as `0x${string}`,
      abi: membershipAbi,
      functionName: "mint",
      args: [],  // ✅ No args - includes msg.sender automatically
      onSuccess: () => {
        setIsMinting(false);
        setError(null);
        // ✅ Refetch membership status
        refetch();
      },
      onError: (error) => {
        setError(error.message || "Minting failed");
        setIsMinting(false);
      },
    });
  } catch (err) {
    setError(err instanceof Error ? err.message : "Transaction failed");
    setIsMinting(false);
  }
};
```

### Step 4.2: Add Refetch to useReadContract

**Goal**: UI updates after successful mint

**Find this line**:
```typescript
const { data } = useReadContract({
```

**Change to**:
```typescript
const { data, refetch } = useReadContract({
```

---

## 🧪 PHASE 5: TESTING (Day 3-4)

### Step 5.1: Start Development Server

```bash
cd frontend
npm run dev
```

**Opens at**: http://localhost:3000

### Step 5.2: Test Wallet Connection

**Do this**:
1. Open app in browser
2. See "Connect Wallet" buttons
3. Click "Connect with MetaMask" (or similar)
4. Approve connection in MetaMask
5. Should see "Connected: 0x..." and "Disconnect" button

**Expected**: ✅ Wallet connects, shows address

---

### Step 5.3: Test Membership Check

**Before mint**:
1. Same user/wallet still connected
2. Should see "Membership status: Not a member ❌"
3. Should see "Become a Member 🪙" button

**Expected**: ✅ Shows not a member

---

### Step 5.4: Test Mint NFT

**Do this**:
1. Click "Become a Member 🪙" button
2. MetaMask pops up asking to confirm transaction
3. Click "Confirm"
4. Wait for transaction (30 seconds - 2 minutes)
5. See "Membership status: Member ✅"
6. See "Go to Poll" link

**Expected**: ✅ NFT minted, status updates

---

### Step 5.5: Test Poll Access

**Do this**:
1. Click "Go to Poll" link
2. Should see poll question: "What should we build next?"
3. Should see 3 options with vote buttons:
   - Vote for DAO
   - Vote for NFT
   - Vote for DeFi
4. Each option shows "Votes: 0" initially

**Expected**: ✅ Can see poll

---

### Step 5.6: Test Voting

**Do this**:
1. Click one vote button (e.g., "Vote for DAO")
2. MetaMask pops up
3. Confirm transaction
4. Wait for confirmation
5. Vote count increases: "Votes: 1"
6. See "You have already voted."
7. Vote buttons disabled

**Expected**: ✅ Vote counted, can't vote again

---

### Step 5.7: Test Access Control - Use Different Wallet

**Do this**:
1. Switch to different MetaMask account (or use another wallet)
2. On poll page, click "Vote for NFT"
3. MetaMask asks to confirm
4. You should get error: "Not a member" ❌

**Expected**: ✅ Non-member can't vote

---

### Step 5.8: Test Member Can Vote

**Do this**:
1. Switch second wallet back
2. Go to home page
3. Mint NFT (become member)
4. Go to Poll page
5. Click "Vote for NFT"
6. Should work - vote counted

**Expected**: ✅ After minting, can vote

---

## 📋 DEPLOYMENT CHECKLIST

After everything works locally:

- [ ] Clean `.env` - keep secrets safe
- [ ] Set up proper error logging
- [ ] Test on testnet thoroughly
- [ ] Add loading states properly
- [ ] Add success messages
- [ ] Deploy frontend (Vercel, Netlify, etc)
- [ ] Update contract addresses if migrating to mainnet

---

## 🐛 COMMON ISSUES & SOLUTIONS

### "Function not found on contract"
**Cause**: ABI mismatch
**Solution**: Check ABI matches contract functions

### "Transaction failed - Invalid address"
**Cause**: Contract addresses wrong in frontend
**Solution**: Double-check addresses in `frontend/lib/contracts.ts`

### "User rejected transaction"
**Cause**: User clicked reject in MetaMask
**Solution**: Users must approve transaction

### "Already voted"
**Cause**: Same user trying to vote twice
**Solution**: Mints new NFT with different wallet and try again

### "Not a member"
**Cause**: Voting without NFT or NFT mint failed
**Solution**: Make sure NFT minting succeeded

### "Compilation failed"
**Cause**: Syntax error in Solidity
**Solution**: Check contract syntax, run `npm run compile`

---

## 📞 Quick Reference Commands

```bash
# Compile contracts
npm run compile

# Deploy to testnet
npm run hardhat run scripts/deploy.js -- --network sepolia

# Start frontend dev server
cd frontend && npm run dev

# Build frontend for production
cd frontend && npm run build

# Start production server
cd frontend && npm start
```

---

## 🎯 Success Criteria

**Project is working when**:
- ✅ Wallet connects
- ✅ User can mint NFT
- ✅ Frontend updates to show "Member"
- ✅ User can access poll page
- ✅ User can vote
- ✅ Votes are counted
- ✅ User can't vote twice
- ✅ Non-members can't vote

**Ready for production when**:
- ✅ All success criteria met
- ✅ Tested with multiple wallets
- ✅ Tested on testnet
- ✅ Error messages clear
- ✅ No console errors
- ✅ Mobile responsive (optional)

---

## 📚 Resources

- **Hardhat Docs**: https://hardhat.org/
- **OpenZeppelin ERC721**: https://docs.openzeppelin.com/contracts/5.x/erc721
- **Wagmi Docs**: https://wagmi.sh/
- **Sepolia Faucet**: https://www.alchemy.com/faucets/ethereum-sepolia
- **Etherscan Sepolia**: https://sepolia.etherscan.io/
- **MetaMask**: https://metamask.io/

---

## ⏱️ Time Estimates

- **Phase 1 (Setup)**: 15 minutes
- **Phase 2 (Fixes)**: 30 minutes  
- **Phase 3 (Deploy)**: 5 minutes
- **Phase 4 (Frontend Logic)**: 30 minutes
- **Phase 5 (Testing)**: 1-2 hours
- **Total**: ~3-4 hours

---

**You now have a clear path forward! 🚀**

**Next Step**: Start with Phase 1 - Setup. Let me know if you get stuck!
