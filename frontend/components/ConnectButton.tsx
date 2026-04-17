import { useAccount, useChainId, useConnect, useDisconnect, useSwitchChain } from "wagmi";
import { hardhat } from "wagmi/chains";
import { localRpcUrl } from "../lib/contracts";

function truncateAddress(address?: string) {
  if (!address) return "";
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export default function ConnectButton() {
  const { address, isConnected } = useAccount();
  const chainId = useChainId();
  const { connect, connectors, isPending } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain, isPending: isSwitchingChain } = useSwitchChain();
  const isWrongChain = isConnected && chainId !== hardhat.id;

  if (isConnected) {
    return (
      <div className="stack">
        <div className="status-row">
          <span className="pill pill--success">Wallet connected</span>
          <span className={`pill ${isWrongChain ? "pill--danger" : ""}`}>
            {truncateAddress(address)}
          </span>
          <span className={`pill ${isWrongChain ? "pill--danger" : "pill--success"}`}>
            {isWrongChain ? "Switch to Hardhat Localhost" : "Connected to localhost:8545"}
          </span>
        </div>
        <button className="btn btn--ghost" onClick={() => disconnect()}>
          Disconnect wallet
        </button>
        {isWrongChain && (
          <button
            className="btn"
            onClick={() => switchChain({ chainId: hardhat.id })}
            disabled={isSwitchingChain}
          >
            {isSwitchingChain ? "Switching network..." : "Switch to Hardhat Localhost"}
          </button>
        )}
      </div>
    );
  }

  if (!connectors || connectors.length === 0) {
    return (
      <div className="message message--warning">
        No injected wallet was detected. Open this page in MetaMask-enabled Chrome or Brave,
        then refresh and connect again.
      </div>
    );
  }

  return (
    <div className="stack">
      {connectors.map((connector) => (
        <button
          key={connector.uid}
          className="btn"
          onClick={() => connect({ connector, chainId: hardhat.id })}
          disabled={isPending}
        >
          {isPending ? "Connecting..." : `Connect ${connector.name}`}
        </button>
      ))}
      <p className="meta">Expected local RPC: {localRpcUrl}</p>
    </div>
  );
}
