"use client";

import { useEffect, useState } from "react";
import UserCard from "./user-card";

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

export default function UsersClient() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // use relative URL to leverage Next.js rewrites for proxying
    fetch(`/api/v1/users`, {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div className="container mx-auto mt-12">
      <h1 className="text-2xl font-bold mb-6">Client Side Fetching</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}
