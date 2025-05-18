import { cn } from "@/shared/lib/utils";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/shared/ui/carousel";
import { useState } from "react";
import { toast } from "sonner";
const roles = ["Trainer", "Parent", "Child"];

export function CustomCarousel() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);

  const handleSelectedRole = (index: number) => {
    if (index === selectedRoleIndex) return;
    toast.success(`Selected role: ${roles[index]}`);
    setSelectedRoleIndex(index);
  };

  return (
    <div className="flex flex-col gap-2">
      <Carousel
        opts={{
          align: "center",
          loop: true,
        }}
        onSelectedIndexChange={(index) => handleSelectedRole(index)}
        className="w-[150px] max-w-md overflow-hidden"
      >
        <CarouselContent>
          {roles.map((role, index) => (
            <CarouselItem
              key={index}
              className={cn(
                "min-w-0 shrink-0 grow-0 w-[100px] ",
                "h-12 flex items-center justify-center",
              )}
            >
              {role}
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
