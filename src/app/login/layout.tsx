import { auth } from "@lambo/auth";

export default async function LoginLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body>
        <div className="container">
          {children}
        </div>
        Test login layout
      </body>
    </html>
  );
}
