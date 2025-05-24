import { TrainerOnboardingModal } from "@/features/trainer-onboarding/modal";
import { PageLayout } from "@/shared/ui/page-layout";
import { FooterNavigation } from "@/widgets/footer-navigation";
import { Header } from "@/widgets/header";

export function SettingsPage() {
  return (
    <PageLayout
      header={<Header />}
      content={<TrainerOnboardingModal />}
      footer={<FooterNavigation />}
    />
  );
}
