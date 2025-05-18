import { Home, QrCode, Settings, User } from "lucide-react";
import { NavLink } from "react-router";

import { ROUTES } from "@/kernel/routes";

export const FooterNav = () => {
  return (
    <nav className="bg-primary border-border fixed right-0 bottom-0 left-0 z-50 border-t shadow-md">
      <div className="relative flex h-16 items-center justify-around">
        <FooterNavItem
          href="/"
          icon={<Home className="h-5 w-5" />}
          label="Home"
        />
        <FooterNavItem
          href="/"
          icon={<User className="h-5 w-5" />}
          label="Profile"
        />
        <FooterScanQr href="/" icon={<QrCode className="h-5 w-5" />} label="" />
        <FooterNavItem
          href="/"
          icon={<Settings className="h-5 w-5" />}
          label="Settings"
        />
        <FooterNavItem
          href={ROUTES.settings}
          icon={<Settings className="h-5 w-5" />}
          label="Settings"
        />
      </div>
    </nav>
  );
};

const FooterNavItem = ({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <NavLink
      to={href}
      className="text-muted-foreground hover:text-secondary flex flex-col items-center transition-colors"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </NavLink>
  );
};

const FooterScanQr = ({
  icon,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <button
      // to={href}
      className="hover:text-secondary absolute -top-6 left-1/2 flex -translate-x-1/2 transform flex-col items-center justify-center rounded-full bg-orange-700 p-4 text-white shadow-lg transition-colors"
    >
      {icon}
    </button>
  );
};
