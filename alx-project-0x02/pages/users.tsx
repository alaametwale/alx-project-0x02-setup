import { useEffect, useState } from "react";
import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

export default function UsersPage() {
  const [users, setUsers] = useState<UserProps[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div>
      <Header />
      <h1>Users Page</h1>
      {users.map((user) => (
        <UserCard key={user.email} {...user} />
      ))}
    </div>
  );
}
