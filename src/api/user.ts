import type {
  AdminDetails,
  StudentDetails,
  TeacherDetails,
} from "@/lib/idb/types";
import { api } from "./index";

// Fetch user role (student/admin/teacher)
export async function fetchUserDetails(
  email: string,
): Promise<TeacherDetails | StudentDetails | AdminDetails> {
  return api.get(`/fetch-user-details?email=${email}`);
}
