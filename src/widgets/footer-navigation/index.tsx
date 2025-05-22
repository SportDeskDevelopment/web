import { Home, QrCode, Settings, User } from "lucide-react";

import { ROUTES } from "@/kernel/routes";
import { FooterNavigationLayout } from "@/shared/ui/footer-navigation";
import { FooterNavItem } from "@/shared/ui/footer-navigation-item";
import { FooterScanQr } from "@/shared/ui/footer-scan-qr";

export function FooterNavigation() {
  return (
    <FooterNavigationLayout>
      <FooterNavItem
        href={ROUTES.home}
        icon={<Home className="h-5 w-5" />}
        label="Home"
      />
      <FooterNavItem
        href={ROUTES.home}
        icon={<User className="h-5 w-5" />}
        label="Profile"
      />
      <FooterScanQr
        icon={<QrCode className="h-5 w-5" />}
        className="absolute -top-6 left-1/2 flex -translate-x-1/2 transform"
      />
      <FooterNavItem
        href={ROUTES.settings}
        icon={<Settings className="h-5 w-5" />}
        label="Settings"
      />
      <FooterNavItem
        href={ROUTES.settings}
        icon={<Settings className="h-5 w-5" />}
        label="Settings"
      />
    </FooterNavigationLayout>
  );
}
