import Link from "next/link";
import {
  useAccount,
  useChainId,
  useReadContract,
  useReadContracts,
  useWriteContract,
} from "wagmi";
import { hardhat } from "wagmi/chains";
import {
  localRpcUrl,
  membershipAbi,
  membershipAddress,
  pollAbi,
  pollAddress,
} from "../lib/contracts";

const zeroAddress = "0x0000000000000000000000000000000000000000" as const;

export default function Poll() {
  const { address } = useAccount();
  const chainId = useChainId();
  const { writeContract, isPending, error } = useWriteContract();
  const isWrongChain = !!address && chainId !== hardhat.id;

  const { data: balance, error: balanceError } = useReadContract({
    address: membershipAddress as `0x${string}`,
    abi: membershipAbi,
    functionName: "balanceOf",
    args: [address ?? zeroAddress],
    chainId: hardhat.id,
  });

  const isMember = typeof balance === "bigint" && balance > 0n;

  if (!isMember) {
    return (
      <main className="page">
        <section className="card stack">
          <h1>Access Denied</h1>
          <p className="meta">
            {balanceError
              ? `The local membership contract could not be reached on ${localRpcUrl}.`
              : "You need a membership NFT before you can participate in polls."}
          </p>
          <Link className="nav-link" href="/">
            Return to membership page
          </Link>
        </section>
      </main>
    );
  }

  const { data: question } = useReadContract({
    address: pollAddress as `0x${string}`,
    abi: pollAbi,
    functionName: "question",
    chainId: hardhat.id,
  });

  const { data: options } = useReadContract({
    address: pollAddress as `0x${string}`,
    abi: pollAbi,
    functionName: "getOptions",
    chainId: hardhat.id,
  });

  const safeOptions = Array.isArray(options) ? options : [];

  const votesContracts = safeOptions.map((_, index) => ({
    address: pollAddress as `0x${string}`,
    abi: pollAbi,
    functionName: "votes" as const,
    args: [BigInt(index)] as const,
    chainId: hardhat.id,
  }));

  const { data: votesData } = useReadContracts({
    contracts: votesContracts,
  });

  const { data: hasVoted } = useReadContract({
    address: pollAddress as `0x${string}`,
    abi: pollAbi,
    functionName: "hasVoted",
    args: [address ?? zeroAddress],
    chainId: hardhat.id,
  });

  const handleVote = (index: number) => {
    if (!address || isWrongChain) return;

    writeContract({
      address: pollAddress as `0x${string}`,
      abi: pollAbi,
      functionName: "vote",
      args: [BigInt(index)],
      chain: hardhat,
      chainId: hardhat.id,
      account: address,
    });
  };

  return (
    <main className="page">
      <section className="hero">
        <div className="stack">
          <p className="hero__eyebrow">Members only ballot</p>
          <h1 className="hero__title">
            {typeof question === "string" ? question : "Loading poll..."}
          </h1>
          <p className="hero__subtitle">
            Each connected member wallet gets one vote. Results update from the smart
            contract state on your local chain.
          </p>
        </div>
      </section>

      <section className="grid">
        <article className="card stack">
          <div className="status-row">
            <span className="pill pill--success">Membership verified</span>
            <span className={`pill ${hasVoted ? "pill--success" : ""}`}>
              {hasVoted ? "Vote recorded" : "Vote not submitted yet"}
            </span>
          </div>

          {isWrongChain && (
            <div className="message message--warning">
              Switch your wallet to Hardhat localhost before voting.
            </div>
          )}

          {error && <div className="message message--error">{error.message}</div>}

          <div className="option-list">
            {safeOptions.map((option, index) => (
              <div key={index} className="option-card">
                <div className="option-card__header">
                  <span className="option-card__title">{String(option)}</span>
                  <span className="votes">
                    {typeof votesData?.[index]?.result === "bigint"
                      ? `${votesData[index].result.toString()} votes`
                      : "0 votes"}
                  </span>
                </div>
                <button
                  className="btn btn--full"
                  onClick={() => handleVote(index)}
                  disabled={!address || !!hasVoted || isPending || isWrongChain}
                >
                  {isPending ? "Submitting vote..." : `Vote for ${String(option)}`}
                </button>
              </div>
            ))}
          </div>

          <Link className="nav-link" href="/">
            Back to membership page
          </Link>
        </article>
      </section>
    </main>
  );
}
