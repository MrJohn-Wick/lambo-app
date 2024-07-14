"use server";

import { AuthError } from '@auth/core/errors';
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect } from 'next/navigation';

export const login = async (
  values: { email: string; password: string },
  callbackUrl?: string | null,
) => {
  const { email, password } = values;

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false
      // redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
    });
    redirect(callbackUrl || DEFAULT_LOGIN_REDIRECT)
  } catch (error) {
    console.log(error);
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        case "CallbackRouteError":
          return error.cause?.err?.toString();
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};
