"use client";

import { Menu, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { SettingsSidebar } from "./settingsSidebar";

interface NavbarProps {
  toggleSidebar: () => void;
}

export default function Navbar({ toggleSidebar }: NavbarProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

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

  // Add event listener to prevent scrolling when settings sidebar is open
  useEffect(() => {
    if (isSettingsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSettingsOpen]);

  const toggleSettings = () => {
    setIsSettingsOpen(!isSettingsOpen);
  };

  return (
    <>
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
            onClick={toggleSettings}
          >
            <Settings size={24} />
          </button>
        </div>
      </header>

      {/* Settings Sidebar */}
      <SettingsSidebar
        open={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
      />

      {/* Overlay when settings sidebar is open */}
      {isSettingsOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 md:hidden"
          onClick={() => setIsSettingsOpen(false)}
        />
      )}
    </>
  );
}
