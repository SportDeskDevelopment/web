import { TrainerOnboardingModal } from "@/features/trainer-onboarding";
import { FooterNav } from "@/shared/components/navigation/footer-navigation";
import { PageLayout } from "@/shared/ui/page-layout";
import { Header } from "@/widgets/header";

function SettingsPage() {
  return (
    <PageLayout
      header={<Header />}
      content={<TrainerOnboardingModal />}
      footer={<FooterNav />}
    />
  );
}

export const Component = SettingsPage;
