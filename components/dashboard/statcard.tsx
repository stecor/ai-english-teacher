import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  subtitle: string;
}

export const StatCard =({
  icon: Icon,
  title,
  value,
  subtitle,
}: StatCardProps) =>{
  return (
    <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/15">
        <Icon className="h-6 w-6 text-violet-300" />
      </div>

      <h3 className="mt-6 text-3xl font-bold">{value}</h3>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}