'use server';

import { signOut } from '@lambo/lib/auth';

export async function logout() {
  await signOut();
}
