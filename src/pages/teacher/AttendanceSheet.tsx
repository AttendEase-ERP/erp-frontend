import { useParams } from "react-router";
import { Box, Text } from "@chakra-ui/react";

export default function AttendanceSheet() {
  const { section } = useParams<{ section: string }>();

  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Attendance: {section?.toUpperCase()}
      </Text>
    </Box>
  );
}
