import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { AppProps } from "next/app";
import { WagmiProvider } from "wagmi";
import { wagmiConfig } from "../lib/wagmiConfig";
import "../styles/globals.css";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>
        <div className="app-shell">
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
