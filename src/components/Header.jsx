import { ReactNode } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  useColorMode,
  VStack,
  Heading,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { Link, NavLink } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useState } from "react";

const Links = [
  { path: "HERO__", title: "HOME" },
  { path: "ABOUT__", title: "ABOUT" },
  { path: "SKILLS__", title: "SKILLS" },
  // { path: "PROJECTS__", title: "PROJECTS" }, // Commented out as requested
  { path: "CONTACT__", title: "CONTACT" },
];

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [navbar, setNavbar] = useState(false);

  const changeNavbar = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", () => {
    changeNavbar();
  });

  return (
    <>
      <Box
        fontFamily="Poppins"
        letterSpacing={"1.2px"}
        bg={!navbar ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "rgba(255, 255, 255, 0.95)"}
        backdropFilter={!navbar ? "none" : "blur(10px)"}
        px={{ base: "3", md: "8" }}
        position="fixed"
        top="0"
        left="0"
        right="0"
        zIndex={4}
        color={!navbar ? "white" : "gray.800"}
        shadow={!navbar ? "" : "lg"}
        borderBottom={!navbar ? "" : "1px solid"}
        borderColor={!navbar ? "" : "gray.200"}
        transition="all 0.3s ease"
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>            <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          variant="ghost"
          _hover={{ bg: !navbar ? "whiteAlpha.200" : "gray.100" }}
          onClick={isOpen ? onClose : onOpen}
        />
          <HStack spacing={8} alignItems={"center"}>
            <motion.div
              initial={{
                x: -500,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                x: 0,
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1.2,
              }}
            >
              <Heading
                letterSpacing={3}
                fontFamily={"Inspiration"}
                color={!navbar ? "white" : "purple.600"}
                fontWeight="700"
              >
                Abu Talha
              </Heading>
            </motion.div>
          </HStack>
          <HStack
            as={"nav"}
            spacing={20}
            display={{ base: "none", md: "flex" }}
            fontWeight="600"
            fontSize="16px"
          >
            {Links.map((elem) => (
              <AnchorLink
                href={`#${elem.path}`}
                key={elem.title}
                style={{
                  color: !navbar ? "white" : "#2D3748",
                  textDecoration: "none",
                  padding: "8px 12px",
                  borderRadius: "8px",
                  transition: "all 0.3s",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = !navbar ? "rgba(255,255,255,0.2)" : "#F7FAFC";
                  e.target.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "translateY(0)";
                }}
              >
                {elem.title}
              </AnchorLink>
            ))}
            <a
              href="/talha_cv.pdf"
              download="Abu-Talha-Resume.pdf"
              style={{
                color: !navbar ? "white" : "#2D3748",
                textDecoration: "none",
                padding: "8px 12px",
                borderRadius: "8px",
                transition: "all 0.3s",
                border: !navbar ? "1px solid rgba(255,255,255,0.5)" : "1px solid #805AD5",
              }}
            >
              RESUME
            </a>
          </HStack>
          <motion.div
            initial={{
              x: 500,
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              x: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
            }}
          >
            {/* <Button
              bg="transparent"
              _hover={{ bg: !navbar ? "whiteAlpha.200" : "gray.100" }}
              onClick={toggleColorMode}
              variant="ghost"
              color={!navbar ? "white" : "gray.800"}
              borderRadius={"full"}
            >
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button> */}
          </motion.div>
        </Flex>
        {isOpen ? (
          <VStack
            justifyContent={"center"}
            flexDirection="row"
            textAlign="center"
            alignItems="center"
            h="100vh"
            display={{ md: "none" }}
            fontWeight="500"
            fontSize="16px"
            bg={!navbar ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)" : "rgba(255, 255, 255, 0.95)"}
          >
            <VStack spacing={14} mt="20">
              {Links.map((elem) => (
                <AnchorLink href={`#${elem.path}`} key={elem.title}>
                  {elem.title}
                </AnchorLink>
              ))}
              <a
                href="/talha_cv.pdf"
                download="Abu-Talha-Resume.pdf"
              >
                RESUME
              </a>
            </VStack>
          </VStack>
        ) : null}
      </Box>
    </>
  );
}

export default Header;

/*

 <motion.div
        
      >

*/
