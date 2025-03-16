import { Separator } from "@/components/ui/separator";
import Sidebar from "./sidebar";

function DashboardLayout({ children }: { children: React.ReactNode }) {
return <>
<h1 className="text-3xl ml-4">Dashboard</h1>
<Separator className="mt-3"/>
<section className="grid lg:grid-cols-12 gap-12 mt-12">
    <div className="lg:col-span-2">
        <Sidebar/>
    </div>
    <div className="lg:col-span-10 px-4">
        {children}
    </div>
</section>
</>

}

export default DashboardLayout;
