import { TrainerOnboardingModal } from "@/features/trainer-onboarding";
import { Layout } from "@/shared/components/navigation/layout";

function OnboardingPage() {
  return (
    <Layout>
      <TrainerOnboardingModal />
    </Layout>
  );
}

export const Component = OnboardingPage;
