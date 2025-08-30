import {
  Box,
  Image,
  transition,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/EducationAndExp";
import Backgroung from "./pages/Backgroung";
// import Project from "./pages/Project";
import ContactMe from "./pages/ContactMe";
// import Github from "./components/Github";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div style={{ overflowX: "hidden" }}>
      <Header />
      <Hero colorMode={colorMode} />
      <About />
      <Projects colorMode={colorMode} />
      <Backgroung colorMode={colorMode} />
      {/* <Project colorMode={colorMode} /> */}
      {/* <Github /> */}
      <br />
      <br />
      <ContactMe colorMode={colorMode} />
    </div>
  );
}

export default App;

