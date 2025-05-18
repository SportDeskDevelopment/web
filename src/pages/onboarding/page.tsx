import { TrainerOnboardingModal } from "@/features/trainer-onboarding";
import { Layout } from "@/shared/components/navigation/layout";

function OnboardingPage() {
  return (
    <Layout withoutFooter>
      <TrainerOnboardingModal />
    </Layout>
  );
}

export const Component = OnboardingPage;
