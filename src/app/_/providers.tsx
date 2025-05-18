import { QueryClientProvider } from "@tanstack/react-query";

import { ThemeProvider } from "@/features/theme-switch";
import { queryClient } from "@/shared/api/query-client";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>{children}</ThemeProvider>
    </QueryClientProvider>
  );
};
