import {
  Box,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  ListItem,
  Text,
  VStack,
  Badge,
  Icon,
  SimpleGrid,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import Education from "../pages/Education";
import { 
  FaUniversity, 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaCalendarAlt, 
  FaMapMarkerAlt,
  FaStar,
  FaAward,
  FaLaptopCode,
  FaRocket
} from "react-icons/fa";
import { 
  MdSchool, 
  MdWork, 
  MdTimeline,
  MdTrendingUp,
  MdAutoAwesome
} from "react-icons/md";

function EducationExp({ colorMode }) {
  const experienceData = [
    {
      title: "Full Stack Developer",
      company: "Self-Employed / Freelance",
      period: "2021 - Present",
      duration: "4+ Years",
      type: "Current",
      location: "Office",
      skills: ["React", "Node.js", "MongoDB", "Express", "JavaScript", "AI Tools"],
      achievements: [
        "Developed 20+ scalable web applications with React and modern JavaScript",
        "Managed complex application state with Redux Saga and React Query",
        "Implemented responsive design strategies achieving 95% user satisfaction",
        "Authored clean, optimized code reducing load times by 40%",
        "Integrated AI tools like v0.dev, bolt.new for 60% faster development",
        "Designed RESTful APIs serving 10K+ daily requests",
        "Leveraged SaaS platforms like Directus and Supabase for rapid deployment"
      ],
      icon: FaLaptopCode,
      color: "purple.400"
    }
  ];

  const educationData = [
    {
      degree: "Bachelor of Technology",
      field: "Mechanical Engineering",
      institution: "Brindavan Institute of Technology and Science",
      location: "Kurnool",
      period: "2018 - 2021",
      // grade: "70%",
      icon: FaGraduationCap,
      color: "blue.400"
    },
    {
      degree: "Diploma",
      field: "Mechanical Engineering", 
      institution: "Government Polytechnic College",
      location: "Kurnool",
      period: "2013 - 2016",
      // grade: "75%",
      icon: MdSchool,
      color: "green.400"
    },
    {
      degree: "Secondary School Certificate",
      field: "High School Education",
      institution: "Universal English High School",
      location: "Kurnool",
      period: "2001 - 2013",
      // grade: "55%",
      icon: FaAward,
      color: "orange.400"
    }
  ];

  return (
    <Box 
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)" 
      py={24} 
      position="relative"
      minH="100vh"
    >
      {/* Enhanced Background with Geometric Patterns */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        overflow="hidden"
      >
        {/* Floating geometric shapes */}
        <Box
          w="400px"
          h="400px"
          borderRadius="50%"
          bg="whiteAlpha.400"
          position="absolute"
          top="10%"
          left="5%"
          animation="float 12s ease-in-out infinite"
        />
        <Box
          w="300px"
          h="300px"
          borderRadius="20px"
          bg="whiteAlpha.300"
          position="absolute"
          bottom="15%"
          right="8%"
          animation="float 10s ease-in-out infinite reverse"
          transform="rotate(45deg)"
        />
        <Box
          w="200px"
          h="200px"
          bg="whiteAlpha.500"
          position="absolute"
          top="40%"
          right="25%"
          animation="float 8s ease-in-out infinite"
          clipPath="polygon(50% 0%, 0% 100%, 100% 100%)"
        />
        
        {/* Grid pattern overlay */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          backgroundImage="radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)"
          backgroundSize="40px 40px"
        />
      </Box>
      
      <VStack w="full" spacing={20} position="relative" zIndex={2}>
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack spacing={6} textAlign="center">
            <Badge
              bg="whiteAlpha.200"
              color="white"
              px={6}
              py={3}
              borderRadius="full"
              fontSize="md"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <HStack spacing={2}>
                <Icon as={MdTimeline} />
                <Text>Professional Journey</Text>
              </HStack>
            </Badge>
            
            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="800"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              bgGradient="linear(to-r, white, purple.200)"
              bgClip="text"
            >
              Experience &{" "}
              <Text as="span" color="purple.200">
                Education
              </Text>
            </Heading>
            
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "lg", md: "xl" }}
              maxW="700px"
              lineHeight="1.8"
            >
              A journey of continuous learning, professional growth, and technical excellence
            </Text>
          </VStack>
        </motion.div>

        {/* Experience Section */}
        <Box w="full" maxW="1400px" mx="auto" px={{ base: 6, md: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <VStack spacing={8} mb={16}>
              <HStack spacing={4}>
                <Box
                  p={4}
                  bg="purple.500"
                  borderRadius="20px"
                  boxShadow="0 10px 30px rgba(159, 122, 234, 0.4)"
                >
                  <Icon as={FaBriefcase} color="white" fontSize="2xl" />
                </Box>
                <Heading
                  color="white"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="700"
                  letterSpacing="2px"
                >
                  PROFESSIONAL EXPERIENCE
                </Heading>
              </HStack>

              {/* Experience Timeline */}
              <Box w="full">
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    <Box
                      bg="rgba(255, 255, 255, 0.95)"
                      borderRadius="30px"
                      p={{ base: 6, md: 8 }}
                      boxShadow="0 25px 50px rgba(0, 0, 0, 0.2)"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      position="relative"
                      _hover={{
                        transform: "translateY(-5px)",
                        boxShadow: "0 35px 70px rgba(0, 0, 0, 0.25)"
                      }}
                      transition="all 0.4s ease"
                    >
                      {/* Experience Header */}
                      <Flex
                        direction={{ base: "column", md: "row" }}
                        justify="space-between"
                        align={{ base: "start", md: "center" }}
                        mb={6}
                        gap={4}
                      >
                        <VStack align="start" spacing={2}>
                          <HStack spacing={3}>
                            <Box
                              p={3}
                              bg={`${exp.color}`}
                              borderRadius="15px"
                              color="white"
                              boxShadow="0 8px 20px rgba(159, 122, 234, 0.3)"
                            >
                              <Icon as={exp.icon} fontSize="xl" />
                            </Box>
                            <VStack align="start" spacing={1}>
                              <Heading
                                color="gray.800"
                                fontSize={{ base: "lg", md: "xl" }}
                                fontWeight="700"
                              >
                                {exp.title}
                              </Heading>
                              <Text
                                color="gray.600"
                                fontSize="md"
                                fontWeight="600"
                              >
                                {exp.company}
                              </Text>
                            </VStack>
                          </HStack>
                        </VStack>

                        <VStack align={{ base: "start", md: "end" }} spacing={2}>
                          <Badge
                            colorScheme="green"
                            fontSize="sm"
                            px={3}
                            py={1}
                            borderRadius="full"
                          >
                            {exp.type}
                          </Badge>
                          <HStack spacing={4} fontSize="sm" color="gray.600">
                            <HStack spacing={1}>
                              <Icon as={FaCalendarAlt} />
                              <Text>{exp.period}</Text>
                            </HStack>
                            <HStack spacing={1}>
                              <Icon as={FaMapMarkerAlt} />
                              <Text>{exp.location}</Text>
                            </HStack>
                          </HStack>
                        </VStack>
                      </Flex>

                      {/* Skills Tags */}
                      <Box mb={6}>
                        <Text
                          color="gray.700"
                          fontSize="sm"
                          fontWeight="600"
                          mb={3}
                        >
                          Tech Stack:
                        </Text>
                        <Flex flexWrap="wrap" gap={2}>
                          {exp.skills.map((skill, skillIndex) => (
                            <motion.div
                              key={skillIndex}
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                            >
                              <Badge
                                bg="purple.100"
                                color="purple.700"
                                px={3}
                                py={1}
                                borderRadius="full"
                                fontSize="xs"
                                fontWeight="600"
                              >
                                {skill}
                              </Badge>
                            </motion.div>
                          ))}
                        </Flex>
                      </Box>

                      {/* Achievements */}
                      <Box>
                        <HStack spacing={2} mb={4}>
                          <Icon as={MdTrendingUp} color="purple.500" />
                          <Text
                            color="gray.700"
                            fontSize="md"
                            fontWeight="700"
                          >
                            Key Achievements
                          </Text>
                        </HStack>
                        
                        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={3}>
                          {exp.achievements.map((achievement, achIndex) => (
                            <motion.div
                              key={achIndex}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: achIndex * 0.1 }}
                            >
                              <HStack spacing={3} align="start">
                                <Box
                                  w="8px"
                                  h="8px"
                                  bg="purple.400"
                                  borderRadius="full"
                                  mt={2}
                                  flexShrink={0}
                                />
                                <Text
                                  color="gray.600"
                                  fontSize="sm"
                                  lineHeight="1.6"
                                >
                                  {achievement}
                                </Text>
                              </HStack>
                            </motion.div>
                          ))}
                        </SimpleGrid>
                      </Box>
                    </Box>
                  </motion.div>
                ))}
              </Box>
            </VStack>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <VStack spacing={8}>
              <HStack spacing={4}>
                <Box
                  p={4}
                  bg="blue.500"
                  borderRadius="20px"
                  boxShadow="0 10px 30px rgba(66, 153, 225, 0.4)"
                >
                  <Icon as={FaGraduationCap} color="white" fontSize="2xl" />
                </Box>
                <Heading
                  color="white"
                  fontSize={{ base: "2xl", md: "3xl" }}
                  fontWeight="700"
                  letterSpacing="2px"
                >
                  EDUCATIONAL BACKGROUND
                </Heading>
              </HStack>

              {/* Education Timeline */}
              <SimpleGrid
                columns={{ base: 1, lg: 3 }}
                spacing={8}
                w="full"
              >
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Box
                      bg="rgba(255, 255, 255, 0.95)"
                      borderRadius="25px"
                      p={6}
                      boxShadow="0 20px 40px rgba(0, 0, 0, 0.15)"
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      h="full"
                      _hover={{
                        boxShadow: "0 30px 60px rgba(0, 0, 0, 0.2)"
                      }}
                      transition="all 0.3s ease"
                      position="relative"
                      overflow="hidden"
                    >
                      {/* Decorative element */}
                      <Box
                        position="absolute"
                        top="0"
                        left="0"
                        w="100%"
                        h="4px"
                        bg={`linear-gradient(90deg, ${edu.color}, ${edu.color}CC)`}
                      />

                      <VStack spacing={4} align="start" pt={2}>
                        <HStack spacing={3}>
                          <Box
                            p={3}
                            bg={edu.color}
                            borderRadius="15px"
                            color="white"
                            boxShadow="0 8px 20px rgba(0, 0, 0, 0.15)"
                          >
                            <Icon as={edu.icon} fontSize="lg" />
                          </Box>
                          <VStack align="start" spacing={1}>
                            <Text
                              color="gray.800"
                              fontSize="md"
                              fontWeight="700"
                              lineHeight="1.2"
                            >
                              {edu.degree}
                            </Text>
                            <Text
                              color={edu.color}
                              fontSize="sm"
                              fontWeight="600"
                            >
                              {edu.field}
                            </Text>
                          </VStack>
                        </HStack>

                        <VStack spacing={2} align="start" w="full">
                          <Text
                            color="gray.600"
                            fontSize="sm"
                            fontWeight="600"
                          >
                            {edu.institution}
                          </Text>
                          
                          <HStack spacing={4} flexWrap="wrap">
                            <HStack spacing={1}>
                              <Icon as={FaCalendarAlt} color="gray.500" fontSize="xs" />
                              <Text color="gray.500" fontSize="xs">
                                {edu.period}
                              </Text>
                            </HStack>
                            <HStack spacing={1}>
                              <Icon as={FaMapMarkerAlt} color="gray.500" fontSize="xs" />
                              <Text color="gray.500" fontSize="xs">
                                {edu.location}
                              </Text>
                            </HStack>
                          </HStack>

                          {/* <HStack spacing={1} mt={2}>
                            <Icon as={FaStar} color="yellow.500" fontSize="sm" />
                            <Text
                              color="gray.700"
                              fontSize="sm"
                              fontWeight="600"
                            >
                              Grade: {edu.grade}
                            </Text>
                          </HStack> */}
                        </VStack>
                      </VStack>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </VStack>
          </motion.div>
        </Box>
      </VStack>
    </Box>
  );
}

export default EducationExp;
