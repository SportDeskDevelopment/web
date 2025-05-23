import { Home, QrCode, User } from "lucide-react";

import { ROUTES } from "@/kernel/routes";
import { FooterNavItem } from "@/shared/ui/footer-navigation-item";
import { FooterNavigationLayout } from "@/shared/ui/footer-navigation-layout";
import { FooterScanQr } from "@/shared/ui/footer-scan-qr";
import { getIsActivePathname } from "@/widgets/footer-navigation/domain";

export function FooterNavigation() {
  return (
    <FooterNavigationLayout>
      <FooterNavItem
        href={ROUTES.home}
        icon={<Home className="h-5 w-5" />}
        label="Home"
        getIsActive={getIsActivePathname}
      />
      {/* <FooterNavItem
        href={ROUTES.trainerOnboarding}
        icon={<User className="h-5 w-5" />}
        label="Profile"
        getIsActive={getIsActivePathname}
      /> */}
      <FooterScanQr
        icon={<QrCode className="h-5 w-5" />}
        className="absolute -top-6 left-1/2 flex -translate-x-1/2 transform"
      />
      {/* <FooterNavItem
        href={ROUTES.login}
        icon={<Settings className="h-5 w-5" />}
        label="Login"
        getIsActive={getIsActivePathname}
      /> */}
      <FooterNavItem
        href={ROUTES.settings}
        icon={<User className="h-5 w-5" />}
        label="Profile"
        getIsActive={getIsActivePathname}
      />
    </FooterNavigationLayout>
  );
}
