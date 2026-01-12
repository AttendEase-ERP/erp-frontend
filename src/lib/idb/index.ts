import Dexie, { type Table } from "dexie";
import type { StudentsAttendanceList, UserDetails } from "./types";

const idb = new Dexie("ERPDatabase") as Dexie & {
  userDetails: Table<UserDetails, string>;
  studentAttendanceList: Table<StudentsAttendanceList, string>;
};

// Schema declaration
idb.version(1).stores({
  userDetails: "email",
  studentAttendanceList: "id",
});

export { idb };
