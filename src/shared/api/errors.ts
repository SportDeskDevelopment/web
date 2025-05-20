import i18n from "@/shared/lib/i18n";

export const getApiError = (
  error: unknown,
): { message: string; status?: number } => {
  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    message: error?.data?.message || i18n.t("common:error"),
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    status: Number(error?.status) || 500,
  };
};
