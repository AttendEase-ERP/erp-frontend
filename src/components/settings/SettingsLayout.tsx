import { Box, Heading, Stack } from "@chakra-ui/react";

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box p={8} maxW="700px" mx="auto">
      <Heading fontSize="2xl" mb={8}>
        Settings
      </Heading>

      <Stack gap={10}>{children}</Stack>
    </Box>
  );
}
