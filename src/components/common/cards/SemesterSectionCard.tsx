import { Card, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";

interface SemesterSectionCardProps {
  semester: string;
  section: string;
}

export function SemesterSectionCard({
  semester,
  section,
}: SemesterSectionCardProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/dashboard/${semester}/${section}`);
  };

  return (
    <Card.Root
      cursor="pointer"
      width="200px"
      variant="subtle"
      onClick={handleClick}
      _hover={{
        shadow: "md",
        transform: "translateY(-4px)",
        transition: "0.2s",
      }}
    >
      <Card.Body textAlign="center" py="6">
        <Text fontSize="2xl" fontWeight="bold">
          {semester} Sem
        </Text>

        <Text mt="2" color="fg.muted" fontSize="lg">
          {section}
        </Text>
      </Card.Body>
    </Card.Root>
  );
}
