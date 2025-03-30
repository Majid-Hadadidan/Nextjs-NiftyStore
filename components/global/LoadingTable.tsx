import { Skeleton } from "../ui/skeleton";

function LoadingTable({ row = 5 }: { row?: number }) {
  const tableRows = Array.from({ length: row }, (_, index) => {
    return (
      <div className="mb-4" key={index}>
        <Skeleton className="h-8 w-full rounded " />
      </div>
    );
  });

  return <>{tableRows}</>;
}

export default LoadingTable;
