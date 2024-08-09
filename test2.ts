type UserRole = "guest" | "member" | "admin";

type User = {
  id: number;
  username: string;
  role: UserRole;
};

type UpdatedUser = Partial<User>;

let nextUserId = 1;

const users: User[] = [
  { id: nextUserId++, username: "john_doe", role: "member" },
  { id: nextUserId++, username: "jane_doe", role: "admin" },
  { id: nextUserId++, username: "guest_user", role: "guest" },
  { id: nextUserId++, username: "alice_jones", role: "member" },
];

function fetchUserDetails(identifier: string | number): User {
  let user;
  if (typeof identifier === "string") {
    user = users.find(
      (user) => user.username.toLowerCase() === identifier.toLowerCase()
    );
    if (!user) {
      throw new Error(`User with username ${identifier} not found`);
    }
  } else if (typeof identifier === "number") {
    user = users.find((user) => user.id === identifier);
    if (!user) {
      throw new Error(`User with id ${identifier} not found`);
    }
  } else {
    throw new TypeError(
      "Parameter 'identifier' must be either a string or a number"
    );
  }
  return user;
}

function updateUser(id: number, updates: UpdatedUser): void {
  const user = fetchUserDetails(id);
  Object.assign(user, updates);
}

function addNewUser(newUser: Omit<User, "id">): User {
  const user: User = {
    id: nextUserId++,
    ...newUser,
  };
  users.push(user);
  return user;
}

console.log(users);
updateUser(1, { username: "new_john_doe" });
addNewUser({ username: "joe_schmoe", role: "member" });
console.log(users);
