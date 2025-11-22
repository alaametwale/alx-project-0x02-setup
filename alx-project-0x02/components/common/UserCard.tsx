import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 mb-4 rounded shadow">
      <h2 className="font-bold text-lg">{name}</h2>
      <p>Email: {email}</p>
      <p>
        Address: {address.street}, {address.suite}, {address.city}, {address.zipcode}
      </p>
    </div>
  );
}
