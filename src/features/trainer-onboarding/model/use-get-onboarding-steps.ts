import { userApi } from "@/shared/api/user";

export function useGetOnboardingSteps() {
  const { data } = userApi.useGetCurrentUser();

  return data?.trainerOnboardingLeft ?? [];
}
