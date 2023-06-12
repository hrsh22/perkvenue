import React from "react";
import App from "next/app";
import Head from "next/head";
import Router from "next/router";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "styles/tailwind.css";
import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react'
import { configureChains, createClient, WagmiConfig } from 'wagmi'
import { polygonMumbai, goerli, mainnet, polygon } from 'wagmi/chains'

const chains = [polygonMumbai, goerli, mainnet, polygon]
const projectId = 'f32c7097c07c8c1552f46619147dff35'

const { provider } = configureChains(chains, [w3mProvider({ projectId })])
const wagmiClient = createClient({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, version: 1, chains }),
  provider
})
const ethereumClient = new EthereumClient(wagmiClient, chains);

Router.events.on("routeChangeStart", (url) => {
  console.log(`Loading: ${url}`);
  document.body.classList.add("body-page-transition");
});
Router.events.on("routeChangeComplete", () => {
  document.body.classList.remove("body-page-transition");
});
Router.events.on("routeChangeError", () => {
  document.body.classList.remove("body-page-transition");
});

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.layout || (({ children }) => <>{children}</>);

    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <title>PerkVenue</title>
        </Head>
        <Layout>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
          </WagmiConfig>

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient}  themeVariables={{
    // '--w3m-font-family': 'ui-sans-serif,system-ui',
    '--w3m-accent-color': '#334155'
  }} 
  themeMode="light"
  enableNetworkView= "true"
  chainImages={{
    5: "https://assets-global.website-files.com/6364e65656ab107e465325d2/637aee14aa9d9f521437ec16_hYC2y965v3QD7fEoVvutzGbJzVGLSOk6RZPwEQWcA_E.jpeg",
    80001: "https://assets-global.website-files.com/6364e65656ab107e465325d2/637adca2e1a09547acd85968_Y_44LwHNRnOEvnRExgnO1UujtZwn7zq7BCb4oxxHgpI.jpeg",
  }}
  />
        </Layout>
      </React.Fragment>
    );
  }
}