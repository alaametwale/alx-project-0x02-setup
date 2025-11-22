import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { UserProps } from "@/interfaces";

interface UsersPageProps {
  users: UserProps[];
}

export default function UsersPage({ users }: UsersPageProps) {
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

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users?_limit=5");
  const users: UserProps[] = await res.json();

  return {
    props: {
      users,
    },
  };
}
