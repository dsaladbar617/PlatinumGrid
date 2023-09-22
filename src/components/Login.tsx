"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import UserCard from "./UserCard";

const Login = () => {
  const { data: session } = useSession();
  console.log(session);

  if (session) {
    return (
      <>
        <button
          className="p-5 bg-slate-500 w-[200px]"
          onClick={() => signOut()}
        >
          Sign Out of Google
        </button>
        <UserCard user={session.user} />
      </>
    );
  } else {
    return (
      <>
        <button className="p-5 bg-slate-500 w-[200px]" onClick={() => signIn()}>
          Sign In with Google
        </button>
      </>
    );
  }
};

export default Login;
