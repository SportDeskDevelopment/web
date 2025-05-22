import { PageLayout } from "@/shared/ui/page-layout";
import { FooterNavigation } from "@/widgets/footer-navigation";
import { Header } from "@/widgets/header";

export function TrainerOnboardingPage() {
  return (
    <PageLayout
      header={<Header />}
      content={<div>TrainerOnboardingPage</div>}
      footer={<FooterNavigation />}
    />
  );
}

export const Component = TrainerOnboardingPage;
