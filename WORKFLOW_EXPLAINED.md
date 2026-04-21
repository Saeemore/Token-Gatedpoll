# Token-Gated Poll: Simple Workflow Guide

This document explains the project in simple words:

- what the app does
- how the contracts work
- why each important file exists
- what happens when a user opens the site
- how wallet connection, membership minting, and voting work
- simple diagrams for the full flow

---

## 1. Project Idea

This project is a **token-gated voting application**.

That means:

1. A user connects a wallet.
2. The user mints a **Membership NFT**.
3. Only wallets that own that NFT are allowed to vote in the poll.

So the NFT acts like a membership card.

---

## 2. Main Goal of the App

The app is designed to prove one simple idea:

**"Only verified NFT members can enter and vote in the poll."**

This gives you:

- membership-based access
- one wallet / one vote behavior
- on-chain vote storage
- local blockchain testing using Hardhat

---

## 3. High-Level Architecture

The project has 3 main parts:

1. **Smart Contracts**
   - define membership rules
   - define voting rules

2. **Deployment Layer**
   - deploys contracts to the local Hardhat chain
   - stores the deployed contract addresses for frontend use

3. **Frontend**
   - landing page
   - wallet connect page
   - membership mint page
   - poll page

---

## 4. Full System Diagram

```text
User
  |
  v
Landing Page (/)
  |
  v
Membership Gateway (/access)
  |
  |-- Connect wallet
  |-- Check wallet network
  |-- Read membership NFT balance
  |-- Mint NFT if user is not yet a member
  |
  v
Poll Page (/poll)
  |
  |-- Check membership again
  |-- Read question and options
  |-- Read vote counts
  |-- Check whether user already voted
  |-- Submit vote
  |
  v
Poll Contract + Membership NFT Contract on Hardhat
```

---

## 5. Folder-Level Understanding

### `contracts/`
This folder contains the Solidity smart contracts.

- `MembershipNFT.sol`
- `Poll.sol`

These files define the blockchain rules.

### `scripts/`
This folder contains deployment logic.

- `deploy.js`

This file deploys the contracts and writes the contract addresses into files the frontend can use.

### `deployments/`
This folder stores deployment output.

- `localhost.json`

This file tells the frontend:

- which network was used
- which contract addresses are active
- what RPC URL should be used

### `frontend/`
This folder contains the Next.js frontend.

Important areas:

- `pages/` = app routes
- `components/` = reusable UI pieces
- `lib/` = frontend blockchain config and ABIs
- `styles/` = global styling

---

## 6. Contract Flow in Simple Words

There are **2 contracts**.

### A. Membership NFT Contract

File:

- `contracts/MembershipNFT.sol`

Purpose:

- creates the membership NFT
- lets users mint one or more NFTs for themselves
- lets the owner mint NFTs for others if needed

Why this contract is written:

- The app needs a way to decide who is a member.
- The simplest on-chain membership proof is NFT ownership.
- If `balanceOf(wallet) > 0`, that wallet is considered a member.

### Membership Contract Logic

```text
User calls mint()
    |
    v
Contract mints NFT to msg.sender
    |
    v
User now owns at least 1 Membership NFT
    |
    v
Frontend and Poll contract treat user as verified member
```

### Important lines of logic

- `_safeMint(msg.sender, _nextTokenId);`
  - creates NFT for the current wallet

- `_nextTokenId++;`
  - increments token ID for the next mint

### Why this matters

Without this file, the system would have no concept of membership.

---

### B. Poll Contract

File:

- `contracts/Poll.sol`

Purpose:

- stores the poll question
- stores the poll options
- stores total votes per option
- blocks non-members from voting
- blocks repeat voting
- stores which option each wallet voted for

Why this contract is written:

- The app needs the vote itself to live on-chain.
- It must enforce access rules on-chain, not only in the UI.

### Poll Contract Logic

The contract contains:

- `membershipNFT`
  - reference to the NFT contract

- `question`
  - poll question text

- `options`
  - list of choices like DAO, NFT, DeFi

- `hasVoted`
  - tracks if a wallet already voted

- `votedOption`
  - tracks which option a wallet selected

- `votes`
  - stores vote count per option index

### Vote Logic Diagram

```text
User clicks vote
   |
   v
Poll.vote(optionIndex)
   |
   |-- check membershipNFT.balanceOf(msg.sender) > 0
   |-- check hasVoted[msg.sender] == false
   |-- check optionIndex is valid
   |
   v
hasVoted[msg.sender] = true
votedOption[msg.sender] = optionIndex
votes[optionIndex]++
```

### Why this matters

Without this file:

- anyone could vote
- repeated voting could happen
- there would be no on-chain poll state

---

## 7. Why These Specific Frontend Files Exist

Below is the practical purpose of each important frontend file.

### `frontend/pages/_app.tsx`

Purpose:

- wraps the whole frontend with providers
- gives all pages access to Wagmi and React Query

