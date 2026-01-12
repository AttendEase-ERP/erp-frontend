import type { StudentsAttendanceList, UserDetails } from "@/lib/idb/types";
import { api } from "./index";

// Fetch user role (student/admin/teacher)
export async function fetchUserDetails(email: string): Promise<UserDetails> {
  return api.get(`/fetch-user-details?email=${email}`);
}

/*
All teacher related APIs
*/
export async function fetchStudentsOfTeacher(
  semester: string,
  section: string,
  date: string,
): Promise<StudentsAttendanceList[]> {
  return api.get(
    `/fetch-teacher-students?semester=${semester}&section=${section}&date=${date}`,
  );
}
