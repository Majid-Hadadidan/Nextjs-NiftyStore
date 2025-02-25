import { CardContent, Card } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function LoadingContainer() {
  return (
    <div className="pt-12 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
      <LoadingProduct />
      <LoadingProduct />
      <LoadingProduct />
    </div>
  );
}
export default LoadingContainer;

function LoadingProduct() {
  return (
    <Card>
      <CardContent className="p-4">
        <Skeleton className="w-full h-48"></Skeleton>
        <Skeleton className="w-3/4 h-4 mt-4"></Skeleton>
        <Skeleton className="w-1/2 h-4 mt-4"></Skeleton>
      </CardContent>
    </Card>
  );
}
