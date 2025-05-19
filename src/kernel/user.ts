export const RoleType = {
  TRAINER: "TRAINER",
  TRAINEE: "TRAINEE",
  PARENT: "PARENT",
  ADMIN: "ADMIN",
  SUPERADMIN: "SUPERADMIN",
} as const;

export type RoleType = (typeof RoleType)[keyof typeof RoleType];
