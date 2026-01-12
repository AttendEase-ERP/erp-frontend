import { useParams } from "react-router";
import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import type { StudentsAttendanceList } from "@/lib/idb/types";
import { idb } from "@/lib/idb";
import { fetchStudentsOfTeacher } from "@/api/user";

export default function AttendanceSheet() {
  const { semester, section } = useParams<{
    semester: string;
    section: string;
  }>();

  const [studentsList, setStudentsList] = useState<StudentsAttendanceList[]>(
    [],
  );

  useEffect(() => {
    (async () => {
      const students = await idb.studentAttendanceList.toArray();
      if (students.length > 0) {
        setStudentsList(students);
        console.log(students);
        return;
      }

      const studentsListFromDB = await fetchStudentsOfTeacher(
        semester || "",
        section || "",
        new Date().toISOString().split("T")[0],
      );

      setStudentsList(studentsListFromDB);

      // save to idb
      for (const student of studentsListFromDB) {
        await idb.studentAttendanceList.put(student);
      }
    })();
  }, [section, semester]);

  return (
    <Box
      h="100vh"
      w="100%"
      display="flex"
      flexDirection="row"
      alignItems="stretch"
    >
      <Text fontSize="2xl" fontWeight="bold">
        Attendance: {section?.toUpperCase()}, {semester} Sem
        <br />
        (Students: {studentsList.length})
      </Text>
    </Box>
  );
}
