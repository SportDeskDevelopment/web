import { GymCreationComponent } from "@/features/trainer-onboarding/gym-creation/component";
import { PageLayout } from "@/shared/ui/page-layout";
import { FooterNavigation } from "@/widgets/footer-navigation";
import { Header } from "@/widgets/header";

export function TrainerOnboardingPage() {
  return (
    <PageLayout
      header={<Header />}
      content={<GymCreationComponent />}
      footer={<FooterNavigation />}
    />
  );
}
