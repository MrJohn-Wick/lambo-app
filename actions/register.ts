'use server';

import bcrypt from 'bcrypt';
import { RegisterSchema } from '@lambo/schemas';
import * as z from 'zod';
import { db } from '@lambo/lib/db';
import { getUserByEmail } from '@lambo/data/user';

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedValues = RegisterSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid fields" }
  }

  const { email, password, name } = validatedValues.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await getUserByEmail(email);

  if(existingUser) {
    return { error: "Email alredy in use" }
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  })

  return { message: "Account created"}
}
