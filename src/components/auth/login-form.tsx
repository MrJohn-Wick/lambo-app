"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { login } from "@/actions/login";

import { AuthWrapper } from "./auth-wrapper";

export function LoginForm() {
  const [isPending] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const [error, setError] = useState<string | undefined>();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const validatedValues = LoginSchema.safeParse(values);

    if (!validatedValues.success) {
      // TODO: show errors
      return;
    }

    //login
    const { email, password } = validatedValues.data;

    login({ email, password });
  };

  return (
    <AuthWrapper
      footerLink="Forgot password?"
      footerLinkHref="/password-reset"
      headerLink="Sign Up"
      headerLinkHref="/register"
      subtitle="Don’t have an account?"
      title="Sign In"
    >
      <form
        className="flex flex-col space-y-6"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex flex-col space-y-4">
          <div>
            <label>Email</label>
            <input {...form.register("email")} />
          </div>
          <div>
            <label>Password</label>
            <input {...form.register("password")} />
          </div>
          <div className="text-danger-500">{error}</div>
        </div>
        <input type="submit" disabled={isPending} />
      </form>
    </AuthWrapper>
  );
}
