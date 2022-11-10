import { ChakraProvider } from "@chakra-ui/react";
import Hero from "@components/Hero";
import NavBar from "@components/NavBar";
import Features from "@components/Features";
import Statistics from "@components/Statistics";
import HeroTwo from "@components/HeroTwo";
import Footer from "@components/Footer";
import Pricing from "@components/Pricing";
import theme from "./theme";
import HeroHorizontal from "@components/HeroHorizontal";
import "@fontsource/koho";
import Fonts from "./Fonts";
import "@fontsource/klee-one";
import "@fontsource/inter";
import "@fontsource/overpass";
import "@fontsource/aldrich";
import { useRef, useEffect, useState } from "react";
import useObserver from "./hooks/useObserver";
import { FaCreativeCommonsRemix } from "react-icons/fa";

function App() {
  const [currentVisibleIndex, setCurrentVisibleIndex] = useState(0);
  const handleVisible = (index) => {
    return () => {
      setCurrentVisibleIndex(index);
    };
  };

  const heroRef = useObserver(handleVisible(0));
  const featuresRef = useObserver(handleVisible(1));
  const statisticsRef = useObserver(handleVisible(2));
  const pricingRef = useObserver(handleVisible(3));
  const herotwoRef = useObserver(handleVisible(4));

  const handleClickNavLink = (index) => {
    const refs = [heroRef, featuresRef, statisticsRef, pricingRef, herotwoRef];
    refs[index].current.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "center",
    });
  };

  return (
    // app을 Chakra provider로 감싸 주어야 한다.

    <ChakraProvider theme={theme}>
      <Fonts />
      <NavBar
        currentVisibleIndex={currentVisibleIndex}
        onClickNavLink={handleClickNavLink}
      />
      <HeroHorizontal ref={heroRef} />
      <Features ref={featuresRef} />
      <Statistics ref={statisticsRef} />
      <Pricing ref={pricingRef} />
      <HeroTwo ref={herotwoRef} />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
