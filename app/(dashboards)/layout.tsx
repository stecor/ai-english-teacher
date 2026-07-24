import { Sidebar } from "@/components/dashboard/sidebar";
import { checkSubscription } from "@/lib/subscription";
import { getApiLimitCount } from "@/lib/api-limit";

const Dashboard = async ({
  children,
}: {
  children: React.ReactNode
}) => {
  const apiLimitCount = await getApiLimitCount();
  const isPro = await checkSubscription();

  return ( 
     <div className="min-h-screen bg-[#050816] text-white">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-gray-900">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount} />
      </div>
       {/* Main Content */}
        <main className="h-screen overflow-hidden lg:m-0 min-h-screen p-5 lg:p-4">
        {children}
      </main>
    </div>
   );
}
 
export default Dashboard;