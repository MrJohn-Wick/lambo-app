import { actionLogout } from "@lambo/actions/auth";
import { auth } from "@lambo/auth";

export default async function Profile() {
  const session = await auth();

  session?.user?.email;

  return (
    <div>
      <p>{session?.user?.name}</p>
      <p>{session?.user?.email}</p>
      <form action={actionLogout}>
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}
