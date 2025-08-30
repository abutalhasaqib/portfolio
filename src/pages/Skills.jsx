import {
  Avatar,
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Image,
  Text,
  VStack,
  HStack,
  Badge,
  useColorModeValue,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";

// MERN Stack & Related Technologies
const skillCategories = [
  {
    title: "Frontend Technologies",
    color: "rgba(147, 51, 234, 0.3)",
    skills: [
      {
        name: "HTML5",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        color: "#E34F26"
      },
      {
        name: "CSS3",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        color: "#1572B6"
      },
      {
        name: "JavaScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        color: "#F7DF1E"
      },
      {
        name: "React",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        color: "#61DAFB"
      },
      {
        name: "Next.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        color: "#000000"
      },
      {
        name: "TypeScript",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        color: "#3178C6"
      }
    ]
  },
  {
    title: "Backend Technologies",
    color: "rgba(79, 70, 229, 0.3)",
    skills: [
      {
        name: "Node.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        color: "#339933"
      },
      {
        name: "Express.js",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        color: "#000000"
      },
      {
        name: "MongoDB",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#47A248"
      },
      {
        name: "Mongoose",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        color: "#880000"
      },
      {
        name: "Postgres",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        color: "#880000"
      }
    ]
  },
  {
    title: "Development Tools",
    color: "rgba(16, 185, 129, 0.3)",
    skills: [
      {
        name: "Git",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        color: "#F05032"
      },
      {
        name: "GitHub",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
        color: "#181717"
      },
      {
        name: "VS Code",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
        color: "#007ACC"
      },
      {
        name: "Postman",
        icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        color: "#FF6C37"
      },
      {
        name: "Bolt.new",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bolt/bolt-original.svg",
        color: "#000000"
      },
      {
        name: "Lovable.dev",
        icon: "https://lovable.dev/favicon.ico",
        color: "#FF6B9D"
      },
      {
        name: "GitHub Copilot",
        icon: "https://github.githubassets.com/images/modules/site/copilot/copilot.png",
        color: "#000000"
      },
      {
        name: "Supabase",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
        color: "#3ECF8E"
      },
      {
        name: "v0.dev",
        icon: "",
        color: "#3ECF8E"
      },
      {
        name: "Directus",
        icon: "",
        color: "#263238"
      }
    ]
  },
  {
    title: "Styling & UI",
    color: "rgba(236, 72, 153, 0.3)",
    skills: [
      {
        name: "TailwindCSS",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
        color: "#06B6D4"
      },
      {
        name: "Bootstrap",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
        color: "#7952B3"
      },
      {
        name: "Chakra UI",
        icon: "https://avatars.githubusercontent.com/u/54212428?s=280&v=4",
        color: "#319795"
      },
      {
        name: "Material-UI",
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg",
        color: "#0081CB"
      },
      {
        name: "Shadcn/ui",
        icon: "https://ui.shadcn.com/favicon.ico",
        color: "#000000"
      }
    ]
  }
];

// Flatten all skills for count
const allSkills = skillCategories.flatMap(category => category.skills);

function WorkProjects() {
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <Box 
      id="SKILLS__" 
      pt='8' 
      bg="linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)"
      py={20}
      position="relative"
      minH="100vh"
      display="flex"
      alignItems="center"
      overflow="hidden"
    >
      {/* Enhanced Background Animation */}
      <Box
        position="absolute"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
        w="1000px"
        h="1000px"
        borderRadius="50%"
        bg="radial-gradient(circle, rgba(147, 51, 234, 0.2) 0%, rgba(79, 70, 229, 0.15) 30%, rgba(99, 102, 241, 0.08) 60%, transparent 100%)"
        filter="blur(50px)"
        animation="pulse 10s ease-in-out infinite"
      />
      
      {/* Floating Elements */}
      <Box
        position="absolute"
        top="15%"
        left="10%"
        w="150px"
        h="150px"
        borderRadius="50%"
        bg="rgba(147, 51, 234, 0.1)"
        filter="blur(40px)"
        animation="float 12s ease-in-out infinite"
      />
      <Box
        position="absolute"
        bottom="20%"
        right="15%"
        w="200px"
        h="200px"
        borderRadius="50%"
        bg="rgba(79, 70, 229, 0.08)"
        filter="blur(60px)"
        animation="float 15s ease-in-out infinite reverse"
      />
      
      <VStack w="full" spacing={20} position="relative" zIndex={2}>
        {/* Enhanced Title Section */}
        <VStack spacing={8}>
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Text
              color="transparent"
              bgGradient="linear(to-r, #9333ea, #4f46e5, #06b6d4)"
              bgClip="text"
              fontSize={{ base: "4xl", md: "6xl", lg: "7xl" }}
              fontWeight="900"
              textAlign="center"
              letterSpacing="wider"
              textShadow="0 0 40px rgba(147, 51, 234, 0.6)"
            >
              MERN STACK
            </Text>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Text
              color="rgba(255, 255, 255, 0.9)"
              fontSize={{ base: "xl", md: "2xl" }}
              textAlign="center"
              maxW="700px"
              lineHeight="relaxed"
              fontWeight="400"
            >
              Full-Stack Development Technologies & Tools
            </Text>
          </motion.div>
        </VStack>

        {/* Category Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <HStack
            spacing={4}
            justify="center"
            flexWrap="wrap"
            mb={8}
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  size="lg"
                  variant={activeCategory === index ? "solid" : "outline"}
                  bg={activeCategory === index ? "rgba(147, 51, 234, 0.3)" : "transparent"}
                  color="white"
                  borderColor="rgba(147, 51, 234, 0.5)"
                  borderRadius="full"
                  px={6}
                  py={3}
                  fontSize="md"
                  fontWeight="600"
                  backdropFilter="blur(10px)"
                  border="2px solid"
                  transition="all 0.3s ease"
                  _hover={{
                    bg: "rgba(147, 51, 234, 0.4)",
                    borderColor: "rgba(147, 51, 234, 0.8)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 10px 25px rgba(147, 51, 234, 0.3)"
                  }}
                  onClick={() => setActiveCategory(index)}
                >
                  {category.title}
                </Button>
              </motion.div>
            ))}
          </HStack>
        </motion.div>

        {/* Skills Grid for Active Category */}
        <Box w="full" maxW="1200px" mx="auto" px={{ base: 4, md: 8 }}>
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <VStack spacing={8}>
              {/* Category Title */}
              <Text
                color="white"
                fontSize={{ base: "2xl", md: "3xl" }}
                fontWeight="700"
                textAlign="center"
                opacity="0.9"
              >
                {skillCategories[activeCategory].title}
              </Text>
              
              <Grid
                templateColumns={{ 
                  base: "repeat(2, 1fr)", 
                  sm: "repeat(3, 1fr)", 
                  md: "repeat(4, 1fr)",
                  lg: "repeat(6, 1fr)" 
                }}
                gap={{ base: 6, md: 8 }}
                w="full"
                justifyItems="center"
                bg="rgba(255, 255, 255, 0.03)"
                backdropFilter="blur(30px)"
                borderRadius="25px"
                p={{ base: 8, md: 12 }}
                border="1px solid"
                borderColor={skillCategories[activeCategory].color}
                position="relative"
                overflow="hidden"
              >
                {/* Category Glow Effect */}
                <Box
                  position="absolute"
                  top="0"
                  left="0"
                  right="0"
                  bottom="0"
                  bg={`radial-gradient(ellipse at center, ${skillCategories[activeCategory].color} 0%, transparent 70%)`}
                  borderRadius="25px"
                  pointerEvents="none"
                  opacity="0.6"
                />
                
                {skillCategories[activeCategory].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8, y: 30 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    onHoverStart={() => setHoveredSkill(skill.name)}
                    onHoverEnd={() => setHoveredSkill(null)}
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <VStack
                      spacing={4}
                      p={{ base: 4, md: 6 }}
                      bg={hoveredSkill === skill.name 
                        ? "rgba(147, 51, 234, 0.25)" 
                        : "rgba(255, 255, 255, 0.08)"
                      }
                      backdropFilter="blur(15px)"
                      borderRadius="20px"
                      border="2px solid"
                      borderColor={hoveredSkill === skill.name 
                        ? "rgba(147, 51, 234, 0.6)" 
                        : "rgba(255, 255, 255, 0.15)"
                      }
                      transition="all 0.3s ease"
                      cursor="pointer"
                      minH={{ base: "120px", md: "140px" }}
                      minW={{ base: "100px", md: "120px" }}
                      justifyContent="center"
                      position="relative"
                      _hover={{
                        boxShadow: "0 15px 40px rgba(147, 51, 234, 0.4)"
                      }}
                    >
                      {/* Enhanced Glow effect for hovered skill */}
                      {hoveredSkill === skill.name && (
                        <Box
                          position="absolute"
                          top="-3px"
                          left="-3px"
                          right="-3px"
                          bottom="-3px"
                          bg="linear-gradient(45deg, #9333ea, #4f46e5, #06b6d4, #9333ea)"
                          borderRadius="23px"
                          zIndex="-1"
                          filter="blur(10px)"
                          opacity="0.8"
                          animation="spin 3s linear infinite"
                        />
                      )}
                      
                      <Box
                        w={{ base: "50px", md: "60px" }}
                        h={{ base: "50px", md: "60px" }}
                        bg="rgba(255, 255, 255, 0.95)"
                        borderRadius="18px"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        transition="all 0.3s ease"
                        transform={hoveredSkill === skill.name ? "scale(1.15) rotate(8deg)" : "scale(1)"}
                        boxShadow={hoveredSkill === skill.name 
                          ? "0 10px 30px rgba(0, 0, 0, 0.4)" 
                          : "0 5px 20px rgba(0, 0, 0, 0.2)"
                        }
                      >
                        <Image 
                          w={{ base: "35px", md: "40px" }}
                          h={{ base: "35px", md: "40px" }}
                          src={skill.icon} 
                          objectFit="contain"
                          filter={hoveredSkill === skill.name ? "brightness(1.1) saturate(1.2)" : "brightness(1)"}
                          transition="filter 0.3s ease"
                        />
                      </Box>
                      
                      <Text
                        color="white"
                        fontSize={{ base: "sm", md: "md" }}
                        fontWeight="700"
                        textAlign="center"
                        opacity={hoveredSkill === skill.name ? 1 : 0.9}
                        transition="all 0.3s ease"
                        textShadow={hoveredSkill === skill.name 
                          ? "0 0 15px rgba(147, 51, 234, 1)" 
                          : "none"
                        }
                      >
                        {skill.name}
                      </Text>
                    </VStack>
                  </motion.div>
                ))}
              </Grid>
            </VStack>
          </motion.div>
        </Box>

        {/* Enhanced Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <HStack
            spacing={10}
            bg="rgba(255, 255, 255, 0.06)"
            backdropFilter="blur(25px)"
            p={10}
            borderRadius="30px"
            border="2px solid"
            borderColor="rgba(147, 51, 234, 0.3)"
            flexWrap="wrap"
            justifyContent="center"
            boxShadow="0 25px 50px rgba(0, 0, 0, 0.4)"
          >
            <VStack spacing={3}>
              <Text 
                color="transparent"
                bgGradient="linear(to-r, #9333ea, #4f46e5)"
                bgClip="text"
                fontSize="4xl" 
                fontWeight="900"
              >
                {allSkills.length}+
              </Text>
              <Text color="rgba(255, 255, 255, 0.9)" fontSize="md" textAlign="center" fontWeight="600">
                MERN Technologies
              </Text>
            </VStack>
            
            <Box w="3px" h="60px" bg="linear-gradient(to-b, transparent, rgba(147, 51, 234, 0.6), transparent)" borderRadius="full" />
            
            <VStack spacing={3}>
              <Text 
                color="transparent"
                bgGradient="linear(to-r, #9333ea, #4f46e5)"
                bgClip="text"
                fontSize="4xl" 
                fontWeight="900"
              >
                4+
              </Text>
              <Text color="rgba(255, 255, 255, 0.9)" fontSize="md" textAlign="center" fontWeight="600">
                Years Experience
              </Text>
            </VStack>
            
            <Box w="3px" h="60px" bg="linear-gradient(to-b, transparent, rgba(147, 51, 234, 0.6), transparent)" borderRadius="full" />
            
            <VStack spacing={3}>
              <Text 
                color="transparent"
                bgGradient="linear(to-r, #9333ea, #4f46e5)"
                bgClip="text"
                fontSize="4xl" 
                fontWeight="900"
              >
                20+
              </Text>
              <Text color="rgba(255, 255, 255, 0.9)" fontSize="md" textAlign="center" fontWeight="600">
                Projects Built
              </Text>
            </VStack>
          </HStack>
        </motion.div>
      </VStack>
    </Box>
  );
}

export default WorkProjects;
