import { useEffect, useState } from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

import { SemesterSectionGrid } from "@/components/common/cards/SemesterSectionGrid";

import { idb } from "@/lib/idb";
import type { UserDetails } from "@/lib/idb/types";

export default function TeacherDashboard() {
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    (async function () {
      const users = await idb.userDetails.toArray();
      setUser(users[0] || null);
    })();
  }, []);

  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
    >
      <Box flex="1" p={8} overflowY="auto">
        <VStack align="start" gap={6}>
          <Box>
            <Text fontSize="3xl" fontWeight="bold">
              Welcome to your Dashboard 👋
            </Text>

            {user?.role === "teacher" && (
              <Text color="gray.600" mt={1}>
                Here are your assigned sections:
              </Text>
            )}
          </Box>

          {user?.role === "teacher" && <SemesterSectionGrid user={user} />}
        </VStack>
      </Box>
    </Box>
  );
}
