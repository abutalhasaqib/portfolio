import React, { useState } from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Grid,
  Image,
  useToast,
  Divider,
  SimpleGrid,
  Badge,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
  MdSend,
  MdAccessTime,
  MdCheckCircle,
} from "react-icons/md";
import { BsGithub, BsDiscord, BsPerson, BsWhatsapp, BsLightning, BsChatDots } from "react-icons/bs";
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { FaLinkedinIn, FaTwitter, FaTelegram, FaRocket, FaHeart } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { RiContactsLine } from "react-icons/ri";

function ContactMe({ colorMode }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const toast = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top"
      });
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
      }, 3000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MdPhone,
      label: "Phone",
      value: "+91-8686637580",
      description: "Call me anytime",
      color: "purple.500",
      href: "tel:+918686637580"
    },
    {
      icon: MdEmail,
      label: "Email",
      value: "talhaasaaqib@gmail.com",
      description: "Drop me a line",
      color: "purple.500",
      href: "mailto:talhaasaaqib@gmail.com"
    },
    {
      icon: MdLocationOn,
      label: "Location",
      value: "Hyderabad, Tolichowki",
      description: "Let's meet up",
      color: "purple.500",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: FaLinkedinIn,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/abu-talha/",
      color: "purple.500"
    },
    {
      icon: BsGithub,
      label: "GitHub", 
      href: "https://github.com/abutalha",
      color: "purple.500"
    },
    {
      icon: MdEmail,
      label: "Email",
      href: "https://mail.google.com/mail/u/0/#inbox?compose=new",
      color: "purple.500"
    }
  ];

  return (
    <Box
      id="CONTACT__"
      pt="100px"
      bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      pb={20}
      position="relative"
      minH="100vh"
    >
      {/* Enhanced Background Animation */}
      <Box
        position="absolute"
        top="0"
        left="0"
        right="0"
        bottom="0"
        opacity="0.1"
        overflow="hidden"
      >
        {/* Floating circles */}
        <Box
          w="400px"
          h="400px"
          borderRadius="50%"
          bg="whiteAlpha.300"
          position="absolute"
          top="10%"
          left="5%"
          animation="float 12s ease-in-out infinite"
        />
        <Box
          w="300px"
          h="300px"
          borderRadius="50%"
          bg="whiteAlpha.200"
          position="absolute"
          bottom="20%"
          right="10%"
          animation="float 8s ease-in-out infinite reverse"
        />
        <Box
          w="200px"
          h="200px"
          borderRadius="50%"
          bg="whiteAlpha.100"
          position="absolute"
          top="50%"
          right="30%"
          animation="float 10s ease-in-out infinite"
        />
        
        {/* Grid pattern */}
        <Box
          position="absolute"
          top="0"
          left="0"
          w="100%"
          h="100%"
          backgroundImage="radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)"
          backgroundSize="50px 50px"
        />
      </Box>

      {/* Header Section */}
      <Container maxW="container.xl" position="relative" zIndex={1}>
        <VStack spacing={6} textAlign="center" mb={16}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Badge
              bg="whiteAlpha.200"
              color="white"
              px={4}
              py={2}
              borderRadius="full"
              fontSize="sm"
              backdropFilter="blur(10px)"
              border="1px solid"
              borderColor="whiteAlpha.300"
            >
              <Flex align="center" gap={2}>
                <BsLightning />
                Get In Touch
              </Flex>
            </Badge>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Heading
              color="white"
              fontSize={{ base: "3xl", md: "5xl", lg: "6xl" }}
              fontWeight="800"
              textAlign="center"
              textShadow="2px 2px 4px rgba(0,0,0,0.3)"
              bgGradient="linear(to-r, white, purple.200)"
              bgClip="text"
            >
              Let's Create Something
              <Text as="span" color="purple.200"> Amazing</Text>
            </Heading>
          </motion.div>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "lg", md: "xl" }}
              maxW="600px"
              textAlign="center"
              lineHeight="1.6"
            >
              Ready to turn your ideas into reality? Let's collaborate and build something extraordinary together!
            </Text>
          </motion.div>
        </VStack>

        {/* Main Content Grid */}
        <Grid
          templateColumns={{ base: "1fr", lg: "1fr 1fr" }}
          gap={{ base: 8, lg: 16 }}
          maxW="1200px"
          mx="auto"
          alignItems="start"
        >
          {/* Contact Information Side */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >            <Box
              bg="whiteAlpha.100"
              backdropFilter="blur(20px)"
              borderRadius="30px"
              p={{ base: 6, md: 8 }}
              boxShadow="0 25px 50px rgba(0, 0, 0, 0.2)"
              border="1px solid"
              borderColor="whiteAlpha.300"
              h="fit-content"
            >
              <VStack spacing={6} align="stretch">
                {/* Contact Cards */}
                <Box>
                  <Heading
                    color="white"
                    fontSize={{ base: "xl", md: "2xl" }}
                    mb={6}
                    fontWeight="700"
                    textAlign="center"
                  >
                    Contact Information
                  </Heading>
                  
                  <VStack spacing={4}>
                    {contactInfo.map((info, index) => (
                      <motion.div
                        key={index}
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        style={{ width: "100%" }}
                      >
                        <Box
                          as="a"
                          href={info.href}
                          display="block"
                          w="full"
                          p={{ base: 4, md: 6 }}
                          bg="whiteAlpha.200"
                          backdropFilter="blur(10px)"
                          borderRadius="20px"
                          border="1px solid"
                          borderColor="whiteAlpha.400"
                          _hover={{
                            bg: "whiteAlpha.300",
                            transform: "translateY(-4px)",
                            boxShadow: "0 20px 40px rgba(0,0,0,0.2)"
                          }}
                          transition="all 0.3s ease"
                          cursor="pointer"
                        >
                          <Flex align="center" gap={4}>
                            <Box
                              p={3}
                              bg="purple.500"
                              borderRadius="15px"
                              color="white"
                              boxShadow="0 8px 20px rgba(116, 75, 162, 0.4)"
                              flexShrink={0}
                            >
                              <info.icon size="20px" />
                            </Box>
                            <Box flex={1} minW={0}>
                              <Text
                                color="white"
                                fontWeight="600"
                                fontSize={{ base: "md", md: "lg" }}
                                mb={1}
                              >
                                {info.label}
                              </Text>
                              <Text
                                color="whiteAlpha.900"
                                fontSize={{ base: "sm", md: "md" }}
                                mb={1}
                                wordBreak="break-word"
                              >
                                {info.value}
                              </Text>
                              <Text
                                color="whiteAlpha.700"
                                fontSize="sm"
                              >
                                {info.description}
                              </Text>
                            </Box>
                          </Flex>
                        </Box>
                      </motion.div>
                    ))}
                  </VStack>
                </Box>
              </VStack>
            </Box>
          </motion.div>

          {/* Contact Form Side */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Box
              bg="rgba(255, 255, 255, 0.95)"
              backdropFilter="blur(20px)"
              borderRadius="30px"
              p={{ base: 6, md: 8 }}
              boxShadow="0 25px 50px rgba(0, 0, 0, 0.2)"
              border="1px solid"
              borderColor="whiteAlpha.300"
              position="relative"
              overflow="hidden"
              h="fit-content"
              maxW="100%"
            >
              {/* Form Header */}
              <VStack spacing={6} mb={8} textAlign="center">
                <Box
                  p={4}
                  bg="purple.500"
                  borderRadius="20px"
                  color="white"
                  boxShadow="0 8px 25px rgba(116, 75, 162, 0.4)"
                >
                  <BsChatDots size="28px" />
                </Box>
                <Box>
                  <Heading 
                    color="gray.800" 
                    fontSize={{ base: "xl", md: "2xl" }} 
                    mb={2}
                  >
                    Send me a message
                  </Heading>
                  <Text 
                    color="gray.600" 
                    fontSize={{ base: "sm", md: "md" }}
                    px={{ base: 2, md: 0 }}
                  >
                    I'd love to hear about your project and discuss how we can work together
                  </Text>
                </Box>
              </VStack>

              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit}
                  >
                    <VStack spacing={6}>
                      <FormControl isRequired>
                        <FormLabel 
                          color="gray.700" 
                          fontWeight="600" 
                          fontSize="sm"
                          mb={2}
                        >
                          Your Name
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            color="purple.400"
                            fontSize="18px"
                          >
                            <BsPerson />
                          </InputLeftElement>
                          <Input
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your full name"
                            size="lg"
                            borderRadius="15px"
                            border="2px solid"
                            borderColor="gray.200"
                            bg="white"
                            _focus={{
                              borderColor: "purple.400",
                              boxShadow: "0 0 0 1px #9f7aea"
                            }}
                            _hover={{ borderColor: "purple.300" }}
                            transition="all 0.2s"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel 
                          color="gray.700" 
                          fontWeight="600" 
                          fontSize="sm"
                          mb={2}
                        >
                          Email Address
                        </FormLabel>
                        <InputGroup>
                          <InputLeftElement
                            pointerEvents="none"
                            color="purple.400"
                            fontSize="18px"
                          >
                            <MdOutlineEmail />
                          </InputLeftElement>
                          <Input
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="your.email@example.com"
                            size="lg"
                            borderRadius="15px"
                            border="2px solid"
                            borderColor="gray.200"
                            bg="white"
                            _focus={{
                              borderColor: "purple.400",
                              boxShadow: "0 0 0 1px #9f7aea"
                            }}
                            _hover={{ borderColor: "purple.300" }}
                            transition="all 0.2s"
                          />
                        </InputGroup>
                      </FormControl>

                      <FormControl isRequired>
                        <FormLabel 
                          color="gray.700" 
                          fontWeight="600" 
                          fontSize="sm"
                          mb={2}
                        >
                          Your Message
                        </FormLabel>
                        <Textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          placeholder="Tell me about your project, ideas, or just say hello!"
                          rows={{ base: 4, md: 6 }}
                          resize="none"
                          borderRadius="15px"
                          border="2px solid"
                          borderColor="gray.200"
                          bg="white"
                          _focus={{
                            borderColor: "purple.400",
                            boxShadow: "0 0 0 1px #9f7aea"
                          }}
                          _hover={{ borderColor: "purple.300" }}
                          transition="all 0.2s"
                        />
                      </FormControl>

                      <motion.div
                        style={{ width: "100%" }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          size="lg"
                          width="full"
                          bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                          color="white"
                          borderRadius="15px"
                          _hover={{
                            transform: "translateY(-2px)",
                            boxShadow: "0 15px 35px rgba(116, 75, 162, 0.4)"
                          }}
                          _active={{
                            transform: "translateY(0px)"
                          }}
                          transition="all 0.3s ease"
                          fontWeight="600"
                          fontSize="md"
                          leftIcon={!isSubmitting ? <MdSend /> : undefined}
                          isLoading={isSubmitting}
                          loadingText="Sending..."
                          height="56px"
                        >
                          {!isSubmitting && "Send Message"}
                        </Button>
                      </motion.div>
                    </VStack>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <VStack spacing={6} py={{ base: 8, md: 12 }} textAlign="center">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ 
                          type: "spring", 
                          stiffness: 200, 
                          damping: 15,
                          delay: 0.2 
                        }}
                      >
                        <Box
                          p={6}
                          bg="green.500"
                          borderRadius="50%"
                          color="white"
                          boxShadow="0 15px 35px rgba(72, 187, 120, 0.4)"
                        >
                          <MdCheckCircle size="40px" />
                        </Box>
                      </motion.div>
                      
                      <Box>
                        <Heading 
                          color="gray.800" 
                          fontSize={{ base: "lg", md: "2xl" }} 
                          mb={2}
                        >
                          Message Sent Successfully!
                        </Heading>
                        <Text 
                          color="gray.600" 
                          fontSize={{ base: "sm", md: "md" }}
                          px={{ base: 2, md: 0 }}
                        >
                          Thank you for reaching out. I'll get back to you within 24 hours.
                        </Text>
                      </Box>
                      
                      <motion.div
                        animate={{ 
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          repeatType: "reverse"
                        }}
                      >
                        <Text fontSize="2xl">🚀</Text>
                      </motion.div>
                    </VStack>
                  </motion.div>
                )}
              </AnimatePresence>
            </Box>
          </motion.div>
        </Grid>

        {/* Quick Response Time Section - Centered */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Box
            maxW="600px"
            mx="auto"
            mt={12}
            p={{ base: 6, md: 8 }}
            bg="whiteAlpha.100"
            backdropFilter="blur(20px)"
            borderRadius="30px"
            border="1px solid"
            borderColor="whiteAlpha.300"
            boxShadow="0 25px 50px rgba(0, 0, 0, 0.2)"
          >
            <Heading 
              color="white" 
              fontSize={{ base: "lg", md: "xl" }} 
              mb={6} 
              textAlign="center"
              fontWeight="700"
            >
              Quick Response Time
            </Heading>
            <Flex justify="space-around" align="center" flexWrap="wrap" gap={6}>
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                whileHover={{ scale: 1.1 }}
              >
                <VStack spacing={2}>
                  <Box 
                    color="purple.300" 
                    p={3}
                    bg="whiteAlpha.200"
                    borderRadius="15px"
                    backdropFilter="blur(10px)"
                  >
                    <MdAccessTime size="24px" />
                  </Box>
                  <Text color="white" fontWeight="600" fontSize="md">
                    &lt; 24hrs
                  </Text>
                  <Text color="whiteAlpha.700" fontSize="sm">
                    Response
                  </Text>
                </VStack>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                whileHover={{ scale: 1.1 }}
              >
                <VStack spacing={2}>
                  <Box 
                    color="purple.300" 
                    p={3}
                    bg="whiteAlpha.200"
                    borderRadius="15px"
                    backdropFilter="blur(10px)"
                  >
                    <FaRocket size="22px" />
                  </Box>
                  <Text color="white" fontWeight="600" fontSize="md">
                    Fast
                  </Text>
                  <Text color="whiteAlpha.700" fontSize="sm">
                    Delivery
                  </Text>
                </VStack>
              </motion.div>
              
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                whileHover={{ scale: 1.1 }}
              >
                <VStack spacing={2}>
                  <Box 
                    color="purple.300" 
                    p={3}
                    bg="whiteAlpha.200"
                    borderRadius="15px"
                    backdropFilter="blur(10px)"
                  >
                    <FaHeart size="22px" />
                  </Box>
                  <Text color="white" fontWeight="600" fontSize="md">
                    Quality
                  </Text>
                  <Text color="whiteAlpha.700" fontSize="sm">
                    Work
                  </Text>
                </VStack>
              </motion.div>
            </Flex>
          </Box>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box
            textAlign="center"
            mt={16}
            pt={8}
            borderTop="1px solid"
            borderColor="whiteAlpha.300"
          >
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "sm", md: "md" }}
              letterSpacing="1px"
              px={4}
            >
              Designed and built with{" "}
              <Text as="span" color="purple.300">
                ❤️
              </Text>{" "}
              by Abu Talha • © 2025 All rights reserved
            </Text>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
}


export default ContactMe;
