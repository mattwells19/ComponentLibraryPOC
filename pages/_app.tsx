import { ThemeProvider } from "@emotion/react"
import type { AppProps } from "next/app"
import theme from "../styles/theme"
import "../styles/globals.css";
import Head from "next/head";

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emotion POC</title>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default CustomApp;
