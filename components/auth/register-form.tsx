'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthWrapper } from './auth-wrapper'
import { Controller, useForm } from 'react-hook-form';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useState, useTransition } from 'react';
import { RegisterSchema } from '@lambo/schemas';
import { register } from '@lambo/actions/register';


export const RegisterForm = () => {
  const [message, setMessage] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof RegisterSchema>) => {
    startTransition(() => {
      register(values);
      //   .then((data) => {
      //     if(data.error)
      //       setMessage(data.error);
      //     else 
      //       setMessage(data.message);
      //   });
    })
  }

  return (
    <AuthWrapper
      headerLabel='Registration'
      backButtonLabel='Have an account'
      backButtonHref='/login'
    >
        <form
          className='flex flex-col items-start space-y-4 gap-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4 gap-4">
          <Controller
              name="name"
              control={form.control}
              render={({field}) => (
                <Input
                  {...field}
                  label="Name"
                  disabled={isPending}
                  placeholder="Enter your name"
                  errorMessage={form.formState.errors.name && form.formState.errors.name.message}
                  isInvalid={!!form.formState.errors.name}
                />
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({field}) => (
                <Input
                  {...field}
                  label="Email"
                  disabled={isPending}
                  placeholder="Enter your email"
                  errorMessage={form.formState.errors.email && form.formState.errors.email.message}
                  isInvalid={!!form.formState.errors.email}
                />
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({field}) => (
                <Input
                  {...field}
                  label="Password"
                  placeholder='Enter your password'
                  disabled={isPending}
                  errorMessage={form.formState.errors.password && form.formState.errors.password.message}
                  isInvalid={!!form.formState.errors.password}
                />
              )}
            />
          </div>
          <div className="w-full space-y-6">
            {message}
          </div>
          <Button type="submit" color="primary" className="w-full" disabled={isPending}>
            Register
          </Button>
        </form>
    </AuthWrapper>
  )
}