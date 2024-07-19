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
    await login({ email, password });
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-400"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  {...form.register("email")}
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >
                  Password
                </label>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  {...form.register("password")}
                  id="password"
                  name="password"
                  type="password"
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="text-danger-500">{error}</div>
            <div>
              <button
                type="submit"
                disabled={isPending}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
}
