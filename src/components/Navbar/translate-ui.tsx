"use client";

import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import TranslateApp from "./translator-app";
export default function TranslateUI() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <main className="flex-1 p-4">
        <TranslateApp />
      </main>
    </div>
  );
}
