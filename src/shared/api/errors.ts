export const getApiError = (
  error: unknown,
): { message: string; status?: number } => {
  return {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    message: error?.data?.message || "Something went wrong",
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    status: Number(error?.status) || 500,
  };
};
