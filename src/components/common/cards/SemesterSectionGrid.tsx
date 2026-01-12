import { SimpleGrid } from "@chakra-ui/react";

import { SemesterSectionCard } from "./SemesterSectionCard";

import type { UserDetails, TeacherDetails } from "../../../lib/idb/types";

interface Props {
  user: UserDetails;
}

export function SemesterSectionGrid({ user }: Props) {
  if (user.role !== "teacher") {
    return null;
  }

  const teacher = user as TeacherDetails;

  return (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap="5">
      {teacher.section.map((sec) => (
        <SemesterSectionCard
          key={sec}
          semester={teacher.Semester}
          section={sec}
        />
      ))}
    </SimpleGrid>
  );
}
