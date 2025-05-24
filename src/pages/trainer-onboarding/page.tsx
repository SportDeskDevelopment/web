import { GymCreationComponent } from "@/features/trainer-onboarding/gym-creation/component";
import { Layout } from "@/shared/components/navigation/layout";
import { Button } from "@/shared/ui/button";
import { DrawerContent, DrawerTrigger } from "@/shared/ui/drawer";
import { Drawer } from "@/shared/ui/drawer";

export function TrainerOnboardingPage() {
  return (
    <Layout withoutFooter>
      <GymCreationComponent />
      {/* <Drawer>
        <DrawerTrigger asChild>
          <Button variant="outline">Continue onboarding</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="max-h-screen overflow-y-auto p-4">
            <GymCreationComponent />
          </div>
        </DrawerContent>
      </Drawer> */}
    </Layout>
  );
}
