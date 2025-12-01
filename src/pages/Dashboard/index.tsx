import { useEffect, useState } from "react";
import { idb } from "@/lib/idb";

import TeacherDashboard from "./TeacherDashboard";
import StudentDashboard from "./StudentDashboard";
import AdminDashboard from "./AdminDashboard";

export default function DashboardPage() {
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      const users = await idb.userDetails.toArray();
      setRole(users[0]?.role || null);
    })();
  }, []);

  if (!role) return null;

  if (role === "teacher") return <TeacherDashboard />;
  if (role === "student") return <StudentDashboard />;
  if (role === "admin") return <AdminDashboard />;

  return <div>Invalid role</div>;
}
