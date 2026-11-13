// literal type

type Status = "pending";
const status: Status = "pending";

//* basic union

type identity = string | number;
const id: identity = 2523;

//* littral union

type Role = "user" | "admin" | "manager";

const userRoal: Role = "manager";

//* object union

type Admin = { id: number; role: "admin"; privilages: string };
type Member = { id: number; role: "member"; plans: string[] };

type User = Admin | Member;

const user: User = { id: 122, role: "admin", privilages: "acasd" };

const user2: User = { id: 121, role: "member", plans: ["1212", "sdfsd"] };
