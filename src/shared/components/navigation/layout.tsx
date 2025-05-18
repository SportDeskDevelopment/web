import type { ReactNode } from "react";

import { FooterNav } from "./footer-navigation";
import { Header } from "./header";

import { cn } from "@/lib/utils";
import { Toaster } from "@/shared/ui/sonner";

interface LayoutProps {
  children: ReactNode;
  className?: string;
  withoutFooter?: boolean;
}

export const Layout = ({ children, className, withoutFooter }: LayoutProps) => {
  return (
    <div
      className={cn(
        "flex min-h-screen flex-col bg-secondary text-foreground dark:bg-background",
        className,
        "dark",
      )}
    >
      <Header />
      <main className="flex-1 container mx-auto p-4">{children}</main>
      {!withoutFooter && <FooterNav />}
      <Toaster position="bottom-right" />
    </div>
  );
};
