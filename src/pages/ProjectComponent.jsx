import {
  Flex,
  Box,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEye } from "react-icons/ai";
import { BsFillCameraVideoFill, BsGithub } from "react-icons/bs";

function ProjectComponent({
  image,
  title,
  techStack,
  desc,
  link,
  watch,
  github,
  solo,
  colorMode,
  area,
}) {
  return (
    <Flex
      direction="column"
      bgColor={colorMode == "light" ? "white" : "white"}
      shadow={"xl"}
      borderRadius="20px"
      py="5"
    >
      <Box w="90%" mx="auto">
        <Image borderRadius={"5px"} src={image} />
      </Box>
      <Flex w="full" justifyContent={"center"}>
        <Heading
          color={colorMode == "light" ? "Black" : "Black"}
          mt="4"
          size="md"
          fontWeight={"500"}
          letterSpacing="2px"
        >
          {title}
        </Heading>
      </Flex>
      <br />
      <Box w="90%" mx="auto">
        <Text
          // as='kbd'
          fontSize={"13px"}
          color="blackAlpha.800"
          fontWeight={"400"}
          letterSpacing=".8px"
        >
          {desc}
        </Text>
      </Box>
      <Box w="90%" m="auto" mt="2">
        <Heading
          letterSpacing="1px"
          fontSize={"13px"}
          fontWeight="500"
          display={area ? "flex" : "none"}
        >
          Responsibilities
        </Heading>
        {area &&
          area.map((el, i) => {
            return (
              <Text
                letterSpacing=".4px"
                fontSize={"13px"}
                color="blackAlpha.800"
              >
                • {el}
              </Text>
            );
          })}
        <Text
          fontSize={"13px"}
          color="red"
          as="kbd"
          size="sm"
          fontWeight={"400"}
          letterSpacing=".7px"
        >
          ◉ {solo}
        </Text>
      </Box>
      <Box w="90%" m="auto" mt="4">
        <Text color="red" fontWeight={"500"} fontSize={"15px"}>
          Tech Stack :
        </Text>
        <Text
          fontSize={"14px"}
          letterSpacing=".9px"
          fontWeight={"500"}
          color="blackAlpha.700"
          width={area ? "full" : "100px"}
        >
          {techStack}
        </Text>
      </Box>
      <br />
      <Box mt="auto" w="full">
        <HStack w="60%" m="auto" justifyContent={"space-between"}>
          <a href={link} target="_blank">
            <AiFillEye color="Black" fontSize={"40px"} />
          </a>
          <a href={github} target="_blank">
            <BsGithub color="Black" fontSize={"35px"} />
          </a>
          <a href={watch} target="_blank">
            <BsFillCameraVideoFill color="Black" fontSize={"35px"} />
          </a>
        </HStack>
      </Box>
    </Flex>
  );
}

export default ProjectComponent;
