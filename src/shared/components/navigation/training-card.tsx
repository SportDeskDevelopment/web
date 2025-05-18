import { Separator } from "@/shared/ui/separator";
import { Check, Circle, X } from "lucide-react";

type TrainingCardProps = {
  title: string;
  date: string;
  gym: string;
  group: string;
  status: "pending" | "completed" | "cancelled";
};

export const TrainingCard = ({
  title,
  date,
  gym,
  group,
  status,
}: TrainingCardProps) => {
  return (
    <div className="border-2 border-primary rounded-lg p-4">
      <div className="flex justify-between items-center">
        <div className="space-y-1">
          <h4 className="text-sm font-medium leading-none">{title}</h4>
          <p className="text-sm text-muted-foreground"> {date}</p>
        </div>
        <div>
          {status === "pending" && (
            <Circle className="w-4 h-4 text-yellow-500" />
          )}
          {status === "completed" && (
            <Check className="w-4 h-4 text-green-500" />
          )}
          {status === "cancelled" && <X className="w-4 h-4 text-red-500" />}
        </div>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div className="bg-primary text-white px-2 py-1 rounded-md">{gym}</div>
        <Separator orientation="vertical" />
        <div>{group}</div>
        <Separator orientation="vertical" />
        <div>hehe</div>
      </div>
    </div>
  );
};
