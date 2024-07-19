"use server";

import { AuthError } from '@auth/core/errors';
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { redirect, RedirectType } from 'next/navigation';

export const login = async (
  values: { email: string; password: string },
  callbackUrl?: string | null,
) => {
  const { email, password } = values;

  console.log('start credential login');
  let url = "";

  try {
    console.log('start credential login');
    url = await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT,
      redirect: false,
    });
    console.log("finish credetials", url);

  } catch (error) {
    // console.log(error);
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
    // throw error;
  }
  if (url) {
    console.log('redirect');
    // return { 
    //   success: true,
    //   redirect: url,
    // }
    redirect('profile', RedirectType.push);
  }

  return { error: "Something went wrong too!" };
};
