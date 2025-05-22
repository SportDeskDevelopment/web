import { useState } from "react";
import { NavLink, useViewTransitionState } from "react-router";

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
  const isTransitioning = useViewTransitionState(href);

  const isActive = getIsActive?.(href);
  return (
    <NavLink
      to={href}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      viewTransition
      className={cn(
        "text-muted-foreground hover:text-secondary flex flex-col items-center transition-all",
        isActive && "text-primary/80",
        isPressed && "opacity-50",
        isTransitioning && isActive && "scale-110",
      )}
    >
      {icon}
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};
