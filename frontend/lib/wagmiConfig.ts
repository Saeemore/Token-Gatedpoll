import { createConfig, http } from "wagmi";
import { hardhat } from "wagmi/chains";
import { injected, metaMask } from "wagmi/connectors";
import { localRpcUrl } from "./contracts";

export const wagmiConfig = createConfig({
  chains: [hardhat],
  connectors: [
    metaMask({
      dappMetadata: {
        name: "Token Gated Poll",
      },
    }),
    injected({
      target: "metaMask",
    }),
  ],
  transports: {
    [hardhat.id]: http(localRpcUrl),
  },
  ssr: true,
});
