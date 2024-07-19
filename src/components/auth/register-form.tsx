"use client";

import * as z from "zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas/register";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { AuthWrapper } from "./auth-wrapper";

const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export function RegisterForm() {
  const [isPending] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstname: "",
      lastname: "",
      birthday: "",
    },
  });
  const [error, setError] = useState<string | undefined>();
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof RegisterSchema>) => {
    console.log("submit");
    const validatedValues = RegisterSchema.safeParse(values);

    if (!validatedValues.success) {
      // TODO: show errors
      console.log(validatedValues.error);
      return;
    }

    const { email, password, confirmPassword, firstname, lastname, birthday } = validatedValues.data;
    const resp = await fetch(backendUrl + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        confirmPassword,
        firstname,
        lastname,
        birthday,
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="flex flex-col space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >Email</label>
                <div className="mt-2">
                  <input {...form.register("email")} />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >Firstname</label>
                <div className="mt-2">
                  <input {...form.register("firstname")} />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >Lastname</label>
                <div className="mt-2">
                  <input {...form.register("lastname")} />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >Birthday</label>
                <div className="mt-2">
                  <input {...form.register("birthday")} />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >Password</label>
                <div className="mt-2">
                  <input {...form.register('password')} />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-400"
                >Confirm password</label>
                <div className="mt-2">
                  <input {...form.register('confirmPassword')} />
                </div>
              </div>
              <div className="text-danger-500">{error}</div>
            </div>
            <button
              type="submit"
              disabled={isPending}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </AuthWrapper>
  );
}
