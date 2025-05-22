import { cn } from "@/lib/utils";

export const FooterScanQr = ({
  icon,
  className,
}: {
  href?: string;
  icon?: React.ReactNode;
  label?: string;
  className?: string;
}) => {
  return (
    <button
      // to={href}
      className={cn(
        "hover:text-secondary flex flex-col items-center justify-center rounded-full bg-orange-700 p-4 text-white shadow-lg transition-colors",
        className,
      )}
    >
      {icon}
    </button>
  );
};
