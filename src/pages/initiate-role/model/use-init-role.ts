import { userApi } from "@/shared/api/user";

export const useInitRole = () => {
  const user = userApi.useGetCurrentUserSuspense();

  const isRoleInitialized =
    user.data.traineeProfile ||
    user.data.trainerProfile ||
    user.data.parentProfile;

  return {
    isInitialized: isRoleInitialized,
  };
};
