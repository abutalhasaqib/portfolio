import { Box, Flex, Grid, Heading, Image, Text, VStack, HStack, Badge, Progress, SimpleGrid, Icon, Stack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import profileImage from "../Images/pixel6.jpg";

function About({ colorMode }) {
  const stats = [
    { label: "Years Experience", value: "4+", color: "#8B5CF6", icon: "⚡", bgGradient: "linear(135deg, #8B5CF6, #A855F7)" },
    { label: "Projects Completed", value: "15+", color: "#06D6A0", icon: "🚀", bgGradient: "linear(135deg, #06D6A0, #059669)" },
    { label: "Technologies", value: "20+", color: "#3B82F6", icon: "💻", bgGradient: "linear(135deg, #3B82F6, #1D4ED8)" },
    { label: "Code Quality", value: "99%", color: "#F59E0B", icon: "⭐", bgGradient: "linear(135deg, #F59E0B, #D97706)" },
  ];

  const specialties = [
    { 
      title: "Frontend Mastery", 
      desc: "React, Next.js, TypeScript with modern UI libraries",
      icon: "🎨",
      color: "#8B5CF6"
    },
    { 
      title: "Backend Excellence", 
      desc: "Node.js, Express.js, RESTful APIs",
      icon: "⚙️",
      color: "#06D6A0"
    },
    { 
      title: "Database Expert", 
      desc: "MongoDB, PostgreSQL, Redis for data management",
      icon: "🗄️",
      color: "#3B82F6"
    },
    { 
      title: "Cloud & DevOps", 
      desc: "AWS, Docker, CI/CD pipelines & deployment",
      icon: "☁️",
      color: "#F59E0B"
    },
  ];

  const techStack = [
    { name: "React & Next.js", level: 95, color: "#8B5CF6" },
    { name: "Node.js & Express", level: 65, color: "#06D6A0" },
    { name: "MongoDB & SQL", level: 50, color: "#3B82F6" },
    { name: "TypeScript", level: 85, color: "#F59E0B" },
    { name: "AWS & Docker", level: 30, color: "#EF4444" },
  ];

  return (
    <Box 
      id="ABOUT__" 
      pt="4" 
      bg="linear-gradient(135deg, #0a0a23 0%, #1a1a2e 25%, #16213e 50%, #0f3460 75%, #533483 100%)"
      py={20} 
      position="relative"
      minH="100vh"
      overflow="hidden"
    >
      {/* Ultra Modern Background */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.4"
        pointerEvents="none"
      >
        {/* Animated Mesh Gradient */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)",
              "radial-gradient(circle at 40% 40%, rgba(6, 214, 160, 0.3) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
          }}
        />

        {/* Geometric Shapes */}
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Box
            position="absolute"
            top="10%"
            left="10%"
            w="300px"
            h="300px"
            borderRadius="50%"
            border="2px solid"
            borderColor="rgba(139, 92, 246, 0.2)"
          />
        </motion.div>

        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1.1, 1, 1.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          <Box
            position="absolute"
            bottom="15%"
            right="15%"
            w="200px"
            h="200px"
            borderRadius="20px"
            border="2px solid"
            borderColor="rgba(6, 214, 160, 0.2)"
            transform="rotate(45deg)"
          />
        </motion.div>

        {/* Floating Dots */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            <Box
              position="absolute"
              w="8px"
              h="8px"
              borderRadius="50%"
              bg="rgba(255, 255, 255, 0.6)"
              top={`${Math.random() * 80 + 10}%`}
              left={`${Math.random() * 80 + 10}%`}
            />
          </motion.div>
        ))}
      </Box>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <VStack spacing={6} mb={16}>
          <Heading
            color="white"
            fontSize={{ base: "32px", md: "42px" }}
            fontWeight="800"
            textAlign="center"
            letterSpacing="3px"
            textShadow="3px 3px 6px rgba(0,0,0,0.4)"
            position="relative"
          >
            ABOUT ME
            <Box
              position="absolute"
              bottom="-15px"
              left="50%"
              transform="translateX(-50%)"
              width="120px"
              height="4px"
              bg="linear-gradient(90deg, transparent, white, transparent)"
              borderRadius="2px"
            />
          </Heading>
          <Text
            color="whiteAlpha.900"
            fontSize="18px"
            textAlign="center"
            maxW="600px"
            fontWeight="400"
            letterSpacing="1px"
          >
            Passionate MERN Stack Developer crafting digital experiences
          </Text>
        </VStack>
      </motion.div>

      {/* Main Content */}
      <Container maxW="1400px" px={{ base: 4, md: 8 }}>
        <Grid
          gridTemplateColumns={{ base: "1fr", lg: "400px 1fr" }}
          gap={12}
          alignItems="start"
        >
          {/* Left Column - Profile & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <VStack spacing={8}>
              {/* Enhanced Profile Image */}
              <Box position="relative">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Box
                    position="relative"
                    w="350px"
                    h="350px"
                    borderRadius="30px"
                    overflow="hidden"
                    bg="white"
                    p="8px"
                    boxShadow="0 30px 60px rgba(0,0,0,0.3)"
                    _before={{
                      content: '""',
                      position: "absolute",
                      top: "-4px",
                      left: "-4px",
                      right: "-4px",
                      bottom: "-4px",
                      bgGradient: "linear(45deg, #8B5CF6, #06D6A0, #3B82F6, #F59E0B)",
                      borderRadius: "34px",
                      zIndex: -1,
                      animation: "rotate 8s linear infinite",
                    }}
                  >
                    <Image
                      src={profileImage}
                      w="100%"
                      h="100%"
                      objectFit="cover"
                      borderRadius="22px"
                      filter="contrast(1.1) saturate(1.2) blur(0.5px)"
                    />
                    
                    {/* Modern Overlay with blur background */}
                    <Box
                      position="absolute"
                      bottom="0"
                      left="0"
                      right="0"
                      h="40%"
                      bg="linear-gradient(transparent, rgba(255,255,255,0.95))"
                      backdropFilter="blur(0px)"
                      borderRadius="0 0 22px 22px"
                      display="flex"
                      alignItems="end"
                      justifyContent="center"
                      pb={4}
                    >
                      <VStack spacing={1}>
                        <Text fontWeight="bold" fontSize="20px" color="gray.800">
                          Abu Talha
                        </Text>
                        <Badge
                          bg="linear-gradient(135deg, #8B5CF6, #06D6A0)"
                          color="white"
                          px={3}
                          py={1}
                          borderRadius="full"
                          fontSize="12px"
                          fontWeight="600"
                        >
                          MERN Stack Developer
                        </Badge>
                      </VStack>
                    </Box>
                  </Box>
                </motion.div>

                {/* Status Badge */}
                <motion.div
                  animate={{ 
                    y: [0, -10, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Badge
                    position="absolute"
                    top="-10px"
                    right="-10px"
                    bg="linear-gradient(135deg, #10B981, #059669)"
                    color="white"
                    borderRadius="full"
                    px={3}
                    py={2}
                    fontSize="12px"
                    fontWeight="bold"
                    boxShadow="0 8px 25px rgba(16, 185, 129, 0.3)"
                  >
                    🚀 Available for Work
                  </Badge>
                </motion.div>
              </Box>

              {/* Enhanced Stats Grid */}
              <SimpleGrid columns={2} spacing={4} w="100%">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Box
                      bg="rgba(255, 255, 255, 0.1)"
                      backdropFilter="blur(20px)"
                      borderRadius="20px"
                      p={6}
                      textAlign="center"
                      border="1px solid"
                      borderColor="whiteAlpha.200"
                      boxShadow="0 8px 25px rgba(0,0,0,0.1)"
                      transition="all 0.3s ease"
                      position="relative"
                      overflow="hidden"
                      _hover={{
                        transform: "translateY(-8px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.2)",
                        bg: "rgba(255, 255, 255, 0.15)",
                      }}
                      _before={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "3px",
                        bgGradient: stat.bgGradient,
                      }}
                    >
                      <Text fontSize="32px" mb={3}>
                        {stat.icon}
                      </Text>
                      <Text
                        fontSize="28px"
                        fontWeight="bold"
                        color="white"
                        mb={2}
                      >
                        {stat.value}
                      </Text>
                      <Text fontSize="13px" color="whiteAlpha.800" fontWeight="500">
                        {stat.label}
                      </Text>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>
            </VStack>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            style={{ width: "100%" }}
          >
            <VStack spacing={6} align="stretch" w="100%">
              {/* Main Description */}
              <Box
                bg="rgba(255, 255, 255, 0.95)"
                backdropFilter="blur(20px)"
                borderRadius="20px"
                p={8}
                boxShadow="0 25px 50px rgba(0, 0, 0, 0.15)"
                border="1px solid"
                borderColor="whiteAlpha.300"
              >
                <VStack spacing={6} align="start">
                  <Heading
                    fontSize="28px"
                    color="gray.800"
                    fontWeight="700"
                    mb={2}
                  >
                    Hello, I'm Talha! 👋
                  </Heading>
                  
                  <Text fontSize="16px" color="gray.700" lineHeight="1.8">
                    I'm a passionate <strong style={{color: "#805AD5"}}>Full Stack MERN Developer</strong> from 
                    Kurnool, Andhra Pradesh, with a unique journey from Mechanical Engineering to 
                    software development. With <strong>4+ years of professional experience</strong>, 
                    I specialize in creating robust, scalable web applications that deliver 
                    exceptional user experiences.
                  </Text>

                  <Text fontSize="16px" color="gray.700" lineHeight="1.8">
                    My expertise spans the complete <strong style={{color: "#805AD5"}}>MERN stack ecosystem</strong> - 
                    from crafting intuitive React frontends to building powerful Node.js backends, 
                    managing MongoDB databases, and architecting Express.js APIs. I combine traditional 
                    development skills with cutting-edge AI tools to deliver innovative solutions efficiently.
                  </Text>

                  <Text fontSize="16px" color="gray.700" lineHeight="1.8">
                    I believe in writing clean, maintainable code and creating digital experiences that 
                    not only look great but perform exceptionally. My approach focuses on user-centric 
                    design, scalable architecture, and continuous learning in this ever-evolving tech landscape.
                  </Text>
                </VStack>
              </Box>

              {/* Specialties Grid */}
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={specialty.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Box
                      bg="rgba(255, 255, 255, 0.9)"
                      backdropFilter="blur(20px)"
                      borderRadius="18px"
                      p={6}
                      border="1px solid"
                      borderColor="whiteAlpha.300"
                      boxShadow="0 8px 25px rgba(0,0,0,0.1)"
                      transition="all 0.3s ease"
                      position="relative"
                      overflow="hidden"
                      _hover={{
                        transform: "translateY(-5px)",
                        boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                      }}
                      _before={{
                        content: '""',
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        height: "4px",
                        bg: specialty.color,
                      }}
                    >
                      <VStack align="start" spacing={3}>
                        <HStack spacing={3}>
                          <Text fontSize="24px">{specialty.icon}</Text>
                          <Heading
                            fontSize="18px"
                            color="gray.800"
                            fontWeight="600"
                          >
                            {specialty.title}
                          </Heading>
                        </HStack>
                        <Text fontSize="14px" color="gray.600" lineHeight="1.6">
                          {specialty.desc}
                        </Text>
                      </VStack>
                    </Box>
                  </motion.div>
                ))}
              </SimpleGrid>

              {/* Skills Progress */}
              <Box
                bg="rgba(255, 255, 255, 0.9)"
                backdropFilter="blur(20px)"
                borderRadius="20px"
                p={8}
                border="1px solid"
                borderColor="whiteAlpha.300"
                boxShadow="0 8px 25px rgba(0,0,0,0.1)"
              >
                <VStack spacing={6} align="start">
                  <Heading fontSize="22px" color="gray.800" fontWeight="600">
                    Technical Expertise
                  </Heading>
                  
                  <Text fontSize="14px" color="gray.600" lineHeight="1.6" fontStyle="italic">
                    "The journey of learning never stops. Every day brings new technologies, 
                    challenges, and opportunities to grow. I believe in continuous improvement 
                    and staying curious about emerging trends in the ever-evolving world of technology."
                    <Text fontSize="14px" color="gray.600" fontStyle="regular">Embrace the AI 😌</Text>
                  </Text>
                  
                  <VStack spacing={5} w="100%">
                    {techStack.map((skill, index) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * index }}
                        viewport={{ once: true }}
                        style={{ width: "100%" }}
                      >
                        <Box w="100%">
                          <HStack justify="space-between" mb={2}>
                            <Text fontWeight="500" color="gray.700" fontSize="16px">
                              {skill.name}
                            </Text>
                            <Badge
                              colorScheme="purple"
                              px={2}
                              py={1}
                              borderRadius="md"
                              fontSize="12px"
                            >
                              {skill.level}%
                            </Badge>
                          </HStack>
                          <Box
                            w="100%"
                            h="8px"
                            bg="gray.200"
                            borderRadius="full"
                            overflow="hidden"
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1.5, delay: 0.2 * index }}
                              viewport={{ once: true }}
                              style={{
                                height: "100%",
                                background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                                borderRadius: "9999px",
                              }}
                            />
                          </Box>
                        </Box>
                      </motion.div>
                    ))}
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </motion.div>
        </Grid>
      </Container>
    </Box>
  );
}

export default About;
