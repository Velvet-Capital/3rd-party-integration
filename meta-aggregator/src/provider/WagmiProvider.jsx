
import { http, createConfig } from "wagmi";
import { base, mainnet, bsc } from "wagmi/chains";
import { injected } from "wagmi/connectors";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";

const config = createConfig({
  chains: [
    //mainnet,
    base,
    //bsc,
  ],

  connectors: [
    injected({ target: "metaMask" }), // index 0
  ],

  transports: {
    [mainnet.id]: http(),
    [base.id]: http("https://base-rpc.publicnode.com"),
    [bsc.id]: http(),
  },
});

const queryClient = new QueryClient();

export function WagmiProviderComp({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
