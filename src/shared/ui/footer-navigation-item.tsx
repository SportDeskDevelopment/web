import { useState } from "react";
import { NavLink } from "react-router";

import { cn } from "@/lib/utils";

export const FooterNavItem = ({
  href,
  icon,
  label,
  isActive,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}) => {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <NavLink
      to={href}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      className={cn(
        "text-muted-foreground hover:text-secondary flex flex-col items-center transition-all",
        isActive && "text-primary/80",
        isPressed && "opacity-50",
      )}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};
