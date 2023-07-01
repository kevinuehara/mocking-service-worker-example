import { User } from "../../types/user";

export class UserService {
  static async getUsers(): Promise<User[]> {
    // Fetch User API
    const mockUsers = new Array(3).fill(null).map((_, index) => ({
      id: index.toString(),
      email: "kevin@gmail.com",
      name: "kevin",
      userName: "uehara.kevin",
      avatar:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    }));

    return Promise.resolve(mockUsers);
  }
}
