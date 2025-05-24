import { Group, School, User } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router";

import { ScrollableTrainingCardList } from "@/features/scrollable-training-card-list";
import { Card } from "@/shared/ui/card";
import { PageLayout } from "@/shared/ui/page-layout";
import { Separator } from "@/shared/ui/separator";
import { FooterNavigation } from "@/widgets/footer-navigation";
import { Header } from "@/widgets/header";

const groupedTrainings = [
  {
    id: "1",
    title: "Training 1",
    date: "2021-01-01",
  },
];

function CoachRoomPage() {
  const { t } = useTranslation("coach-room");

  return (
    <PageLayout
      header={<Header />}
      content={
        <>
          <h4 className="mb-1 text-2xl font-medium">{t("title")}</h4>
          <ScrollableTrainingCardList
            className="max-h-[42vh] overflow-y-auto"
            trainings={[
              {
                id: "1",
                title: "Training 1",
                date: "2021-01-01",
                status: "completed",
                gym: "Gym 1",
                group: "Group 1",
              },
              {
                id: "2",
                title: "Training 2",
                date: "2021-01-02",
                status: "cancelled",
                gym: "Gym 2",
                group: "Group 2",
              },
            ]}
          />
          <Separator />
          <div className="mt-4 flex gap-4">
            {[
              {
                Icon: Group,
                title: "Groups",
                href: "/groups",
              },
              {
                Icon: User,
                title: "Users",
                href: "/users",
              },
              {
                Icon: School,
                title: "Gyms",
                href: "/gyms",
              },
            ].map((item) => (
              <Link
                key={item.title}
                to={item.href}
                viewTransition
                className="w-full"
              >
                <Card className="flex w-full flex-col items-center justify-center gap-2 p-2">
                  <item.Icon className="h-4 w-4" />
                  <h4 className="text-center text-sm font-medium">
                    {item.title}
                  </h4>
                </Card>
              </Link>
            ))}
          </div>
        </>
      }
      footer={<FooterNavigation />}
    />
  );
}

export const Component = CoachRoomPage;
