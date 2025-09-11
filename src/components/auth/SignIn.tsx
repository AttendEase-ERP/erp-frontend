import {
  Box,
  Button,
  Field,
  Fieldset,
  Input,
  Stack,
  Heading,
} from "@chakra-ui/react";

export default function SignIn() {
  return (
    <Box
      maxW="sm"
      mx="auto"
      mt={20}
      p={8}
      borderWidth={1}
      borderRadius="lg"
      boxShadow="md"
    >
      <Heading size="lg" mb={6} textAlign="center">
        Sign In
      </Heading>

      <Fieldset.Root size="lg" as="form">
        <Stack gap={4}>
          <Field.Root>
            <Field.Label>Email address</Field.Label>
            <Input name="email" type="email" placeholder="Enter your email" />
          </Field.Root>

          <Field.Root>
            <Field.Label>Password</Field.Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
            />
          </Field.Root>

          <Button type="submit" colorScheme="blue" width="full">
            Sign In
          </Button>
        </Stack>
      </Fieldset.Root>
    </Box>
  );
}
