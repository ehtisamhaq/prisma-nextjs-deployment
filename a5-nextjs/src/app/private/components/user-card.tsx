interface User {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string;
  updatedAt: string;
}

interface UserCardProps {
  user: User;
}

export default function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16 rounded-full overflow-hidden bg-gray-200">
          <div className="w-full h-full flex items-center justify-center text-2xl font-semibold text-gray-500">
            {user.name.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
          <div className="flex items-center gap-2 mt-1">
            <span
              className={`text-xs px-2 py-1 rounded-full ${
                user.emailVerified
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {user.emailVerified ? "Verified" : "Unverified"}
            </span>
          </div>
        </div>
      </div>
      <div className="mt-4 pt-4 border-t text-xs text-gray-400">
        <p>Joined: {new Date(user.createdAt).toLocaleDateString()}</p>
      </div>
    </div>
  );
}
