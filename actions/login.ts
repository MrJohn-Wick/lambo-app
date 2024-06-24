'use server';

import * as z from 'zod';
import { signIn } from '@lambo/lib/auth';
import { LoginSchema } from '@lambo/schemas';
import { AuthError } from 'next-auth';

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" }
  }

  const { email, password } = values;
  try {
    await signIn('credentials', {
      email,
      password,
      redirect: false,
      // redirectTo: '/profile',
    })
    return { message: "You are entered" };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin": 
          return { error: "Invalid credentials" }
        default:
          return { error: "Somthing went wrong!" }
      }
    }
    throw error;
  }

}