Why it exists:

- wallet hooks like `useAccount`, `useReadContract`, `useWriteContract` need a provider
- contract reads and writes need shared config

Effect:

- every page can talk to the blockchain

Simple idea:

```text
Without _app.tsx:
pages cannot use wagmi hooks correctly
```

---

### `frontend/lib/wagmiConfig.ts`

Purpose:

- configures the wallet connection system
- defines the Hardhat chain
- defines MetaMask / injected wallet connectors
- defines the RPC transport

Why it exists:

- the frontend needs to know which chain and RPC to use

Effect:

- connects the frontend to `http://127.0.0.1:8545`

Simple idea:

```text
Frontend -> wagmiConfig -> Hardhat chain + MetaMask + local RPC
```

---

### `frontend/lib/contracts.ts`

Purpose:

- stores contract addresses used by frontend
- stores contract ABIs
- exposes local chain data like RPC URL

Why it exists:

- the frontend needs a clean place to know:
  - where the contracts are
  - what functions can be called

Effect:

- pages can call:
  - `balanceOf`
  - `mint`
  - `question`
  - `getOptions`
  - `vote`
  - `votes`
  - `hasVoted`
  - `votedOption`

Simple idea:

```text
If contracts.ts is wrong,
frontend will call wrong address or wrong function shape
```

---

### `frontend/lib/deployment.ts`

Purpose:

- stores the latest deployed addresses in TypeScript form

Why it exists:

- the deploy script writes a frontend-friendly file automatically

Effect:

- the frontend always knows which MembershipNFT and Poll contracts to use

---

### `frontend/components/ConnectButton.tsx`

Purpose:

- handles wallet connection UI
- shows wallet address
- shows chain status
- lets user disconnect
- lets user switch to Hardhat chain

Why it exists:

- connecting the wallet is a separate concern and should not be mixed into every page

Effect:

- reusable wallet connection component for the membership flow

---

### `frontend/components/MembershipGateway.tsx`

Purpose:

- contains the original working connect + mint flow
- checks membership NFT balance
- allows minting membership
- sends verified members to the poll

Why it exists:

- the original logic was extracted from `/`
- this keeps the working system untouched while allowing a new landing page

Effect:

- `/access` remains the real functional dapp entry page

---

### `frontend/pages/index.tsx`

Purpose:

- acts as the landing page
- introduces the product visually
- redirects users to the working app route

Why it exists:

- you wanted a more impressive first page
- it separates marketing/presentation from actual wallet interaction

Effect:

- `/` is now the landing page
- it does not interfere with the existing dapp logic

---

### `frontend/pages/access.tsx`

Purpose:

- renders `MembershipGateway`

Why it exists:

- gives the original working page a dedicated route

Effect:

- `/access` becomes the membership connect/mint page

---

### `frontend/pages/poll.tsx`

Purpose:

- shows the actual poll
- reads membership status again
- reads poll question and options
- shows vote counts
- lets verified members submit one vote
- shows recorded vote after submission

Why it exists:

- voting is a separate screen from onboarding/membership

Effect:

- only verified members can interact with the poll

---

### `frontend/styles/globals.css`

Purpose:

- stores the full visual system
- controls layout, colors, buttons, cards, animations, and landing page motion

Why it exists:

- shared styles should live in one place

Effect:

- both the landing page and dapp screens share the same design language

---

## 8. Deployment Flow

File:

- `scripts/deploy.js`

This file does more than just deploy contracts.

It:

1. deploys `MembershipNFT`
2. deploys `Poll`
3. writes `deployments/localhost.json`
4. writes `frontend/lib/deployment.ts`

### Why this is useful

If contract addresses are deployed but not shared with the frontend, the frontend will not know where the contracts are.

This file solves that problem automatically.

### Deployment Diagram

```text
Run deploy script
   |
   v
Deploy MembershipNFT
   |
   v
Deploy Poll (with MembershipNFT address)
   |
   v
Write deployments/localhost.json
   |
   v
Write frontend/lib/deployment.ts
   |
   v
Frontend now knows latest addresses
```

---

## 9. User Flow from Start to End

Here is the full app flow in simple words.

### Step 1. User opens landing page

Route:

- `/`

What happens:

- user sees product explanation
- user clicks `Enter App`

### Step 2. User reaches membership gateway

Route:

- `/access`

What happens:

- app asks wallet connection
- app checks if wallet is on Hardhat localhost
- app reads NFT balance from Membership contract

### Step 3. If user is not a member

What happens:

- app shows `Mint Membership NFT`
- wallet sends transaction to `MembershipNFT.mint()`
- contract mints NFT to connected wallet

### Step 4. Membership is verified

What happens:

- frontend reads `balanceOf(wallet)`
- if balance is greater than 0, user is treated as member
- app enables entry into poll

### Step 5. User enters poll page

Route:

- `/poll`

What happens:

