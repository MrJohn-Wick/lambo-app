'use server';

import { RegisterSchema } from '@lambo/schemas';
import * as z from 'zod';

export async function register(values: z.infer<typeof RegisterSchema>) {
  const validatedValues = RegisterSchema.safeParse(values);

  if (!validatedValues.success) {
    return { error: "Invalid fields" }
  }

  
}
