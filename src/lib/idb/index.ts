import Dexie, { type Table } from "dexie";
import type { UserDetails } from "./types";

const idb = new Dexie("ERPDatabase") as Dexie & {
  userDetails: Table<UserDetails, string>;
};

// Schema declaration
idb.version(1).stores({
  userDetails: "email",
});

export { idb };
