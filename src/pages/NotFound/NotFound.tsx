import { Box, Button, Heading, Text, Stack } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { FaArrowLeft } from "react-icons/fa";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-br, gray.50, gray.100)"
      px="4"
    >
      <Stack gap="6" textAlign="center">
        <Heading as="h1" size="4xl" fontWeight="bold" color="gray.700">
          404
        </Heading>

        <Text fontSize="xl" color="gray.600">
          Oops! The page you're looking for doesn't exist.
        </Text>

        <Button
          colorPalette="red"
          onClick={() => navigate("/dashboard")}
          size="lg"
          rounded="full"
        >
          <FaArrowLeft /> Go Back Dashboard
        </Button>
      </Stack>
    </Box>
  );
}
