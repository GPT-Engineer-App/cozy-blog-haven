import { Box, Container, Flex, Heading, Link, Text, VStack, HStack, Divider, Stack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Flex as="nav" bg="gray.800" color="white" p={4} justify="space-between" align="center">
        <Heading as="h1" size="lg">My Blog</Heading>
        <HStack spacing={4}>
          <Link href="#" color="white">Home</Link>
          <Link href="#" color="white">About</Link>
          <Link href="#" color="white">Blog</Link>
          <Link href="#" color="white">Contact</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex direction={{ base: "column", md: "row" }} mt={8}>
        {/* Blog Posts Section */}
        <Box flex="3" p={4}>
          <Heading as="h2" size="xl" mb={4}>Blog Posts</Heading>
          <VStack spacing={8} align="stretch">
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 1</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">Post Title 2</Heading>
              <Text mt={4}>This is a summary of the blog post. Click to read more...</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" p={4} bg="gray.50" ml={{ md: 4 }} mt={{ base: 4, md: 0 }}>
          <Heading as="h3" size="lg" mb={4}>Recent Posts</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Recent Post 1</Link>
            <Link href="#">Recent Post 2</Link>
            <Link href="#">Recent Post 3</Link>
          </VStack>
          <Divider my={6} />
          <Heading as="h3" size="lg" mb={4}>Categories</Heading>
          <VStack spacing={4} align="stretch">
            <Link href="#">Category 1</Link>
            <Link href="#">Category 2</Link>
            <Link href="#">Category 3</Link>
          </VStack>
        </Box>
      </Flex>

      {/* Footer */}
      <Box as="footer" bg="gray.800" color="white" py={4} mt={8}>
        <Flex justify="center" mb={4}>
          <HStack spacing={4}>
            <Link href="#"><FaFacebook /></Link>
            <Link href="#"><FaTwitter /></Link>
            <Link href="#"><FaInstagram /></Link>
          </HStack>
        </Flex>
        <Text textAlign="center">&copy; {new Date().getFullYear()} My Blog. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;