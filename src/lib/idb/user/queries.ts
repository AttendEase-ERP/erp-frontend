import { idb } from "../index";
import type { UserDetails } from "../types";

export async function saveUserDetails(user: UserDetails) {
  await idb.userDetails.clear();
  await idb.userDetails.add(user);
}

export async function getUserDetails() {
  const allUsers = await idb.userDetails.toArray();
  return allUsers[0];
}

export async function clearUserDetails() {
  return idb.userDetails.clear();
}
