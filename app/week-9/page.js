"use client";
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  return (
    <main className="min-h-screen ">
      <h1 className="text-5xl font-bold mb-4">Shopping List App </h1>
      
      {!user ? (
        <button
          onClick={gitHubSignIn}
          className=" text-2xl mt-2 "
        >
          Sign in with GitHub
        </button>
       
      ) : (
        <div className="flex flex-col text-left text-2xl text-white mt-7 gap-1">
          <p className="m-0 p-0">
            Signed in as: ({user.displayName || user.email}), Welcome !
            
          </p>
          <button 
            onClick={firebaseSignOut}
            className="m-0 p-0 text-left"
          > 
            Sign Out
          </button>
          <Link
            href="/week-9/shopping-list"
            className="m-0 p-0 text-left block"
          >
            Continue to your Shopping List
          </Link>
        </div>
      )}
    </main>
  );
}