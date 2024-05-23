import { prisma } from '@lambo/lib/prisma';
import { notFound } from '~next/navigation';


export default async function Page({ params }: { params: { id: string } }) {
  const user = await prisma.user.findUnique({
    where: {
      id: Number(params?.id),
    },
  });

  if (!user)
    notFound();
  
  return (
    <div>
      <div>{user?.id}</div>
      <div>{user?.email}</div>
    </div>
  );
}