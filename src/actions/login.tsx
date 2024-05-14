'use server'

import { cookies } from '~next/headers';
import { redirect } from '~next/navigation';

function createSession(session: string) {
  const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

  cookies().set('session', session, {
    expires: expiresAt,
    path: '/',
  });
}

export async function login(formData: FormData) {
  const login = formData.get('login');
  const password = formData.get('password');

  const response = await fetch('https://api.lambo.biz/client/auth_tel_login', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({ login, password, code: '1000' }),
  });

  if(response.ok) {
    const payload = await response.json();
    createSession(payload.session);
    redirect('/');
  }

}
