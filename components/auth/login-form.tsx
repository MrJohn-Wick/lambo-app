'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthWrapper } from './auth-wrapper'
import { Controller, Form, useForm } from 'react-hook-form';
import { LoginSchema } from '@lambo/schemas';
import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';
import { useState, useTransition } from 'react';
import { login } from '@lambo/actions/login';


export const LoginForm = () => {
  const [message, setMessage] = useState<string | undefined>();
  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    startTransition(() => {
      login(values)
        .then((data) => {
          if(data.error)
            setMessage(data.error);
          else 
            setMessage(data.message);
        });
    })
  }

  return (
    <AuthWrapper
      headerLabel='Auth'
      backButtonLabel="Don't have an account"
      backButtonHref='/register'
    >
        <form
          className='flex flex-col items-start space-y-4 gap-4'
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className="space-y-4 gap-4">
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
                  type="password"
                  label="Password"
                  placeholder="*****"
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
            Login
          </Button>
        </form>
    </AuthWrapper>
  )
}