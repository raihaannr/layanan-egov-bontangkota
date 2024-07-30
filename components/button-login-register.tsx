"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { IoExitOutline } from "react-icons/io5";

const ButtonLoginRegister = () => {
  const { data: session, status } = useSession();

  if (session && session.user) {
    return (
      <div className="flex gap-4 ml-auto">
        <p className="text-white font-bold text-xl">{session.user.name}</p>
        <button onClick={() => signOut()} className="text-orange-400">
          <IoExitOutline size={25}/>
        </button>
      </div>
    );
  } else {
    return (
      <div className="text-center flex">
        <button onClick={() => signIn()}>
          <div className="container w-24 p-0.5 bg-orange-400 text-black font-semibold rounded-md">
            Login
          </div>
        </button>
        <Link href="/register">
          <div className="container w-24 p-0.5 border border-orange-400 rounded-md text-white ml-5">
            Register
          </div>
        </Link>
      </div>
    );
  }
};

export default ButtonLoginRegister;
