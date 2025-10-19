import { api } from "./index";

// Fetch user role (student/admin/teacher)
export async function fetchUserRole(email: string) {
  return api.get(`/fetch-user-details?email=${email}`);
}
