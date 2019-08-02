export type User = {
  username: String;
};

export type UserModel = {
  logged: User;
};

export const initialUser = { username: "guest" };
