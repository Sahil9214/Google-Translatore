"use client";
import Link from "next/link";
import { useEffect } from "react";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  // Close sidebar when clicking outside
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isOpen && !target.closest('[data-sidebar="true"]')) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  // Prevent scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      {isOpen && <div className="fixed inset-0  z-40" onClick={onClose} />}

      {/* Sidebar */}
      <div
        data-sidebar="true"
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-gray-200">
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

        <nav className="py-2">
          <ul>
            <li>
              <Link
                href="/about"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200"
              >
                About Google Translate
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 border-b border-gray-200"
              >
                Privacy & Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
