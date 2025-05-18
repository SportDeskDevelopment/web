export const isEmailNotConfirmedError = (
  error: any,
): error is EmailNotConfirmedResponse => {
  return error.status === 403;
};
