import { Home, QrCode, Settings, User } from "lucide-react";

export const FooterNav = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-primary border-t border-border shadow-md">
      <div className="relative flex justify-around items-center h-16">
        <FooterNavItem
          href="/"
          icon={<Home className="w-5 h-5" />}
          label="Home"
        />
        <FooterNavItem
          href="/"
          icon={<User className="w-5 h-5" />}
          label="Profile"
        />
        <FooterScanQr href="/" icon={<QrCode className="w-5 h-5" />} label="" />
        <FooterNavItem
          href="/"
          icon={<Settings className="w-5 h-5" />}
          label="Settings"
        />
        <FooterNavItem
          href="/"
          icon={<Settings className="w-5 h-5" />}
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
    <a
      href={href}
      className="flex flex-col items-center text-muted-foreground hover:text-secondary transition-colors"
    >
      {icon}
      <span className="text-xs">{label}</span>
    </a>
  );
};

const FooterScanQr = ({
  href,
  icon,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <a
      href={href}
      className="absolute -top-6 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center bg-orange-700 text-white rounded-full p-4 shadow-lg hover:text-secondary transition-colors"
    >
      {icon}
    </a>
  );
};
