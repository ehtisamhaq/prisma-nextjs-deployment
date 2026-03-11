import { cookies } from "next/headers";
import React from "react";
import UsersClient from "./components/users-client";
import UserCard from "./components/user-card";

interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

async function getUsers() {
  const cookieStore = await cookies();
  // use full URL to server since this is server-side and we can't rely on Next.js rewrites
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/users`,
    {
      cache: "no-store",
      headers: {
        Cookie: cookieStore.toString(),
      },
    },
  );
  return response.json();
}

export default async function PrivatePage() {
  const users = await getUsers();

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">Server Side Fetching</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.data?.map((user: User) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
      <UsersClient />
    </div>
  );
}
