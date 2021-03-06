import Head from "next/head";
import { MicroStacksProvider } from "@micro-stacks/react";
import { ChakraProvider, Box } from "@chakra-ui/react";
import Footer from "../src/components/footer";
import Header from "../src/components/header";
import customTheme from "../theme";

function MyApp({ Component, pageProps }) {
  return (
    <MicroStacksProvider
      authOptions={{
        appDetails: {
          name: "ccips",
          icon: "logo",
        },
      }}
    >
      <Head>
        {/* <!-- Title and Description --> */}
        <title>Vote on the CityCoins Upgrade!</title>
        <meta name="title" content="Vote on the CityCoins Upgrade!" />
        <meta
          name="description"
          content="Proposed protocol upgrades include on-chain voting and a compressed emissions schedule."
        />
        {/* <!-- Google / Search Engine Meta Tags --> */}
        <meta itemProp="name" content="Vote on the CityCoins Upgrade!" />
        <meta
          itemProp="description"
          content="Proposed protocol upgrades include on-chain voting and a compressed emissions schedule."
        />
        <meta itemProp="image" content="/citycoins-protocol-upgrade.png" />
        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://api.citycoins.co" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Vote on the CityCoins Upgrade!" />
        <meta
          property="og:description"
          content="Proposed protocol upgrades include on-chain voting and a compressed emissions schedule."
        />
        <meta property="og:image" content="/citycoins-protocol-upgrade.png" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Vote on the CityCoins Upgrade!" />
        <meta
          name="twitter:description"
          content="Proposed protocol upgrades include on-chain voting and a compressed emissions schedule."
        />
        <meta name="twitter:image" content="/citycoins-protocol-upgrade.png" />
        {/* <!-- Meta Tags Above Generated via http://heymeta.com --> */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        {/* <!-- Favicons and code below from https://favicon-generator.org --> */}
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href="/apple-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href="/apple-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/apple-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href="/apple-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/apple-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/apple-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/apple-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/apple-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-icon-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href="/favicon-96x96.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <ChakraProvider theme={customTheme}>
        <Header />
        <Box as="main" pt={{ base: 24, md: 32 }} pb={{ base: 24, md: 16 }}>
          <Component {...pageProps} />
        </Box>
        <Footer />
      </ChakraProvider>
    </MicroStacksProvider>
  );
}

export default MyApp;
