"use client";

import React, { useState, useEffect } from "react";
import { Search, Menu, X, Bell, User } from "lucide-react";
import Sidebar from "@/components/sections/Sidebar";
import DesignHubView from "@/components/views/DesignHubView";
import AIAssistantView from "@/components/views/AIAssistantView";
import AIImageView from "@/components/views/AIImageView";
import PiDocsView from "@/components/views/PiDocsView";
import SharedWithYouView from "@/components/views/SharedWithYouView";
import ThemesView from "@/components/views/ThemesView";
import CustomFontsView from "@/components/views/CustomFontsView";
import SurveysView from "@/components/views/SurveysView";
import TrashView from "@/components/views/TrashView";
import SettingsView from "@/components/views/SettingsView";
import FeedbackView from "@/components/views/FeedbackView";
import AboutView from "@/components/views/AboutView";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("Pi docs");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close sidebar on mobile by default
  useEffect(() => {
    if (window.innerWidth < 1024) {
      setIsSidebarOpen(false);
    }
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Pi docs": return <PiDocsView />;
      case "Shared with you": return <SharedWithYouView />;
      case "AI Assistant": return <AIAssistantView />;
      case "AI Image": return <AIImageView />;
      case "Pi Design Hub": return <DesignHubView searchQuery={searchQuery} />;
      case "Themes": return <ThemesView />;
      case "Custom fonts": return <CustomFontsView />;
      case "Surveys": return <SurveysView />;
      case "Trash": return <TrashView />;
      case "Settings & members": return <SettingsView />;
      case "Share feedback": return <FeedbackView />;
      case "About Pi": return <AboutView />;
      default: return <PiDocsView />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white selection:bg-[#5fc4ff]/30">
      {/* Mobile Backdrop */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/80 z-[100] lg:hidden backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar Navigation */}
      <div 
        className={`fixed left-0 top-0 h-full z-[110] transition-transform duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } w-[280px] border-r border-white/5 shadow-[20px_0_50px_rgba(0,0,0,0.5)] lg:shadow-none`}
      >
        <Sidebar 
          searchQuery={searchQuery} 
          setSearchQuery={setSearchQuery} 
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>

      {/* Main Content */}
      <main className={`transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] ${isSidebarOpen ? "lg:pl-[280px]" : "pl-0"} min-h-screen flex flex-col`}>
        
        {/* Minimalist Mobile Header - Only visible when sidebar is closed on mobile */}
        <header 
          className={`sticky top-0 z-40 w-full flex items-center justify-between h-14 px-4 lg:px-8 transition-all duration-300 ${
            scrolled ? "bg-[#0d1117]/80 backdrop-blur-xl border-b border-white/5" : "bg-transparent"
          } ${isSidebarOpen ? "lg:opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div className="flex items-center gap-4">
            {!isSidebarOpen && (
              <button 
                onClick={() => setIsSidebarOpen(true)}
                className="p-2 -ml-2 rounded-full hover:bg-white/5 text-[#8b949e] hover:text-[#5fc4ff] transition-all group"
              >
                <Menu size={22} className="group-hover:scale-110 transition-transform" />
              </button>
            )}
            {!isSidebarOpen && (
              <div className="flex items-center gap-2.5 animate-in fade-in slide-in-from-left-4 duration-500">
                <div className="w-7 h-7 bg-[#5fc4ff] rounded-lg flex items-center justify-center">
                  <span className="text-[14px] text-[#0d1117] font-black">Pi</span>
                </div>
                <span className="text-sm font-bold tracking-tight text-white/90">{activeTab}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
          </div>
        </header>

        {/* Content Area */}
        <div className={`flex-1 relative ${!isSidebarOpen ? "mt-0" : "mt-0"}`}>
          <div className="max-w-[1600px] mx-auto">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
