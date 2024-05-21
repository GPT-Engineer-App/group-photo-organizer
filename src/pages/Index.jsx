import { Container, Text, VStack, Heading, Button, IconButton, Input, Box, Image, Flex } from "@chakra-ui/react";
import { FaSearch, FaTags, FaUserFriends } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" display="flex" flexDirection="column" justifyContent="center" alignItems="center" py={8}>
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" mb={4}>Photo Organizer</Heading>
        <Text fontSize="lg" textAlign="center">Organize your group photos effortlessly with facial recognition and tagging.</Text>
        
        <Flex mt={8} width="100%" justifyContent="center">
          <Input placeholder="Search photos..." size="lg" />
          <IconButton aria-label="Search" icon={<FaSearch />} size="lg" ml={2} />
        </Flex>
        
        <Flex mt={4} width="100%" justifyContent="space-around">
          <Button leftIcon={<FaTags />} colorScheme="teal" size="lg">Tag Photos</Button>
          <Button leftIcon={<FaUserFriends />} colorScheme="teal" size="lg">Group Photos</Button>
        </Flex>
        
        <Box mt={8} width="100%" textAlign="center">
          <Image src="/images/sample-photo.jpg" alt="Sample Photo" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;