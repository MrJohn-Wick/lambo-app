"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { LoginSchema } from "@lambo/schemas/login";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { backendUrl } from "@lambo/config/site";
import { useRouter } from "next/navigation";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

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
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    const validatedValues = LoginSchema.safeParse(values);

    if (!validatedValues.success) {
      // TODO: show errors
      return;
    }

    //login
    const { email, password } = validatedValues.data;
    const resp = await fetch(backendUrl + "/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (resp.status === 401) {
      const data = await resp.json();

      setError(data.message);

      return;
    }

    if (resp.status === 200) {
      // Login success, session cookie is set
      router.push("/profile");
    }
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
      <Form {...form}>
        <form
          className="flex flex-col space-y-6"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="flex flex-col space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} type="email" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isPending} type="password" />
                  </FormControl>
                </FormItem>
              )}
            />
            <div className="text-danger-500">{error}</div>
          </div>
          <Button className="w-full" disabled={isPending} type="submit">
            Log in
          </Button>
        </form>
      </Form>
    </AuthWrapper>
  );
}
