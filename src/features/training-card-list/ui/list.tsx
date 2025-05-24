import type { Training } from "../model/types";

import { TrainingCard } from "@/entities/training";
import { cn } from "@/lib/utils";

export const TrainingCardList = ({
  className,
  trainings,
}: {
  className?: string;
  trainings: Training[] | undefined;
}) => {
  if (!trainings) return null;

  return (
    <div className={cn("flex flex-col gap-4 p-1", className)}>
      {trainings.map((training) => (
        <TrainingCard key={training.id} {...training} />
      ))}
    </div>
  );
};
