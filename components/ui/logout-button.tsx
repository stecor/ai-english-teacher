import { useClerk } from "@clerk/nextjs";
import { LogOut } from "lucide-react";

export const LogoutButton=()=> {
  const { signOut } = useClerk();

  return (
    <button
      type="button"
      onClick={async () => {
        await signOut();
        window.location.replace("/");
      }}
         className="
                    group flex items-center gap-4 rounded-2xl
                    px-4 py-4
                    transition-all duration-300
                      text-gray-400 hover:bg-white/5 hover:text-white hover:cursor-pointer"
    >
      <LogOut 
        size={21}
        className="transition-transform duration-300 group-hover:scale-110" 
        />
      <span className="font-medium">Sign Out</span>
    </button>
  );
}


