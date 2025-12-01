import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { SignOutButton } from "@clerk/react-router";

import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { Tooltip } from "@/components/ui/tooltip";
import {
  FiHome,
  FiShare2,
  FiMessageCircle,
  FiSettings,
  FiLogOut,
  FiUser,
} from "react-icons/fi";

import { idb } from "@/lib/idb";
import { onSignOutCleanup } from "@/lib/auth/onSignOut";

export default function TeacherDashboard() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);
  const [teacherName, setTeacherName] = useState("");

  useEffect(() => {
    (async function () {
      const users = await idb.userDetails.toArray();
      setTeacherName(users[0]?.name || "Teacher");
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
      <VStack
        bg="sidebarBg"
        h="full"
        w={isExpanded ? "220px" : "72px"}
        transition="width 0.2s ease-in-out"
        align="stretch"
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
        p={4}
        justify="space-between"
        shadow="md"
      >
        <Stack gap={6}>
          <Box textAlign="center">
            <Avatar.Root>
              <Avatar.Fallback>
                <FiUser fontSize="1.2rem" />
              </Avatar.Fallback>
            </Avatar.Root>
            {isExpanded && (
              <Text mt={2} fontWeight="medium" fontSize="sm">
                {teacherName}
              </Text>
            )}
          </Box>

          <VStack gap={2} align="stretch">
            {menuItems.map(({ icon: Icon, label, path }) => (
              <Tooltip
                key={label}
                content={!isExpanded ? label : ""}
                positioning={{ placement: "right" }}
              >
                <HStack
                  as="button"
                  onClick={() => navigate(path)}
                  px={3}
                  py={2}
                  rounded="md"
                  gap={isExpanded ? 3 : 0}
                  justify={isExpanded ? "flex-start" : "center"}
                  _hover={{ bg: "hoverBg" }}
                  transition="background 0.2s ease"
                >
                  <Icon color="iconColor" size={20} />
                  {isExpanded && <Text>{label}</Text>}
                </HStack>
              </Tooltip>
            ))}
          </VStack>
        </Stack>

        <Box>
          <Tooltip
            content={!isExpanded ? "Logout" : ""}
            positioning={{ placement: "right" }}
          >
            <SignOutButton>
              <HStack
                as="button"
                w="full"
                px={3}
                py={2}
                rounded="md"
                justify={isExpanded ? "flex-start" : "center"}
                _hover={{ bg: "hoverBg" }}
                onClick={() => onSignOutCleanup()}
              >
                <FiLogOut color="iconColor" size={20} />
                {isExpanded && <Text>Logout</Text>}
              </HStack>
            </SignOutButton>
          </Tooltip>
        </Box>
      </VStack>

      <Box flex="1" p={8}>
        <Text fontSize="2xl" fontWeight="semibold">
          Welcome to your Dashboard 👋
        </Text>
        <Text color="gray.600" mt={2}>
          Select an option from the sidebar to get started.
        </Text>
      </Box>
    </HStack>
  );
}
