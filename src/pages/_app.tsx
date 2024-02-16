import "../styles/globals.css";
import "@fontsource/roboto";
import "react-multi-carousel/lib/styles.css";

import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../config/theme";
import { Client, HydrationProvider } from "react-hydration-provider";
import { I18nextProvider } from "react-i18next";
import i18n from "src/i18n";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <I18nextProvider i18n={i18n}>
      <HydrationProvider>
        <ChakraProvider theme={theme}>
          <Client>
            <Component {...pageProps} />
          </Client>
        </ChakraProvider>
      </HydrationProvider>
    </I18nextProvider>
  );
}

export default MyApp;
