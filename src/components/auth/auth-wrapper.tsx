import Link from "next/link";

interface AuthWrapperProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  headerLink: string;
  headerLinkHref: string;
  showFooterLink?: boolean;
  footerLink?: string;
  footerLinkHref?: string;
  showSocial?: boolean;
}

export const AuthWrapper = ({
  children,
  title,
  subtitle,
  headerLink,
  headerLinkHref,
  showFooterLink = true,
  footerLink,
  footerLinkHref,
  showSocial = true,
}: AuthWrapperProps) => {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
        {title}
      </h2>
      {children}
      <div className="text-center text-2xl text-center leading-9 tracking-tight">
        <Link href={headerLinkHref}>{headerLink}</Link>
      </div>
      {showFooterLink && (
        <div className="mt-20 text-center">
          <Link href={footerLinkHref || ""}>{footerLink}</Link>
        </div>
      )}
      {showSocial && (
        <div className="text-center mt-4">Social login buttons</div>
      )}
    </div>
  );
};

// <div className="w-[408px] rounded-md">
{
  /* <div className="p-[24px]"> */
}
{
  /* <h1 className="text-4xl">{title}</h1>
        <div className="my-1">
          {subtitle} <Link href={headerLinkHref}>{headerLink}</Link>
        </div>
        
        
      </div> */
}
// </div>
