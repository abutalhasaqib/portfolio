import { Box, Image } from "@chakra-ui/react";
import React from "react";
import WorkProjects from "./Skills";
import { GiSkills } from "react-icons/gi";

function Backgroung({ colorMode }) {
  return (
    <Box position="relative" bg="linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)">
      <Box position={"absolute"} w="100%" opacity="0.1">
        <Image
          src="https://d1edzrgaei4psf.cloudfront.net/newHome/12.svg"
          w="100%"
        />
      </Box>
      {/* Additional background elements */}
      <Box
        position="absolute"
        top="15%"
        left="5%"
        w="200px"
        h="200px"
        borderRadius="50%"
        bg="rgba(255, 255, 255, 0.2)"
        filter="blur(100px)"
        animation="float 9s ease-in-out infinite"
      />
      <Box
        position="absolute"
        bottom="20%"
        right="10%"
        w="150px"
        h="150px"
        borderRadius="50%"
        bg="rgba(128, 90, 213, 0.2)"
        filter="blur(80px)"
        animation="float 7s ease-in-out infinite reverse"
      />
      <WorkProjects />
    </Box>
  );
}
export default Backgroung;
