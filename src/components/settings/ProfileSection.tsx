import { useUser } from "@clerk/react-router";
import { Box, Stack, Text, Avatar, HStack, Button } from "@chakra-ui/react";

export default function ProfileSection() {
  const { user } = useUser();

  return (
    <Box p={6} rounded="lg" bg="sidebarBg" shadow="sm">
      <Text fontSize="lg" mb={4} fontWeight="semibold">
        Profile
      </Text>

      <HStack gap={4} align="center">
        <Avatar.Root>
          <Avatar.Fallback>{user?.firstName?.[0] || "T"}</Avatar.Fallback>
        </Avatar.Root>

        <Stack gap={0}>
          <Text fontWeight="medium">{user?.fullName}</Text>
          <Text fontSize="sm" color="gray.500">
            {user?.primaryEmailAddress?.emailAddress}
          </Text>
        </Stack>
      </HStack>

      <Button mt={4} variant="outline" size="sm">
        Edit Profile
      </Button>
    </Box>
  );
}
