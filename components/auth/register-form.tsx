"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@lambo/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { backendUrl } from "@lambo/config/site";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";

import { AuthWrapper } from "./auth-wrapper";

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
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
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
