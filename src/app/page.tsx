"use client";

import { signInWithGoogle, logout } from "@/lib/auth";
import { useAuth } from "@/context/AuthContext";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      {!user ? (
        <button
          onClick={signInWithGoogle}
          className="px-4 py-2 bg-black text-white rounded"
        >
          Sign in with Google
        </button>
      ) : (
        <>
          <p>Welcome {user.displayName}</p>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-500 text-white rounded"
          >
            Logout
          </button>
        </>
      )}
    </div>
  );
}
