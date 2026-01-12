interface BaseUser {
  email: string;
  name: string;
  role: "teacher" | "student" | "admin";
}

export interface TeacherDetails extends BaseUser {
  role: "teacher";
  section: Array<string>;
  subject: string;
  course_name: string;
  course_duration: string;
  Semester: string;
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

export interface Student {
  id: string;
  name: string;
  email: string;
  enrollment_number: string;
  current_semester: number;
  section_id: string;
}

export interface Section {
  id: string;
  section_name: string;
  course_id: string;
}

export interface Course {
  id: string;
  course_name: string;
  course_duration: string;
}

export interface Attendance {
  id: string;
  student_id: string;
  teacher_id: string;
  subject_id: string;
  date: string;
  attendance_status: "present" | "absent";
}

export interface StudentsAttendanceList {
  id: string;
  name: string;
  email: string;
  enrollment_number: string;
  attendance_status: "present" | "absent";
}
