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
  {
    title: "AI Tutor",
    href: "/tutor",
    icon: Bot,
  },
  {
    title: "Speaking",
    href: "/speaking",
    icon: Mic,
  },
  {
    title: "Progress",
    href: "/progress",
    icon: BarChart3,
  },
  {
    title: "Achievements",
    href: "/achievements",
    icon: Trophy,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

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
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 text-2xl font-bold text-white shadow-lg shadow-violet-500/30">
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
        <nav className="flex-1 px-5 py-8">
          <div className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`
                    group flex items-center gap-4 rounded-2xl
                    px-4 py-4
                    transition-all duration-300

                    ${
                      item.active
                        ? "bg-gradient-to-r from-violet-600 to-purple-500 text-white shadow-lg shadow-violet-500/20"
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
        <div className="mx-5 mb-5 rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-600/20 to-fuchsia-500/10 p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/20">
            <Crown className="text-violet-400" size={28} />
          </div>

          <h3 className="text-lg font-semibold text-white">
            Upgrade to Pro
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Unlock unlimited AI conversations and premium lessons.
          </p>

          <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-3 font-semibold text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-violet-500/30">
            Upgrade Now
          </button>
        </div>

        {/* User */}
        <div className="border-t border-white/10 p-5">
          <button className="flex w-full items-center gap-4 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-lg font-bold text-white">
              S
            </div>

            <div className="flex-1 text-left">
              <h4 className="font-medium text-white">
                Stefano
              </h4>

              <p className="text-sm text-gray-400">
                Premium Member
              </p>
            </div>

            <ChevronDown
              size={18}
              className="text-gray-400"
            />
          </button>
        </div>
      </aside>
    </>
  );
}