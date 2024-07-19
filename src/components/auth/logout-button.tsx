"use client";

import { logout } from "@/actions/logout";

interface LogoutButtonProps {
  children: React.ReactNode;
}

export function LogoutButton({ children }: LogoutButtonProps) {
  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      {children}
    </button>
  );
}
