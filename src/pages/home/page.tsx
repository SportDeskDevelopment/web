import { TrainerOnboardingModal } from "@/features/trainer-onboarding/modal";
import { CustomCarousel } from "@/shared/components/navigation/custom-carousel";
import { FooterNav } from "@/shared/components/navigation/footer-navigation";
import { TrainingCard } from "@/shared/components/navigation/training-card";
import { PageLayout } from "@/shared/ui/page-layout";
import { Header } from "@/widgets/header";

const data = [
  {
    title: "Training 1",
    date: "2021-01-01",
    gym: "Gym 1",
    group: "Group 1",
    status: "pending",
  },
  {
    title: "Training 2",
    date: "2021-01-01",
    gym: "Gym 2",
    group: "Group 2",
    status: "completed",
  },
  {
    title: "Training 3",
    date: "2021-01-01",
    gym: "Gym 3",
    group: "Group 3",
    status: "cancelled",
  },
  {
    title: "Training 4",
    date: "2021-01-01",
    gym: "Gym 4",
    group: "Group 4",
    status: "pending",
  },
  {
    title: "Training 5",
    date: "2021-01-01",
    gym: "Gym 5",
    group: "Group 5",
    status: "pending",
  },
];

function HomePage() {
  return (
    <PageLayout
      header={<Header />}
      content={
        <>
          <div className="flex flex-row justify-between">
            <h1 className="text-2xl font-bold">Trainings</h1>
            <CustomCarousel />
          </div>
          <div className="mb-4 flex flex-col justify-center gap-4 p-4">
            {data.map((item) => (
              <TrainingCard
                key={item.title}
                title={item.title}
                date={item.date}
                gym={item.gym}
                group={item.group}
                status={item.status as "pending" | "completed" | "cancelled"}
              />
            ))}
            <TrainerOnboardingModal />
          </div>
        </>
      }
      footer={<FooterNav />}
    />
  );
}

export const Component = HomePage;
