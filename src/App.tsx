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
      {users.map((user) => (
        <div
          key={user.id}
          style={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            margin: "3px",
            border: "1px solid #000",
          }}
        >
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
