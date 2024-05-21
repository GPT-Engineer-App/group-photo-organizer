import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Placeholder for authentication logic
    if (email === "user@example.com" && password === "password") {
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={8}>
        <Heading as="h1" size="xl">Login</Heading>
        <Input
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button colorScheme="teal" onClick={handleLogin}>Login</Button>
      </VStack>
    </Container>
  );
};

export default Login;