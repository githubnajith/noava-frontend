"use client";
// ------------------------
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
// ?----------------------------------------------------------------------------
const Tenstack_provider = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        gcTime: Infinity,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};
export default Tenstack_provider;
