"use server";

import { AuthError } from '@auth/core/errors';
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const login = async (
  values: { email: string; password: string },
  callbackUrl?: string | null,
) => {
  const { email, password } = values;

  console.log('start credential login');

  try {
    console.log('start credential login');
    const l = await signIn("credentials", {
      email,
      password,
      // redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
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

    return { error: "Something went wrong too!" };
    // throw error;
  }
};
