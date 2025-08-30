import { CalendarIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
function Education() {
  return (
    <Flex flexDirection={"column"} gap="3" lineHeight={"2"}>
      <Heading letterSpacing={"1px"} size="sm">
        BACHELOR OF TECHNOLOGY (MECHANICAL ENGINEERING)
      </Heading>
      <motion.div
        initial={{
          x: 80,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
          @ Krishna Institute of Engineering and Technology, Ghaziabad <br />
          <CalendarIcon /> 2015 - 2019 <br />
          <StarIcon color="purple.500" /> Grade 70%
        </Text>
      </motion.div>
      
      <Heading letterSpacing={"1px"} size="sm">
        DIPLOMA (MECHANICAL ENGINEERING)
      </Heading>
      <motion.div
        initial={{
          x: 80,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
          @ Government Polytechnic College <br />
          <CalendarIcon /> 2012 - 2015 <br />
          <StarIcon color="purple.500" /> Grade 75%
        </Text>
      </motion.div>
      
      <Heading letterSpacing={"1px"} size="sm">
        SECONDARY SCHOOL CERTIFICATE (SSC)
      </Heading>
      <motion.div
        initial={{
          x: 80,
          opacity: 0,
        }}
        transition={{
          duration: 0.8,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
      >
        <Text letterSpacing={"1px"} as="i" fontWeight={"400"}>
          @ Universal English High School <br />
          <CalendarIcon /> 2010-2012 <br />
          <StarIcon color="purple.500" /> Grade 85%
        </Text>
      </motion.div>
    </Flex>
  );
}

export default Education;
