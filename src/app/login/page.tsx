import { LoginForm } from '@lambo/components/auth/LoginForm';
import Link from '~next/link';

export default function Login() {
  return (
    <>
      <Link href="/">Home</Link>
      <LoginForm />
    </>
  );
}