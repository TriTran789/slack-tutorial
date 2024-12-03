"use client";
import { SignInFlow } from "@/types/auth";
import { useState } from "react";
import SignInCard from "./SignInCard";
import SignUpCard from "./SignUpCard";

const AuthScreen = () => {
  const [state, setState] = useState<SignInFlow>("signIn");
  return (
    <div className="h-full flex justify-center items-center bg-[#5C3B58]">
      <div className="md:h-auto md:w-[420px] bg-blue-500">
        {state === "signIn" ? <SignInCard /> : <SignUpCard />}
      </div>
    </div>
  );
};

export default AuthScreen;
