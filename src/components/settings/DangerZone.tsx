import { Box, Button, Text, VStack } from "@chakra-ui/react";
import { SignOutButton } from "@clerk/react-router";
import { onSignOutCleanup } from "@/lib/auth/onSignOut";

export default function DangerZone() {
  return (
    <Box
      p={6}
      rounded="lg"
      bg="sidebarBg"
      shadow="sm"
      border="1px solid"
      borderColor="red.300"
    >
      <Text fontSize="lg" mb={4} fontWeight="semibold" color="red.500">
        Danger Zone
      </Text>

      <VStack align="stretch" gap={3}>
        <SignOutButton>
          <Button
            colorScheme="red"
            variant="solid"
            onClick={() => onSignOutCleanup()}
          >
            Sign Out
          </Button>
        </SignOutButton>

        <Button colorScheme="red" variant="outline">
          Delete Account
        </Button>
      </VStack>
    </Box>
  );
}
