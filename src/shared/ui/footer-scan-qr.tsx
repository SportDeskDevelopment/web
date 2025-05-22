import { cn } from "@/lib/utils";

export const FooterScanQr = ({
  icon,
  className,
}: {
  icon?: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn(
        "hover:text-secondary bg-primary/70 flex flex-col items-center justify-center rounded-full p-4 text-white shadow-lg transition-colors",
        className,
      )}
    >
      {icon}
    </button>
  );
};
