"use client";

import { authClient } from "@/lib/auth-client";

export default function Login() {
  const handleSocialLogin = async () => {
    await authClient.signIn.social({
      provider: "discord",
      callbackURL: "/home",
    });
  };

  return (
    <div>
      <button onClick={() => handleSocialLogin()}>Sign in</button>
    </div>
  );
}
