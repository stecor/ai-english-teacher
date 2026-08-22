"use client";


import {
  Bell,
  Check,
  ChevronDown,
  Globe2,
  LockKeyhole,
  Mail,
  Moon,
  Save,
  ShieldCheck,
  Sparkles,
  Trash2,
  UserRound,
  Volume2,
} from "lucide-react";
import { useEffect, useState } from "react";
import { UserPreferences } from "./types/user-preferences";
import { useUser } from "@clerk/nextjs";


interface Profile {
  id: string;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  imageUrl: string | null;
}



type ToggleProps = {
  enabled: boolean;
  onChange: () => void;
};



  


const Toggle = ({ enabled, onChange }: ToggleProps) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={onChange}
      className={`relative h-7 w-12 rounded-full transition ${
        enabled ? "bg-purple-600" : "bg-white/10"
      }`}
    >
      <span
        className={`absolute top-1 h-5 w-5 rounded-full bg-white shadow-md transition-all ${
          enabled ? "left-6" : "left-1"
        }`}
      />
    </button>
  );
};

const SettingsPage =  () => {


  const [activeTab, setActiveTab] = useState("Profile");
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [lessonReminders, setLessonReminders] = useState(true);
  const [achievementAlerts, setAchievementAlerts] = useState(true);
  const [soundEffects, setSoundEffects] = useState(true);
  const [autoPlayAudio, setAutoPlayAudio] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const [saved, setSaved] = useState(false);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [preferences, setPreferences] = useState<UserPreferences | null>(null);
  const [loadingPreferences, setLoadingPreferences] = useState(true);
  const { user, isLoaded } = useUser();
  

  const tabs = [
    { name: "Profile", icon: UserRound },
    { name: "Learning", icon: Sparkles },
    { name: "Notifications", icon: Bell },
    { name: "Security", icon: ShieldCheck },
  ];

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };


  useEffect(() => {
    const loadProfile = async () => {
      try {
      const response = await fetch("/api/profile", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

        if (!response.ok) {
          const error = await response.json();
          console.error("Profile error:", error);
          return;
        }

        const data = await response.json();

        console.log("PROFILE:", data);

        setProfile(data);
      } catch (error) {
        console.error("Failed to Load Profile:", error);
      } finally {
        setLoadingProfile(false);
      }
    };
    loadProfile();
  }, []);

 

  useEffect(() => {
    const loadPreferences = async () => {
      try {
         const response = await fetch("/api/preferences", {
      method: "GET",

    });

        if (!response.ok) {
          const error = await response.json();
          console.error("Preferences error:", error);
          return;
        }

        const data = await response.json();

        console.log("PREFERENCES:", data);

        setPreferences(data);
      } catch (error) {
        console.error("Failed to load preferences:", error);
      } finally {
        setLoadingPreferences(false);
      }
    };

    loadPreferences();
  }, []);

  // ✅ Conditional returns AFTER hooks

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <div>User not found</div>;
  }

  if (loadingPreferences && loadingProfile) {
    return <div>Loading...</div>;
  }

  const savePreferences = async () => {
  if (!preferences) return;

  try {
    const response = await fetch("/api/preferences", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(preferences),
    });

    const data = await response.json();

    console.log("SAVE STATUS:", response.status);
    console.log("SAVE DATA:", data);

    if (!response.ok) {
      throw new Error(data.message || data.error);
    }

    setPreferences(data);
  } catch (error) {
    console.error("Failed to save preferences:", error);
  }
};

  

  return (
     <main className="lg:ml-72 min-h-screen p-5 lg:p-8">
    {/* <main className="min-h-screen bg-[#080b14] px-4 py-6 text-white sm:px-6 lg:px-8"> */}
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
          

            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Settings
            </h1><br />

              <p className="mt-2 text-2xl font-medium text-purple-400">
              Account preferences
            </p>

            <p className="mt-2 text-sm text-slate-400">
              Manage your profile, lessons, notifications, and privacy.
            </p>
          </div>

          <button
            onClick={handleSave}
            className="flex h-11 items-center justify-center gap-2 rounded-xl bg-purple-600 px-5 text-sm font-semibold transition hover:bg-purple-500 active:scale-[0.98]"
          >
            {saved ? (
              <>
                <Check size={18} />
                Saved
              </>
            ) : (
              <>
                <Save size={18} />
                Save changes
              </>
            )}
          </button>
        </div>

        <div className="grid lg:grid-cols-[1fr_auto] gap-6">
          

          {/* Main Settings Content */}
          <section className="space-y-6 ">
            {activeTab === "Profile" && (
              <>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      Profile information
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Update your personal information and profile photo.
                    </p>
                  </div>

                  <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-purple-500 to-fuchsia-600 text-2xl font-bold shadow-lg shadow-purple-950/40">
                      <img src={profile?.imageUrl ?? ""} alt="" />
                    </div>

                    <div>
                      <h3 className="font-semibold">Profile photo</h3>

                      <p className="mt-1 text-sm text-slate-400">
                        PNG, JPG, or WEBP. Maximum size of 5MB.
                      </p>

                      <div className="mt-3 flex flex-wrap gap-3">
                        <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium transition hover:bg-white/15">
                          Upload photo
                        </button>

                        <button className="rounded-xl px-4 py-2 text-sm font-medium text-slate-400 transition hover:bg-white/5 hover:text-white">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-300">
                        First name
                      </span>
                         <input
                         id="firstname"
                              readOnly
                               value={profile?.firstName ?? "John"}
                              className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1220] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                            />
                          
                     
                    </label>

                    <label className="space-y-2">
                      <span className="text-sm font-medium text-slate-300">
                        Last name
                      </span>

                      <input
                      id="lastname"
                        type="text"
                         readOnly
                           value={profile?.lastName ?? "Dohe"}
                        className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1220] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                      />
                    </label>

                    <label className="space-y-2 md:col-span-2">
                      <span className="text-sm font-medium text-slate-300">
                        Email address
                      </span>

                      <div className="relative">
                        <Mail
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                        id="email"
                          type="email"
                          readOnly
                           value={profile?.email ?? "john.dohe@example.com"}
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1220] pl-11 pr-4 text-sm text-white outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                        />
                      </div>
                    </label>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      Language preferences
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Choose the languages used throughout WiseLang.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                   <SelectField
                      id="Nativelanguage"
                      label="Native language"
                      icon={<Globe2 size={18} />}
                      value={preferences?.nativeLanguage ?? "Portuguese"}
                      options={["English", "Italian", "Spanish", "French","Portuguese"]}
                       onChange={(value: any) => void
                      setPreferences((prev) =>
                        prev
                          ? { ...prev, nativeLanguage: value }
                          : prev
                      )
                    }
                    />

                     <SelectField
                     id="Learninglanguage"
                      label="Learning language"
                      icon={<Globe2 size={18} />}
                      value={preferences?.learningLanguage ?? "English"}
                      options={["English", "Italian", "Spanish", "French","Portuguese"]}
                       onChange={(value: any) => void
                      setPreferences((prev) =>
                        prev
                          ? { ...prev, learningLanguage: value }
                          : prev
                      )
                    }
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === "Learning" && (
              <>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      Learning preferences
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Personalize your lessons and daily learning experience.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">

                    <SelectField
                    id="CurrentLevel"
                      label="Current Level"
                      icon={<Globe2 size={18} />}
                      value={preferences?.currentLevel ?? "Beginner"}
                        options={[
                        "Beginner",
                        "Elementary",
                        "Intermediate",
                        "Upper intermediate",
                        "Advanced",
                      ]}
                       onChange={(value: any) => void
                      setPreferences((prev) =>
                        prev
                          ? { ...prev, currentLevel: value }
                          : prev
                      )
                    }
                    />

                 <SelectField
                    id="Dailygoal"
                      label="Daily goal"
                      icon={<Globe2 size={18} />}
                      value={preferences?.learningGoal ?? "20 minutes"}
                      options={[
                        "5 minutes",
                        "10 minutes",
                        "15 minutes",
                        "20 minutes",
                        "30 minutes",
                        "45 minutes",
                      ]}
                       onChange={(value: any) => void
                      setPreferences((prev) =>
                        prev
                          ? { ...prev, currentLevel: value }
                          : prev
                      )
                    }
                    />

                    <SelectField
                    id="Lessondifficulty"
                      label="Lesson difficulty"
                      icon={<Globe2 size={18} />}
                      value={preferences?.lessonDifficulty ?? "Adaptive"}
                      options={["Easy", "Balanced", "Adaptive", "Challenging"]}
                       onChange={(value: any) => void
                      setPreferences((prev) =>
                        prev
                          ? { ...prev, currentLevel: value }
                          : prev
                      )
                    }
                    />

                    <SelectField
                    id="Primaryfocus"
                      label="Primary focus"
                      icon={<Globe2 size={18} />}
                      value={preferences?.lessonType ?? "Conversation"}
                      options={[
                        "Conversation",
                        "Vocabulary",
                        "Grammar",
                        "Pronunciation",
                        "Listening",
                      ]}
                       onChange={(value: any) => void
                      setPreferences((prev) =>
                        prev
                          ? { ...prev, currentLevel: value }
                          : prev
                      )
                    }
                    />

                    
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <h2 className="text-xl font-semibold">Lesson experience</h2>

                  <div className="mt-6 divide-y divide-white/10">
                    <SettingRow
                      icon={<Volume2 size={20} />}
                      title="Sound effects"
                      description="Play sounds when answers are correct or incorrect."
                      enabled={soundEffects}
                      onChange={() => setSoundEffects(!soundEffects)}
                    />

                    <SettingRow
                      icon={<Volume2 size={20} />}
                      title="Auto-play pronunciation"
                      description="Automatically play audio for new phrases."
                      enabled={autoPlayAudio}
                      onChange={() => setAutoPlayAudio(!autoPlayAudio)}
                    />

                    <SettingRow
                      icon={<Moon size={20} />}
                      title="Dark appearance"
                      description="Use the dark WiseLang interface."
                      enabled={darkMode}
                      onChange={() => setDarkMode(!darkMode)}
                    />
                  </div>
                </div>
              </>
            )}

            {activeTab === "Notifications" && (
              <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                <div className="mb-2">
                  <h2 className="text-xl font-semibold">
                    Notification preferences
                  </h2>

                  <p className="mt-1 text-sm text-slate-400">
                    Decide how WiseLang communicates with you.
                  </p>
                </div>

                <div className="mt-6 divide-y divide-white/10">
                  <SettingRow
                    icon={<Mail size={20} />}
                    title="Email notifications"
                    description="Receive product updates and account information."
                    enabled={emailNotifications}
                    onChange={() =>
                      setEmailNotifications(!emailNotifications)
                    }
                  />

                  <SettingRow
                    icon={<Bell size={20} />}
                    title="Lesson reminders"
                    description="Get reminded when it is time to complete your daily lesson."
                    enabled={lessonReminders}
                    onChange={() => setLessonReminders(!lessonReminders)}
                  />

                  <SettingRow
                    icon={<Sparkles size={20} />}
                    title="Achievement alerts"
                    description="Celebrate streaks, milestones, and new achievements."
                    enabled={achievementAlerts}
                    onChange={() =>
                      setAchievementAlerts(!achievementAlerts)
                    }
                  />
                </div>

                <div className="mt-7 rounded-2xl border border-purple-500/20 bg-purple-500/10 p-5">
                  <div className="flex gap-3">
                    <Bell
                      size={20}
                      className="mt-0.5 shrink-0 text-purple-400"
                    />

                    <div>
                      <h3 className="font-medium">Reminder schedule</h3>

                      <p className="mt-1 text-sm leading-6 text-slate-400">
                        Your daily lesson reminder is currently scheduled for
                        7:00 PM.
                      </p>

                      <button className="mt-3 text-sm font-semibold text-purple-400 transition hover:text-purple-300">
                        Change reminder time
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Security" && (
              <>
                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold">
                      Password and security
                    </h2>

                    <p className="mt-1 text-sm text-slate-400">
                      Keep your WiseLang account protected.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <label className="block space-y-2">
                      <span className="text-sm font-medium text-slate-300">
                        Current password
                      </span>

                      <div className="relative">
                        <LockKeyhole
                          size={18}
                          className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                        />

                        <input
                          type="password"
                          placeholder="Enter current password"
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1220] pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                        />
                      </div>
                    </label>

                    <div className="grid gap-5 md:grid-cols-2">
                      <label className="space-y-2">
                        <span className="text-sm font-medium text-slate-300">
                          New password
                        </span>

                        <input
                          type="password"
                          placeholder="Enter new password"
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1220] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                        />
                      </label>

                      <label className="space-y-2">
                        <span className="text-sm font-medium text-slate-300">
                          Confirm password
                        </span>

                        <input
                          type="password"
                          placeholder="Confirm new password"
                          className="h-12 w-full rounded-xl border border-white/10 bg-[#0d1220] px-4 text-sm text-white outline-none transition placeholder:text-slate-600 focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10"
                        />
                      </label>
                    </div>

                    <button className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold transition hover:bg-white/15">
                      Update password
                    </button>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 sm:p-7">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                        <ShieldCheck size={22} />
                      </div>

                      <div>
                        <h3 className="font-semibold">
                          Two-factor authentication
                        </h3>

                        <p className="mt-1 text-sm text-slate-400">
                          Add an extra layer of security to your account.
                        </p>
                      </div>
                    </div>

                    <button className="rounded-xl border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10">
                      Enable
                    </button>
                  </div>
                </div>

                <div className="rounded-3xl border border-red-500/20 bg-red-500/6 p-5 sm:p-7">
                  <h2 className="text-xl font-semibold text-red-300">
                    Danger zone
                  </h2>

                  <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-400">
                    Deleting your account permanently removes your profile,
                    lesson history, progress, and achievements.
                  </p>

                  <button className="mt-5 flex items-center gap-2 rounded-xl bg-red-500/10 px-5 py-3 text-sm font-semibold text-red-400 transition hover:bg-red-500/20">
                    <Trash2 size={17} />
                    Delete account
                  </button>
                </div>
              </>
            )}
          </section>
          {/* Settings Navigation */}
          <aside className="h-fit rounded-3xl border border-white/10 bg-white/[0.035] p-3 ">
            <nav className="space-y-1">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.name;

                return (
                  <button
                    key={tab.name}
                    onClick={() => setActiveTab(tab.name)}
                    className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition ${
                      active
                        ? "bg-purple-600 text-white shadow-lg shadow-purple-950/30"
                        : "text-slate-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon size={19} />
                    {tab.name}
                  </button>
                );
              })}
            </nav>

            <div className="mt-4 border-t border-white/10 pt-4">
              <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium text-red-400 transition hover:bg-red-500/10">
                <Trash2 size={19} />
                Delete account
              </button>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

