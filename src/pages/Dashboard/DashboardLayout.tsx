import { Box, Flex } from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router";
import { FiHome, FiShare2, FiMessageCircle, FiSettings } from "react-icons/fi";
import { useEffect, useState } from "react";

import { Sidebar } from "@/components/common/layout/Sidebar";
import { idb } from "@/lib/idb";
import type { UserDetails } from "@/lib/idb/types";

export function DashboardLayout() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserDetails | null>(null);

  useEffect(() => {
    (async () => {
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
    <Flex h="100vh" align="stretch">
      <Sidebar menuItems={menuItems} user={user} onNavigate={navigate} />

      <Box flex="1" overflowY="auto" p={8}>
        <Outlet />
      </Box>
    </Flex>
  );
}