- app checks membership again
- app reads:
  - question
  - options
  - vote counts
  - whether wallet already voted
  - which option wallet selected

### Step 6. User votes

What happens:

- user clicks a vote button
- frontend calls `Poll.vote(index)`
- contract checks membership and repeat-vote protection
- vote is recorded on-chain

### Step 7. UI updates

What happens:

- frontend refetches on-chain state
- shows:
  - `Membership verified`
  - `Vote recorded`
  - `Recorded vote: <option>`

---

## 10. Simple End-to-End Workflow Diagram

```text
Landing Page (/)
   |
   v
Access Page (/access)
   |
   |-- Connect wallet
   |-- Check network
   |-- Check membership NFT balance
   |
   +--> If no NFT:
   |       Mint membership NFT
   |
   +--> If NFT exists:
           Go to /poll
               |
               |-- Read question
               |-- Read options
               |-- Read votes
               |-- Read hasVoted
               |-- Read votedOption
               |
               +--> Vote once
                       |
                       v
                 Contract stores vote
                       |
                       v
                 Frontend refreshes UI
```

---

## 11. Why the Contracts Are Written This Way

### Why `MembershipNFT` is separate from `Poll`

Because the app has two different responsibilities:

1. **Membership verification**
2. **Voting**

Keeping them separate is better because:

- membership logic stays reusable
- poll logic stays focused
- the poll can ask another contract whether a user is a member

This is cleaner than mixing both concerns into one contract.

---

### Why `balanceOf(msg.sender) > 0` is used

This is the simplest and most standard way to check NFT ownership.

Meaning:

- if wallet owns at least one NFT, it is a member

---

### Why `hasVoted` mapping exists

Without it, the same wallet could vote again and again.

So this line protects the poll:

```solidity
require(!hasVoted[msg.sender], "Already voted");
```

---

### Why `votedOption` mapping exists

This mapping is useful for frontend display.

It allows the app to show:

- which option this wallet voted for

Without it, the frontend would only know that a vote happened, not which option was selected.

---

## 12. Important Runtime Commands

### Start local chain

```bash
npm run node
```

### Compile contracts

```bash
npm run compile
```

### Deploy locally

```bash
npm run deploy:local
```

### Start frontend

```bash
npm run dev
```

---

## 13. Practical Meaning of the Deployment File

File:

- `deployments/localhost.json`

Example content:

- chain ID
- network name
- RPC URL
- membership contract address
- poll contract address

Why it matters:

- the frontend must know the exact contract addresses
- local addresses change when you redeploy

So after redeploying:

- this file gets updated
- frontend can use the latest addresses

---

## 14. What Happens If a File Is Missing

### If `MembershipNFT.sol` is missing

- no NFT membership exists
- no way to prove a user is a member

### If `Poll.sol` is missing

- there is no poll logic on-chain

### If `deploy.js` is missing

- you must manually deploy and manually copy contract addresses

### If `contracts.ts` is wrong

- frontend will call wrong addresses or wrong function definitions

### If `wagmiConfig.ts` is wrong

- wallet connection or RPC calls will fail

### If `MembershipGateway.tsx` is missing

- the user cannot connect and mint through the intended route

### If `poll.tsx` is missing

- there is no voting screen

---

## 15. In Very Simple Words

If we explain this whole project in the easiest possible way:

```text
This app gives a user a digital membership card.

If the user has the card, the user can vote.
If the user does not have the card, the user cannot vote.

The card is an NFT.
The vote is stored in a smart contract.
The frontend is just the interface that helps the user do these things.
```

---

## 16. Final Mental Model

Think of the project like this:

```text
MembershipNFT.sol = membership card office
Poll.sol          = voting booth
deploy.js         = setup person who builds both offices and writes the addresses down
contracts.ts      = frontend address book + function guide
wagmiConfig.ts    = wallet and network bridge
/                  = introduction page
/access            = check-in counter
/poll              = actual voting room
```

---

## 17. Best Way to Study This Project

Read the files in this order:

1. `contracts/MembershipNFT.sol`
2. `contracts/Poll.sol`
3. `scripts/deploy.js`
4. `frontend/lib/contracts.ts`
5. `frontend/lib/wagmiConfig.ts`
6. `frontend/components/ConnectButton.tsx`
7. `frontend/components/MembershipGateway.tsx`
8. `frontend/pages/poll.tsx`
9. `frontend/pages/index.tsx`

That order matches the real flow of the system.

---

## 18. Short Summary

This project works like this:

1. Deploy smart contracts to Hardhat.
2. Save contract addresses for frontend use.
3. Show a landing page.
4. Move the user to the access page.
5. Connect wallet and mint membership NFT.
6. Verify NFT ownership.
7. Allow voting only for members.
8. Store the vote on-chain.
9. Show the recorded vote in the UI.

---

If you want, I can also create:

- a **very short viva/interview version**
- a **teacher presentation version**
- a **line-by-line code explanation version**

