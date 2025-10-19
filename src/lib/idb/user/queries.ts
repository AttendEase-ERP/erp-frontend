import { idb } from "../index";
import type { UserDetails } from "../types";

export async function saveUserDetails(user: UserDetails) {
  await idb.userDetails.put(user);
}

export async function getUserDetails(email: string) {
  return idb.userDetails.get(email);
}

export async function clearUserDetails() {
  return idb.userDetails.clear();
}
