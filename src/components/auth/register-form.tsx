"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { AuthWrapper } from "./auth-wrapper";

const backendUrl = process.env.BACKEND_URL || "http://localhost:3000";

export function RegisterForm() {
  const [isPending] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    const validatedValues = RegisterSchema.safeParse(values);

    if (!validatedValues.success) {
      // TODO: show errors
      return;
    }

    const { email, password, confirmPassword } = validatedValues.data;
    const resp = await fetch(backendUrl + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
      }),
    });

    const data = await resp.json();

    if (data.success) {
      router.push("login");
    } else {
      setError(data.message);
    }
  };

  return (
    <AuthWrapper
      headerLink="Sign In"
      headerLinkHref="/login"
      subtitle="Alredy have an account?"
      title="Sign Up"
    >
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <div>
            <label>Email</label>
            <input {...form.register("email")} />
          </div>
          <div>
            <label>Password</label>
            <input {...form.register('password')} />
          </div>
          <div>
            <label>Confirm password</label>
            <input {...form.register('confirmPassword')} />
          </div>
          <div className="text-danger-500">{error}</div>
        </div>
        <input type="submit" disabled={isPending} />
      </form>
    </AuthWrapper>
  );
}
