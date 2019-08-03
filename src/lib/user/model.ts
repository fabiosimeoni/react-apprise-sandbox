export type User = {
  username: String;
};

export type UserState = {
  logged: User;
};

export const mockUser : User = { username : "Romeo" }