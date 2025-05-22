import { FooterNav } from "@/shared/components/navigation/footer-navigation";
import { PageLayout } from "@/shared/ui/page-layout";
import { Header } from "@/widgets/header";

export function TrainerOnboardingPage() {
  return (
    <PageLayout
      header={<Header />}
      content={<div>TrainerOnboardingPage</div>}
      footer={<FooterNav />}
    />
  );
}

export const Component = TrainerOnboardingPage;
