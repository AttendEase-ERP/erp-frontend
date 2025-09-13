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
import { useClerk, useSignIn } from "@clerk/react-router";
import { useNavigate } from "react-router";
import { useState } from "react";

const schema = z.object({
  email: z.email("Invalid email address"),
  password: z.string(),
});

type FormData = z.infer<typeof schema>;

export default function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { signIn } = useSignIn();
  const navigate = useNavigate();
  const { setActive } = useClerk();
  const [formError, setFormError] = useState("");

  const onSubmit = async (data: FormData) => {
    setFormError("");
    try {
      const res = await signIn?.create({
        identifier: data.email,
        password: data.password,
      });

      if (res?.status == "complete") {
        await setActive({ session: res.createdSessionId });
        navigate("/dashboard");
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      console.error("Sign-in error:", err);
      setFormError(err.errors?.[0]?.longMessage || "Failed to sign in");
    }
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
        Sign In to AttendEase
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

            {formError && (
              <Text color="red.500" textAlign="center" fontSize="sm">
                {formError}
              </Text>
            )}

            <Text textAlign="right">
              <Link href="/forgot-password" color="blue.500">
                Forgot password?
              </Link>
            </Text>

            <Button type="submit" width="full" loading={isSubmitting}>
              Sign In
            </Button>

            <Text textAlign="center">
              Don’t have an account?{" "}
              <Link href="/sign-up" color="blue.500">
                Sign up
              </Link>
            </Text>
          </Stack>
        </Fieldset.Root>
      </form>
    </Box>
  );
}
