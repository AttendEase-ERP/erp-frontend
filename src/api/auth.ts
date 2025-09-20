import { api } from "./apiClient";

// Fetch logged in user email
export async function fetchUserEmail() {
  return api.get("/auth-check");
}
