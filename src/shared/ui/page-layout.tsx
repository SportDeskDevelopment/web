import type { ReactNode } from "react";

import { cn } from "@/lib/utils";
import { Toaster } from "@/shared/ui/sonner";

interface PageLayoutProps {
  className?: string;
  header?: ReactNode;
  footer?: ReactNode;
  content?: ReactNode;
  children?: ReactNode;
}

export const PageLayout = ({
  className,
  header,
  footer,
  content,
  children,
}: PageLayoutProps) => {
  return (
    <div
      className={cn(
        "bg-background text-foreground flex min-h-screen flex-col",
        className,
      )}
    >
      {header}
      <main className="container mx-auto flex-1 p-4">
        {content ?? children}
      </main>
      {footer}
      <Toaster position="bottom-right" />
    </div>
  );
};
