import { clearUserDetails } from "@/lib/idb/user/queries";

export async function onSignOutCleanup() {
  try {
    await clearUserDetails();

    console.log("IDB cleaned after sign out");
  } catch (err) {
    console.error("Failed to clear IDB:", err);
  }
}
