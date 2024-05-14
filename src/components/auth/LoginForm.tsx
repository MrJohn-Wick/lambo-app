'use client'

import { login } from '@lambo/actions/login';

export function LoginForm() {

  return (
    <form action={login}>
      <div>
        <label htmlFor="login">Login</label>
        <input type="text" name="login" placeholder="Enter your login" required />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" placeholder="Password" required />
      </div>
      <button type="submit">
        Login
      </button>
    </form>
  );
}