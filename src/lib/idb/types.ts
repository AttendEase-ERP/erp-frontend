interface BaseUser {
  email: string;
  name: string;
  role: "teacher" | "student" | "admin";
}

export interface TeacherDetails extends BaseUser {
  role: "teacher";
  section: string;
  subject: string;
  course_name: string;
  course_duration: string;
}

export interface StudentDetails extends BaseUser {
  role: "student";
  section: string;
  semester: string;
  enrollment_number: string;
  course_name: string;
}

export interface AdminDetails extends BaseUser {
  role: "admin";
  course_name: string;
  course_duration: string;
}

export type UserDetails = TeacherDetails | StudentDetails | AdminDetails;
