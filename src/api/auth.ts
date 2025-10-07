import { api } from "./index";

// Fetch logged in user email
export async function fetchUserEmail() {
  return api.get("/fetch-email");
}
