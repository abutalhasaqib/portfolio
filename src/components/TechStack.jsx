import { Avatar, Grid, HStack, Text } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";

function TechStack() {
  return (
    <Grid
      gridTemplateColumns={{ base: "repeat(3,1fr)", md: "repeat(4,1fr)" }}
      rowGap="3"
    >
      <HStack w="fit-content">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ rotate: 360, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 60,
          }}
        >
          <Avatar
            size="xs"
            src="https://cdn1.iconfinder.com/data/icons/soleicons-fill-vol-1/64/reactjs_javascript_library_atom_atomic_react-128.png"
          />{" "}
        </motion.div>
        <Text letterSpacing={"1px"} as="i" fontSize="13px" fontWeight="500">
          {" "}
          React JS
        </Text>
      </HStack>
      <HStack w="fit-content">
        <Avatar
          size="xs"
          src="https://i.ibb.co/4PNb6C0/rzyl-Ujaf-400x400-removebg-preview.png"
        />{" "}
        <Text letterSpacing={"1px"} as="i" fontSize="13px" fontWeight="500">
          {" "}
          Chakra-UI
        </Text>
      </HStack>
      <HStack w="fit-content">
        <Avatar
          size="xs"
          src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-128.png"
        />{" "}
        <Text letterSpacing={"1px"} as="i" fontSize="13px" fontWeight="500">
          Firebase
        </Text>
      </HStack>
    </Grid>
  );
}

export default TechStack;
