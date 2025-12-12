import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import { FiHome, FiShare2, FiMessageCircle, FiSettings } from "react-icons/fi";

import { SemesterSectionGrid } from "@/components/common/cards/SemesterSectionGrid";
import { Sidebar } from "@/components/common/layout/Sidebar";

import { idb } from "@/lib/idb";
import type { UserDetails } from "@/lib/idb/types";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    (async function () {
      const users = await idb.userDetails.toArray();
      setUser(users[0] || null);
    })();
  }, []);

  const menuItems = [
    { icon: FiHome, label: "Dashboard", path: "/dashboard" },
    { icon: FiShare2, label: "Sharing", path: "/sharing" },
    { icon: FiMessageCircle, label: "Chat", path: "/chat" },
    { icon: FiSettings, label: "Settings", path: "/settings" },
  ];

  return (
    <HStack h="100vh" bg="bg" gap={0}>
      <Sidebar menuItems={menuItems} user={user} onNavigate={navigate} />

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
    </HStack>
  );
}
