import { queryClient } from "@/shared/api/query-client";
import { userApi } from "@/shared/api/user";

export function prefetchOnboarding() {
  queryClient.prefetchQuery(userApi.getGetUserOnboardingQueryOptions());

  return null;
}
