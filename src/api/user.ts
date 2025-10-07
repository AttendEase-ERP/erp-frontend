import { api } from "./index";

// Fetch user role (student/admin/teacher)
export async function fetchUserRole() {
  return api.get("/fetch-role");
}
