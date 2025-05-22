import { useState } from "react";
import { NavLink } from "react-router";

import { cn } from "@/lib/utils";

export const FooterNavItem = ({
  href,
  icon,
  label,
  getIsActive,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  getIsActive?: (pathname: string) => boolean;
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NavLink
      to={href}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      className={cn(
        "text-muted-foreground hover:text-secondary flex flex-col items-center transition-all",
        getIsActive?.(href) && "text-primary/80",
        isPressed && "opacity-50",
      )}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};
