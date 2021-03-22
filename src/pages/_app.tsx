import {
  ChakraProvider,
  extendTheme,
  ColorModeProvider,
} from "@chakra-ui/react";
import { Global } from "@emotion/react";
import myTheme from "../../styles/theme";
import fonts from "../../styles/font-face";

const theme = extendTheme(myTheme);

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Global styles={fonts} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
