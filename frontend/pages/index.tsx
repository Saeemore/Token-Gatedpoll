import { useEffect, useState } from "react";
import Link from "next/link";
import { useAccount, useChainId, useReadContract, useWriteContract } from "wagmi";
import { hardhat } from "wagmi/chains";
import ConnectButton from "../components/ConnectButton";
import {
  localRpcUrl,
  membershipAbi,
  membershipAddress,
  pollAddress,
} from "../lib/contracts";

const zeroAddress = "0x0000000000000000000000000000000000000000" as const;

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { writeContract, isPending, error: writeError, data: txData } = useWriteContract();
  const isWrongChain = isConnected && chainId !== hardhat.id;

  const {
    data,
    refetch,
    error: membershipReadError,
    isLoading: isCheckingMembership,
  } = useReadContract({
    address: membershipAddress as `0x${string}`,
    abi: membershipAbi,
    functionName: "balanceOf",
    args: [address ?? zeroAddress],
    chainId: hardhat.id,
  });

  const isMember = typeof data === "bigint" && data > 0n;

  const handleMint = () => {
    if (!address) {
      setError("Please connect your wallet first.");
      return;
    }

    if (isWrongChain) {
      setError("Switch MetaMask to your local Hardhat network at http://127.0.0.1:8545.");
      return;
    }

    setError(null);
    writeContract({
      address: membershipAddress as `0x${string}`,
      abi: membershipAbi,
      functionName: "mint",
      args: [],
      chain: hardhat,
      chainId: hardhat.id,
      account: address,
    });
  };

  useEffect(() => {
    if (writeError) {
      setError(writeError.message || "Transaction failed.");
    }
  }, [writeError]);

  useEffect(() => {
    if (!membershipReadError) return;

    setError(
      [
        "Local membership contract is unavailable.",
        `Start your Hardhat node at ${localRpcUrl}, then redeploy the contracts.`,
        `Expected membership contract: ${membershipAddress}.`,
        `Expected poll contract: ${pollAddress}.`,
      ].join(" ")
    );
  }, [membershipReadError]);

  useEffect(() => {
    if (txData) {
      void refetch();
    }
  }, [txData, refetch]);

  if (!mounted) return null;

  return (
    <main className="page">
      <section className="hero">
        <div className="stack">
          <p className="hero__eyebrow">Membership-gated governance</p>
          <h1 className="hero__title">Token Gated Poll</h1>
          <p className="hero__subtitle">
            Connect your wallet, mint a membership NFT on your local Hardhat chain, and
            unlock access to the poll only verified members can vote in.
          </p>
        </div>
      </section>

      <section className="grid grid--two">
        <article className="card stack">
          <div>
            <h2>1. Connect Wallet</h2>
            <p className="meta">
              Your wallet must be connected to the local Hardhat network for reads and
              transactions to succeed.
            </p>
          </div>
          <ConnectButton />
          {isWrongChain && (
            <div className="message message--warning">
              MetaMask is connected, but not to `localhost:8545`. Add the Hardhat network
              and switch before minting or voting.
            </div>
          )}
        </article>

        <article className="card stack">
          <div>
            <h2>2. Membership Access</h2>
            <p className="meta">
              The poll checks NFT ownership before allowing access, so membership is the
              gatekeeper for the full experience.
            </p>
          </div>

          <div className="status-row">
            <span className={`pill ${isMember ? "pill--success" : "pill--danger"}`}>
              {isMember ? "Membership active" : "No membership NFT yet"}
            </span>
            {isConnected && (
              <span className="pill">
                {typeof data === "bigint"
                  ? `NFT balance: ${data.toString()}`
                  : isCheckingMembership
                    ? "Checking balance..."
                    : "Balance unavailable"}
              </span>
            )}
          </div>

          {error && <div className="message message--error">{error}</div>}

          {membershipReadError && (
            <div className="message message--warning">
              The local contracts were not found at the configured addresses. Run
              `npm run node` in one terminal and `npm run deploy:local` in another, then
              refresh this page.
            </div>
          )}

          {!isConnected && (
            <p className="meta">Connect your wallet first, then mint your membership NFT.</p>
          )}

          {isConnected && !isMember && (
            <button className="btn" onClick={handleMint} disabled={isPending || isWrongChain}>
              {isPending ? "Minting membership..." : "Mint Membership NFT"}
            </button>
          )}

          {isConnected && isMember && (
            <Link className="btn btn--full" href="/poll">
              Enter Members Poll
            </Link>
          )}
        </article>
      </section>
    </main>
  );
}