type SelectFieldProps = {
  label: string;
  options: string[];
  icon?: React.ReactNode;
  value: string;
  onChange: (value: string) => void;
  id: string;
};

const SelectField = ({
  label,
  options,
  icon,
  value,
  onChange,
  id,
}: SelectFieldProps) => {
  return (
    <label className="space-y-2">
      <span className="text-sm font-medium text-slate-300">{label}</span>

      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            {icon}
          </span>
        )}

        <select
          className={`h-12 w-full appearance-none rounded-xl border border-white/10 bg-[#0d1220] pr-11 text-sm text-white outline-none transition focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 ${
            icon ? "pl-11" : "pl-4"
          }`}
        >
          {options.map((option) => (
            <option key={option} value={option} className="bg-[#0d1220]">
              {option}
            </option>
          ))}
        </select>

        <ChevronDown
          size={17}
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-slate-500"
        />
      </div>
    </label>
  );
};

type SettingRowProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
};

const SettingRow = ({
  icon,
  title,
  description,
  enabled,
  onChange,
}: SettingRowProps) => {
  return (
    <div className="flex items-center justify-between gap-5 py-5 first:pt-2 last:pb-2">
      <div className="flex min-w-0 gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
          {icon}
        </div>

        <div>
          <h3 className="font-medium text-white">{title}</h3>

          <p className="mt-1 text-sm leading-6 text-slate-400">
            {description}
          </p>
        </div>
      </div>

      <Toggle enabled={enabled} onChange={onChange} />
    </div>
  );
};

export default SettingsPage;




// import {  Settings } from "lucide-react";
// import { Heading } from "@/components/heading";
// import { SubscriptionButton } from "@/components/subscription-button";
// import { checkSubscription } from "@/lib/subscription";




// const SettingsPage = async () => {
//   const isPro = await checkSubscription();
 
  


//   return ( 
//     <div>
//         <main className="lg:ml-72 min-h-screen p-5 lg:p-8">
//       <Heading
//         title="Settings"
//         description="Manage account settings."
//         icon={Settings}
//         iconColor="text-gray-700"
//         bgColor="bg-gray-700/10"
//       />
//       <div className="px-4 lg:px-8 space-y-4">
//         <div className="text-muted-foreground text-sm">
//           {isPro ? "You are currently on a Pro plan." : "You are currently on a free plan."}
//         </div>
     
//         <SubscriptionButton isPro={isPro} />
//         <br /><br />
//         <a rel="stylesheet" className="text-white" href='../privacy' >Privacy Policy</a>
        
//       </div>
//    </main>
     
//     </div>
//    );
// }
 
// export default SettingsPage;
