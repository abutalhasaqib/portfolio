import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { SocialIcon } from "react-social-icons";
import { ChevronRightIcon } from "@chakra-ui/icons";
import { HiOutlineDownload } from "react-icons/hi";
import pixel2 from "../Images/pixel3.jpg"


function Hero({ colorMode }) {
  const [text, count] = useTypewriter({
    words: [
      "MERN Stack Developer",
      "Problem Solver",
      "Code Architect",
    ],
    loop: true,
    typeSpeed: 100,
    delaySpeed: 2000,
    deleteSpeed: 80,
  });
  
  return (
    <Box
      id="HERO__"
      position="relative"
      minH="100vh"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      overflow="hidden"
      display="flex"
      alignItems="center"
    >
      {/* Animated Background Elements */}
      <Box
        position="absolute"
        top="10%"
        left="10%"
        w="300px"
        h="300px"
        borderRadius="50%"
        bg="rgba(255, 255, 255, 0.1)"
        filter="blur(100px)"
        animation="float 6s ease-in-out infinite"
      />
      <Box
        position="absolute"
        top="60%"
        right="10%"
        w="200px"
        h="200px"
        borderRadius="50%"
        bg="rgba(255, 255, 255, 0.08)"
        filter="blur(80px)"
        animation="float 8s ease-in-out infinite reverse"
      />
      
      {/* Geometric Shapes */}
      <Box
        position="absolute"
        top="20%"
        right="20%"
        w="60px"
        h="60px"
        border="2px solid rgba(255, 255, 255, 0.3)"
        borderRadius="12px"
        transform="rotate(45deg)"
        animation="rotate 10s linear infinite"
      />
      <Box
        position="absolute"
        bottom="30%"
        left="15%"
        w="40px"
        h="40px"
        bg="rgba(255, 255, 255, 0.2)"
        borderRadius="50%"
        animation="pulse 4s ease-in-out infinite"
      />

      <Grid
        templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
        w="full"
        maxW="1200px"
        mx="auto"
        px={{ base: 6, md: 8 }}
        gap={12}
        alignItems="center"
        position="relative"
        zIndex={2}
      >
        {/* Left Content */}
        <VStack spacing={8} align={{ base: "center", lg: "start" }} textAlign={{ base: "center", lg: "left" }}>
          <Box>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color="whiteAlpha.900"
              fontWeight="500"
              mb={4}
              letterSpacing="wide"
            >
              👋 Hello, I'm
            </Text>
            
            <Heading
              as="h1"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              color="white"
              lineHeight="shorter"
              letterSpacing="tight"
              mb={4}
            >
              Abu Talha
            </Heading>
            
            <Box h="60px" display="flex" alignItems="center" justifyContent={{ base: "center", lg: "flex-start" }}>
              <Text
                fontSize={{ base: "xl", md: "2xl" }}
                color="whiteAlpha.800"
                fontWeight="600"
              >
                I'm a{" "}
                <Text as="span" color="yellow.300" fontWeight="700">
                  {text}
                </Text>
                <Cursor cursorColor="#F6E05E" />
              </Text>
            </Box>
          </Box>

          <Text
            fontSize={{ base: "lg", md: "xl" }}
            color="whiteAlpha.800"
            lineHeight="relaxed"
            maxW="500px"
            fontWeight="400"
          >
            Building modern full-stack web applications with React, Node.js, MongoDB and Express.js. 
            Specialized in creating scalable MERN solutions with 4+ years of professional experience.
          </Text>

          <HStack spacing={6} flexWrap="wrap" justify={{ base: "center", lg: "flex-start" }}>
            <Button
              as="a"
              href="/talha_cv.pdf"
              download="Abu-Talha-Resume.pdf"
              size="lg"
              bg="white"
              color="purple.600"
              _hover={{
                transform: "translateY(-3px)",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                bg: "gray.50"
              }}
              borderRadius="full"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="600"
              transition="all 0.3s ease"
              leftIcon={<HiOutlineDownload />}
              textDecoration="none"
              _focus={{ textDecoration: "none" }}
            >
              Download CV
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              borderColor="white"
              color="white"
              _hover={{
                bg: "whiteAlpha.200",
                transform: "translateY(-3px)",
              }}
              borderRadius="full"
              px={8}
              py={6}
              fontSize="lg"
              fontWeight="600"
              transition="all 0.3s ease"
              onClick={() => document.getElementById('CONTACT__').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Talk
            </Button>
          </HStack>

          <HStack spacing={4} mt={4}>
            <SocialIcon
              url="https://linkedin.com/in/talhasaqib03"
              target="_blank"
              fgColor="white"
              bgColor="transparent"
              style={{ 
                height: 45, 
                width: 45,
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
              }}
            />
            <SocialIcon
              url=""
              target="_blank"
              fgColor="white"
              bgColor="transparent"
              style={{ 
                height: 45, 
                width: 45,
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
              }}
            />
            <SocialIcon
              url="mailto:talhaasaaqib@gmail.com"
              network="email"
              target="_blank"
              fgColor="white"
              bgColor="transparent"
              style={{ 
                height: 45, 
                width: 45,
                border: "2px solid rgba(255,255,255,0.3)",
                borderRadius: "50%",
              }}
            />
          </HStack>
        </VStack>

        {/* Right Content - Profile Image */}
        <Flex justify="center" align="center">
          <Box
            position="relative"
            w={{ base: "280px", md: "350px", lg: "400px" }}
            h={{ base: "280px", md: "350px", lg: "400px" }}
          >
            {/* Animated Ring */}
            <Box
              position="absolute"
              top="-20px"
              left="-20px"
              right="-20px"
              bottom="-20px"
              borderRadius="50%"
              border="3px solid"
              borderColor="transparent"
              borderTopColor="yellow.300"
              borderRightColor="pink.300"
              animation="spin 8s linear infinite"
            />
            
            {/* Gradient Background */}
            <Box
              position="absolute"
              top="-10px"
              left="-10px"
              right="-10px"
              bottom="-10px"
              borderRadius="50%"
              bg="linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))"
              filter="blur(20px)"
            />
            
            {/* Profile Image */}
            <Image
              src={pixel2}
              alt="Abu Talha"
              w="full"
              h="full"
              objectFit="cover"
              borderRadius="50%"
              border="4px solid rgba(255,255,255,0.3)"
              position="relative"
              zIndex={2}
            />
            
            {/* Floating Tech Icons */}
            <Box
              position="absolute"
              top="10%"
              right="-10%"
              w="50px"
              h="50px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 3s ease-in-out infinite"
            >
              <Text fontSize="24px">⚛️</Text>
            </Box>
            
            <Box
              position="absolute"
              bottom="15%"
              left="-15%"
              w="50px"
              h="50px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 4s ease-in-out infinite reverse"
            >
              <Text fontSize="24px">🚀</Text>
            </Box>
            
            <Box
              position="absolute"
              top="60%"
              right="-5%"
              w="50px"
              h="50px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 5s ease-in-out infinite"
            >
              <Text fontSize="24px">💻</Text>
            </Box>
            
            {/* MongoDB Icon */}
            <Box
              position="absolute"
              top="5%"
              left="-8%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 6s ease-in-out infinite"
            >
              <Text fontSize="20px">🍃</Text>
            </Box>
            
            {/* Express.js Icon */}
            <Box
              position="absolute"
              bottom="5%"
              right="-12%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 3.5s ease-in-out infinite reverse"
            >
              <Text fontSize="20px">⚡</Text>
            </Box>
            
            {/* Node.js Icon */}
            <Box
              position="absolute"
              top="35%"
              left="-12%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 4.5s ease-in-out infinite"
            >
              <Text fontSize="20px">📗</Text>
            </Box>
            
            {/* JavaScript Icon */}
            {/* <Box
              position="absolute"
              bottom="35%"
              left="-5%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 5.5s ease-in-out infinite reverse"
            >
              <Text fontSize="20px">🟨</Text>
            </Box> */}
            
            {/* Code Icon */}

            
            {/* Database Icon */}
  
            
            {/* HTML Icon */}
            <Box
              position="absolute"
              top="45%"
              right="-8%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 3.8s ease-in-out infinite"
            >
              <Text fontSize="20px">🌐</Text>
            </Box>
            
            {/* CSS Icon */}
            
            {/* TypeScript Icon */}
            <Box
              position="absolute"
              top="15%"
              left="-5%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 4.8s ease-in-out infinite"
            >
              <Text fontSize="20px">🔷</Text>
            </Box>
            
            {/* Next.js Icon */}

            
            {/* Supabase Icon */}
            {/* <Box
              position="absolute"
              top="75%"
              left="-8%"
              w="45px"
              h="45px"
              bg="whiteAlpha.200"
              borderRadius="12px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              backdropFilter="blur(10px)"
              animation="float 5.8s ease-in-out infinite"
            >
              <Text fontSize="20px">🟢</Text>
            </Box> */}
            
            {/* Shadcn Icon */}
  
          </Box>
        </Flex>
      </Grid>

      {/* Scroll Indicator */}
      <Box
        position="absolute"
        bottom="30px"
        left="50%"
        transform="translateX(-50%)"
        color="whiteAlpha.700"
        animation="bounce 2s infinite"
      >
        <VStack spacing={2}>
          <Text fontSize="sm" fontWeight="500">Scroll Down</Text>
          <Box w="2px" h="30px" bg="whiteAlpha.500" borderRadius="full" />
        </VStack>
      </Box>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes rotate {
          from { transform: rotate(45deg); }
          to { transform: rotate(405deg); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.5; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        @keyframes bounce {
          0%, 20%, 53%, 80%, 100% { transform: translateY(0) translateX(-50%); }
          40%, 43% { transform: translateY(-15px) translateX(-50%); }
          70% { transform: translateY(-7px) translateX(-50%); }
          90% { transform: translateY(-3px) translateX(-50%); }
        }
      `}</style>
    </Box>
  );
}

export default Hero;
