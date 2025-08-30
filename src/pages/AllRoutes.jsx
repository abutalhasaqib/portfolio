import { useColorMode } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../components/About";
import Projects from "../components/EducationAndExp";
import Hero from "../components/Hero";
import ContactMe from "./ContactMe";
import Project from "./Project";
import WorkProjects from "./Skills";

function AllRoutes() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Routes>
        <Route path="/" element={<Hero colorMode={colorMode} />}></Route>
        <Route path="/about" element={<About colorMode={colorMode} />}></Route>
        <Route
          path="skills"
          element={<WorkProjects colorMode={colorMode} />}
        ></Route>
        <Route
          path="/projects"
          element={<Project colorMode={colorMode} />}
        ></Route>
        <Route
          path="/contact"
          element={<ContactMe colorMode={colorMode} />}
        ></Route>
      </Routes>
    </>
  );
}

export default AllRoutes;
