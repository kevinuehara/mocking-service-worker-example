import { useState } from "react";
import { User } from "./types/user";
import { UserService } from "./services/user";

function App() {
  const [users, setUsers] = useState<User[]>([]);

  const handleFetchUsers = async () => {
    const users = await UserService.getUsers();
    setUsers(users);
  };

  return (
    <div className="container">
      <h1>Mocking Service Worker Example</h1>
      <button onClick={handleFetchUsers}>Fetch Data</button>
      {users &&
        users.map((user) => (
          <div className="card" key={user.id}>
            <img src={user.avatar} width="100px" height="100px" />
            <label>Name: {user.name}</label>
            <label>UserName: {user.userName}</label>
            <label>Email: {user.email}</label>
          </div>
        ))}
    </div>
  );
}

export default App;
