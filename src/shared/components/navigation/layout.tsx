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
        "bg-muted text-foreground dark:bg-background flex min-h-screen flex-col",
        className,
      )}
    >
      <Header />
      <main className="container mx-auto flex-1 p-4">{children}</main>
      {!withoutFooter && <FooterNav />}
      <Toaster position="bottom-right" />
    </div>
  );
};
