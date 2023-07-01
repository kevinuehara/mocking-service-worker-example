import { User } from "../../types/user";

export class UserService {
  static async getUsers(): Promise<User[]> {
    const users = await fetch("/users");
    return users.json();
  }
}
