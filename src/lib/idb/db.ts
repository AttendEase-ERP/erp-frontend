import Dexie, { type EntityTable } from "dexie";

interface Friend {
  id: number;
  name: string;
  age: number;
}

const db = new Dexie("FriendsDatabase") as Dexie & {
  friends: EntityTable<Friend, "id">;
};

db.version(1).stores({
  friends: "++id, name, age",
});

export type { Friend };
export { db };
