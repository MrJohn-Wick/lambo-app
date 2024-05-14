import { cookies } from '~next/headers';

export function UserStatus() {
  const session = cookies().get('session');
  const userStatus = session ? "authorized" : 'anonimous';

  return (
    <>
      {userStatus}
    </>
  );
}