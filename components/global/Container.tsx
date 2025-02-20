import { cn } from "@/lib/utils";

function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn(" max-w-6xl m-auto xl:max-x-7xl px-8", className)}>
      {children}
    </div>
  );
}
export default Container;
