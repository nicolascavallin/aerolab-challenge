import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import { AppProvider } from "../src/context/context";

const theme = {
  colors: {
    neutral: {
      900: "#252F3D",
      600: "#7C899C",
      500: "#8FA3BF",
      300: "#DAE4F2",
      200: "#E6EDF7",
      100: "#F5F9FF",
      0: "#FFFFFF",
    },
    brand: {
      light: "#e5f0ff",
      light2: "#cce1ff",
    },
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Aerolab Challenge</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <Component {...pageProps} />
        </AppProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
