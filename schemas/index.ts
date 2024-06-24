import * as z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email({message: "Invalid email"}),
  password: z.string()
});

export const RegisterSchema = z.object({
  email: z.string().email({message: "Invalid email"}),
  password: z.string().min(6, {
    message: "Minimum 6 chars"
  }),
  name: z.string().min(1, {
    message: "Name is required"
  })
});
