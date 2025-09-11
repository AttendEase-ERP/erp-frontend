/* eslint-disable @typescript-eslint/no-explicit-any */
import { Field, Input, Text } from "@chakra-ui/react";
import type { FieldError } from "react-hook-form";

interface InputFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  register: any;
  error?: FieldError;
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  register,
  error,
}: InputFieldProps) {
  return (
    <Field.Root>
      <Field.Label>{label}</Field.Label>
      <Input type={type} placeholder={placeholder} {...register(name)} />
      {error && (
        <Text color="red.500" fontSize="sm" mt={1}>
          {error.message}
        </Text>
      )}
    </Field.Root>
  );
}
