import { useEffect, useState } from "react";
import { useUser } from "@clerk/react-router";
import { idb } from "@/lib/idb";

import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";

import { fetchUserDetails } from "@/api";
import { saveUserDetails } from "@/lib/idb/user/queries";

export default function DashboardPage() {
  const { user: clerkUser, isLoaded } = useUser();
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    if (!isLoaded) return;

    (async () => {
      const users = await idb.userDetails.toArray();
      const localUser = users[0];

      if (localUser) {
        setRole(localUser.role);
        return;
      }

      if (!clerkUser) return;

      const email = clerkUser.primaryEmailAddress?.emailAddress;
      if (!email) return;

      const freshUser = await fetchUserDetails(email);

      if (freshUser) {
        await saveUserDetails(freshUser);
        setRole(freshUser.role);
      }
    })();
  }, [isLoaded, clerkUser]);

  if (!role) return <div>Loading dashboard...</div>;

  if (role === "teacher") return <TeacherDashboard />;
  if (role === "student") return <StudentDashboard />;
  if (role === "admin") return <AdminDashboard />;

  return <div>Invalid role</div>;
}
