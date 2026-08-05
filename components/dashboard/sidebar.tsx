"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Home,
  BookOpen,
  Bot,
  Mic,
  BarChart3,
  Trophy,
  Settings,
  ChevronDown,
  Crown,
  Menu,
  X,
} from "lucide-react";

import { FreeCounter } from "../free-counter";

import { routes } from "@/constants";
import { useParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SubscriptionButton } from "../subscription-button";
import { useUser } from "@clerk/nextjs";


const menuItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: Home,
    active: true,
  },
  {
    title: "Lessons",
    href: "/lessons",
    icon: BookOpen,
  },
  // {
  //   title: "AI Tutor",
  //   href: "/tutor",
  //   icon: Bot,
  // },
  // {
  //   title: "Speaking",
  //   href: "/speaking",
  //   icon: Mic,
  // },
  {
    title: "Progress",
    href: "/progress",
    icon: BarChart3,
  },
  // {
  //   title: "Achievements",
  //   href: "/achievements",
  //   icon: Trophy,
  // },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];






interface ChildComponentProps {
  message: string;
}

export const ChildComponent: React.FC<ChildComponentProps> = ({ message }) => {
  return <p>{message}</p>;
};


export const Sidebar = ({
  apiLimitCount = 0,
  isPro = false,

}: {
  apiLimitCount: number;
    isPro: boolean;
 

}) => {

  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const {user}=useUser()

  return (
    <>
      {/* Mobile Toggle */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed top-5 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111827] text-white lg:hidden"
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-40
          flex h-screen w-72 flex-col
          border-r border-white/10
          bg-[#070B1A]/95
          backdrop-blur-xl
          transition-all duration-300

          ${
            open
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        {/* Logo */}
        <div className="border-b border-white/10 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-violet-500 to-fuchsia-500 text-2xl font-bold text-white shadow-lg shadow-violet-500/30">
              W
            </div>

            <div>
              <h1 className="text-2xl font-bold text-white">
                WiseLang
              </h1>

              <p className="text-sm text-gray-400">
                Learn Smarter
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
         {/* <div className="space-y-1">
          {routes.map((route:any) => (
            <Link
              key={route.href} 
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition ",
                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400",
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div> */}

        
        <nav className="flex-1 px-5 py-8">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
                const isActive = pathname === item.href;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`
                    group flex items-center gap-4 rounded-2xl
                    px-4 py-4
                    transition-all duration-300

                    ${
                      isActive
                        ? "bg-linear-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/20"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }
                  `}
                >
                  <Icon
                    size={21}
                    className="transition-transform duration-300 group-hover:scale-110"
                  />

                  <span className="font-medium">
                    {item.title}
                  </span>
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Upgrade Card */}
           
             <div className="px-5 pb-5 lg:px-6">
              
            <div className="rounded-2xl border border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-transparent p-4">
              <div className="flex items-start gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/15 text-violet-400">
                  <Crown size={19} />
                </div>

                <div>
                  <p className="text-sm font-semibold ">Go Premium</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Unlimited practice, advanced feedback and more.
                  </p>
                </div>
              </div>

              <button
                type="button"
                className="mt-4 h-10 w-full rounded-xl bg-violet-600 text-sm font-semibold transition hover:bg-violet-500"
              >
                Upgrade now
              </button>
            </div>
          </div>


        {/* User */}

          <div className="flex rounded-2xl border items-center justify-center border-violet-400/15 bg-gradient-to-br from-violet-500/10 to-transparent p-4 mb-4 ml-6 mr-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-700 text-sm font-semibold">
              {user?.firstName?.charAt(0)}
            </div>

            <div className="min-w-0 flex-1 ml-3">
              <p className="truncate text-sm font-medium"> {user?.firstName}</p>
              <p className="text-xs text-slate-500">Free plan</p>
            </div>

            <button
              type="button"
              aria-label="Settings"
              className="rounded-xl p-2 text-slate-400 transition hover:bg-white/5 hover:text-white "
            >
              <Settings size={19} />
            </button>
          </div>
      </aside>
    </>
  );
}

