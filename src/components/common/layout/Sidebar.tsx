import { Avatar, Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { FiLogOut, FiUser } from "react-icons/fi";
import { SignOutButton } from "@clerk/react-router";
import { useState } from "react";
import type { IconType } from "react-icons";

import { Tooltip } from "@/components/ui/tooltip";

import { onSignOutCleanup } from "@/lib/auth/onSignOut";
import type { UserDetails } from "@/lib/idb/types";

interface MenuItem {
  icon: IconType;
  label: string;
  path: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
  user: UserDetails | null;
  onNavigate: (path: string) => void;
}

export function Sidebar({ menuItems, user, onNavigate }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <VStack
      bg="sidebarBg"
      h="full"
      w={isExpanded ? "220px" : "80px"}
      transition="width 0.2s ease-in-out"
      align="stretch"
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      p={4}
      justify="space-between"
      shadow="lg"
      borderRight="1px solid"
      borderRightColor="gray.200"
      position="relative"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        right: 0,
        h: "full",
        w: "1px",
        bg: "gray.200",
      }}
    >
      <Stack gap={6}>
        <Box textAlign="center">
          <Avatar.Root size="md">
            <Avatar.Fallback>
              <FiUser fontSize="1.4rem" />
            </Avatar.Fallback>
          </Avatar.Root>
          {isExpanded && (
            <Text mt={2} fontWeight="medium" fontSize="sm">
              {user?.name || "User"}
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
                onClick={() => onNavigate(path)}
                px={4}
                py={3}
                rounded="lg"
                gap={isExpanded ? 3 : 0}
                justify={isExpanded ? "flex-start" : "center"}
                bg={isExpanded ? "whiteAlpha.900" : "rgba(255,255,255,0.6)"}
                _hover={{
                  bg: isExpanded ? "gray.50" : "gray.100",
                  transform: "translateX(2px)",
                  shadow: "md",
                }}
                _dark={{
                  bg: isExpanded ? "gray.800" : "rgba(0,0,0,0.4)",
                  _hover: {
                    bg: isExpanded ? "gray.700" : "gray.700",
                  },
                }}
                transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
                position="relative"
                _focus={{
                  boxShadow: "0 0 0 3px rgba(59, 130, 246, 0.5)",
                }}
              >
                <Icon
                  color={isExpanded ? "gray.800" : "gray.700"}
                  size={isExpanded ? 20 : 24}
                />
                {isExpanded && <Text fontWeight="medium">{label}</Text>}
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
              px={4}
              py={3}
              rounded="lg"
              justify={isExpanded ? "flex-start" : "center"}
              bg={isExpanded ? "whiteAlpha.900" : "rgba(255,255,255,0.6)"}
              _hover={{
                bg: isExpanded ? "red.50" : "red.50",
                transform: "translateX(2px)",
                shadow: "md",
              }}
              _dark={{
                bg: isExpanded ? "gray.800" : "rgba(0,0,0,0.4)",
                _hover: {
                  bg: isExpanded ? "red.900/70" : "red.900/70",
                },
              }}
              onClick={() => onSignOutCleanup()}
              transition="all 0.2s cubic-bezier(0.4, 0, 0.2, 1)"
              _focus={{
                boxShadow: "0 0 0 3px rgba(239, 68, 68, 0.5)",
              }}
            >
              <FiLogOut
                color={isExpanded ? "red.700" : "red.600"}
                size={isExpanded ? 20 : 24}
              />
              {isExpanded && (
                <Text fontWeight="medium" color="red.700">
                  Logout
                </Text>
              )}
            </HStack>
          </SignOutButton>
        </Tooltip>
      </Box>
    </VStack>
  );
}
