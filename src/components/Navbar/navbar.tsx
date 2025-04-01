"use client";

import { Grid3X3, Menu, Settings, User } from "lucide-react";
import { useEffect, useState } from "react";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkScreenSize();

    // Add event listener for window resize
    window.addEventListener("resize", checkScreenSize);

    // Clean up
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <header className="h-16 border-b border-gray-200 flex items-center px-4 justify-between">
      <div className="flex items-center">
        <button
          onClick={toggleSidebar}
          className="p-2 mr-2 text-gray-500 hover:bg-gray-100 rounded-full"
          aria-label="Menu"
        >
          <Menu size={24} />
        </button>

        {isMobile ? (
          <span className="text-lg font-normal text-gray-700">Translate</span>
        ) : (
          <div className="flex items-center">
            <div className="flex items-center">
              <span className="text-[#4285F4] font-medium text-2xl">G</span>
              <span className="text-[#EA4335] font-medium text-2xl">o</span>
              <span className="text-[#FBBC05] font-medium text-2xl">o</span>
              <span className="text-[#4285F4] font-medium text-2xl">g</span>
              <span className="text-[#34A853] font-medium text-2xl">l</span>
              <span className="text-[#EA4335] font-medium text-2xl">e</span>
              <span className="text-gray-700 font-normal text-2xl ml-2">
                Translate
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex items-center">
        <button
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full"
          aria-label="Settings"
        >
          <Settings size={24} />
        </button>
        <button
          className="p-2 text-gray-500 hover:bg-gray-100 rounded-full ml-1"
          aria-label="Google apps"
        >
          <Grid3X3 size={24} />
        </button>
        <button
          className="p-1 ml-1 rounded-full overflow-hidden"
          aria-label="User profile"
        >
          <div className="w-8 h-8 rounded-full bg-[#c2e7ff] flex items-center justify-center">
            <User size={20} className="text-[#1a73e8]" />
          </div>
        </button>
      </div>
    </header>
  );
}
