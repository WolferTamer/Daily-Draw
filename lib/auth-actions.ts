"use server";

import { redirect } from "next/navigation";
import { auth } from "./auth";

export const signInSocial = async () => {
  const { url } = await auth.api.signInSocial({
    body: {
      provider: "discord",
      callbackURL: "http://localhost:3000/auth/redirect",
    },
  });

  if (url) {
    redirect(url);
  }
};
