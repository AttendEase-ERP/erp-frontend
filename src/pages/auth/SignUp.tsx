import {
  Box,
  Button,
  Stack,
  Heading,
  Fieldset,
  Text,
  Link,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/auth/InputField";

const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type FormData = z.infer<typeof schema>;

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    console.log("Form Data:", data);
  };

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
        Sign Up to AttendEase
      </Heading>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset.Root size="lg">
          <Stack gap={4}>
            <InputField
              label="Email address"
              name="email"
              type="email"
              placeholder="Enter your email"
              register={register}
              error={errors.email}
            />

            <InputField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              register={register}
              error={errors.password}
            />

            <Button type="submit" width="full" loading={isSubmitting}>
              Sign Up
            </Button>

            <Text textAlign="center">
              Already have an account?{" "}
              <Link href="/sign-in" color="blue.500">
                Sign in
              </Link>
            </Text>
          </Stack>
        </Fieldset.Root>
      </form>
    </Box>
  );
}
