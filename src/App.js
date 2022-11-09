import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import ThreeTierPricing from "@components/Pricing";
import theme from "./theme";
import HeroHorizontal from "@components/HeroHorizontal"
import "@fontsource/koho";
import Fonts from "./Fonts";
import "@fontsource/klee-one";
import "@fontsource/inter";
import "@fontsource/overpass";
import "@fontsource/aldrich";



function App() {
  return (
    // app을 Chakra provider로 감싸 주어야 한다.

    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar />
   
      <HeroHorizontal/>
      <Features />
      <Statistics />
      <ThreeTierPricing />
      <HeroTwo />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
