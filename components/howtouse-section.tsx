import { ProgressCard } from "@/components/progress-card";
import { ConversationCard } from "@/components/conversation-card";
import { FeedbackCard } from "@/components/feedback-card";

export const HowtouseSection = () => {
  return (
    <main className="min-h-screen bg-[#050816] text-white flex items-center justify-center">
      <div className="pb-20 grid md:grid-cols-3 gap-6 ">
        <ProgressCard />
        <ConversationCard />
        <FeedbackCard />
      </div>

    </main>
  );
}