"use client";

import React, { useState } from "react";
import Image from "next/image";
import { 
  Search, 
  ChevronDown, 
  ChevronRight, 
  FileText, 
  Users, 
  Bot, 
  ImageIcon, 
  Box, 
  Palette, 
  Type, 
  SquareArrowOutUpRight, 
  Trash2, 
  Settings, 
  MessageSquare, 
  Info,
  Plus,
  PanelLeftClose,
  LogOut,
  User,
  CreditCard,
  ExternalLink,
  Crown,
  Sparkles,
  Menu
} from "lucide-react";

interface SidebarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar = ({ searchQuery, setSearchQuery, isOpen, setIsOpen, activeTab, setActiveTab }: SidebarProps) => {
  const [isFolderExpanded, setIsFolderExpanded] = useState(true);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const [folders, setFolders] = useState([
    { id: 1, name: "Product Launch" },
    { id: 2, name: "Q4 Strategy" },
  ]);

  const addFolder = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newFolder = {
      id: Date.now(),
      name: `New Folder ${folders.length + 1}`
    };
    setFolders([...folders, newFolder]);
  };

  return (
    <aside className="h-full w-full bg-[#0d1117] flex flex-col overflow-hidden relative selection:bg-[#5fc4ff]/30">
      {/* Sidebar Content Wrapper */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden pt-6 px-4 custom-scrollbar relative z-10">
        
        {/* Brand & Toggle */}
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => setActiveTab("Pi docs")}>
            <div className="w-9 h-9 bg-[#5fc4ff] rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(95,196,255,0.2)] group-hover:scale-110 transition-transform">
              <span className="text-[18px] text-[#0d1117] font-black tracking-tighter">Pi</span>
            </div>
            <div className="flex flex-col">
              <span className="text-[15px] font-bold text-white leading-none mb-0.5">Presentation</span>
              <span className="text-[10px] text-[#5fc4ff] font-bold tracking-[0.2em] uppercase leading-none opacity-80">Intelligence</span>
            </div>
          </div>
          
          <button 
            onClick={() => setIsOpen(false)}
            className="p-2 rounded-xl hover:bg-white/5 text-[#484f58] hover:text-white transition-all"
            aria-label="Close sidebar"
          >
            <PanelLeftClose size={18} />
          </button>
        </div>

        {/* Workspace Switcher */}
        <div className="relative mb-6">
          <button 
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className={`w-full flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.06] hover:border-white/10 transition-all group ${isUserMenuOpen ? 'bg-white/[0.08] border-white/20' : ''}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#1c2127] to-[#0d1117] flex items-center justify-center border border-white/10 shrink-0">
                <User size={14} className="text-[#8b949e]" />
              </div>
              <div className="flex flex-col items-start text-left">
                <span className="text-[13px] font-bold text-white/90 group-hover:text-white transition-colors">Workspace</span>
                <span className="text-[10px] text-[#8b949e] group-hover:text-[#5fc4ff] transition-colors uppercase tracking-widest font-bold">Personal</span>
              </div>
            </div>
            <ChevronDown className={`w-3.5 h-3.5 text-[#484f58] transition-transform duration-300 ${isUserMenuOpen ? 'rotate-180' : ''}`} />
          </button>

          {isUserMenuOpen && (
            <div className="absolute left-0 right-0 top-[calc(100%+8px)] bg-[#161b22] border border-white/10 rounded-xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-[100] py-1.5 px-1 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-3 py-2 border-b border-white/5 mb-1 flex items-center justify-between">
                <span className="text-[10px] text-[#484f58] font-bold uppercase tracking-widest">Account</span>
                <div className="px-1.5 py-0.5 bg-[#5fc4ff]/10 rounded text-[9px] text-[#5fc4ff] font-black uppercase tracking-tighter">VIP</div>
              </div>
              {[
                { icon: <User size={14} />, label: "Profile Settings" },
                { icon: <CreditCard size={14} />, label: "Billing & Subscription" },
                { icon: <ExternalLink size={14} />, label: "Product Roadmap" },
              ].map((item, i) => (
                <button key={i} className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-[#8b949e] hover:bg-white/5 hover:text-white transition-all rounded-lg group">
                  <span className="group-hover:text-[#5fc4ff] transition-colors">{item.icon}</span>
                  <span>{item.label}</span>
                </button>
              ))}
              <div className="h-px bg-white/5 my-1.5 mx-2" />
              <button className="w-full flex items-center gap-3 px-3 py-2 text-[12px] text-red-400/80 hover:bg-red-400/10 transition-all rounded-lg font-bold">
                <LogOut size={14} />
                <span>Log out</span>
              </button>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="mb-6 relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#484f58] group-focus-within:text-[#5fc4ff] transition-colors" />
          <input 
            type="text" 
            placeholder="Quick search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/[0.02] border border-white/5 hover:border-white/10 focus:border-[#5fc4ff]/20 rounded-xl py-2 pl-9 pr-4 text-[13px] text-white placeholder:text-[#484f58] transition-all outline-none"
          />
        </div>

        {/* Navigation */}
        <div className="space-y-6">
          <section>
            <div className="px-1 mb-2">
              <span className="text-[10px] font-black text-[#484f58] uppercase tracking-[0.2em]">Dashboard</span>
            </div>
            <div className="space-y-0.5">
              <NavItem icon={<FileText size={18} />} label="Pi docs" active={activeTab === "Pi docs"} onClick={() => setActiveTab("Pi docs")} />
              <NavItem icon={<Users size={18} />} label="Shared with you" active={activeTab === "Shared with you"} onClick={() => setActiveTab("Shared with you")} />
              <NavItem icon={<Bot size={18} />} label="AI Assistant" active={activeTab === "AI Assistant"} onClick={() => setActiveTab("AI Assistant")} badge="BETA" />
              <NavItem icon={<ImageIcon size={18} />} label="AI Image" active={activeTab === "AI Image"} onClick={() => setActiveTab("AI Image")} />
            </div>
          </section>

          <section>
            <div className="px-1 mb-2">
              <span className="text-[10px] font-black text-[#484f58] uppercase tracking-[0.2em]">Creative Hub</span>
            </div>
            <div className="space-y-0.5">
              <NavItem icon={<Box size={18} />} label="Pi Design Hub" active={activeTab === "Pi Design Hub"} onClick={() => setActiveTab("Pi Design Hub")} />
              <NavItem icon={<Palette size={18} />} label="Themes" active={activeTab === "Themes"} onClick={() => setActiveTab("Themes")} />
              <NavItem icon={<Type size={18} />} label="Custom fonts" active={activeTab === "Custom fonts"} onClick={() => setActiveTab("Custom fonts")} />
              <NavItem icon={<SquareArrowOutUpRight size={18} />} label="Surveys" active={activeTab === "Surveys"} onClick={() => setActiveTab("Surveys")} />
            </div>
          </section>

          <section>
            <div className="px-1 mb-2 flex items-center justify-between group cursor-pointer" onClick={() => setIsFolderExpanded(!isFolderExpanded)}>
              <div className="flex items-center gap-2">
                <ChevronRight size={12} className={`text-[#484f58] transition-transform duration-300 ${isFolderExpanded ? 'rotate-90' : ''}`} />
                <span className="text-[10px] font-black text-[#484f58] uppercase tracking-[0.2em] group-hover:text-[#8b949e]">Folders</span>
              </div>
              <button onClick={addFolder} className="p-1 rounded hover:bg-white/5 text-[#484f58] hover:text-[#5fc4ff] transition-colors">
                <Plus size={12} />
              </button>
            </div>
            {isFolderExpanded && (
              <div className="mt-1 space-y-0.5 ml-3.5 border-l border-white/5">
                {folders.map(folder => (
                  <button 
                    key={folder.id}
                    onClick={() => setActiveTab(folder.name)}
                    className={`w-full flex items-center gap-3 px-4 py-2 text-[13px] transition-all text-left relative group ${
                      activeTab === folder.name 
                      ? 'text-[#5fc4ff] font-bold' 
                      : 'text-[#8b949e] hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <div className={`w-1.5 h-1.5 rounded-full transition-all ${activeTab === folder.name ? 'bg-[#5fc4ff] scale-110 shadow-[0_0_8px_rgba(95,196,255,0.4)]' : 'bg-[#30363d] group-hover:bg-[#484f58]'}`} />
                    <span className="truncate">{folder.name}</span>
                  </button>
                ))}
              </div>
            )}
          </section>

          <section className="pt-4 border-t border-white/5 pb-8">
            <div className="space-y-0.5">
              <NavItem icon={<Trash2 size={18} />} label="Trash" active={activeTab === "Trash"} onClick={() => setActiveTab("Trash")} />
              <NavItem icon={<Settings size={18} />} label="Settings & members" active={activeTab === "Settings & members"} onClick={() => setActiveTab("Settings & members")} />
              <NavItem icon={<MessageSquare size={18} />} label="Share feedback" active={activeTab === "Share feedback"} onClick={() => setActiveTab("Share feedback")} />
              <NavItem icon={<Info size={18} />} label="About Pi" active={activeTab === "About Pi"} onClick={() => setActiveTab("About Pi")} />
            </div>
          </section>
        </div>
      </div>

      {/* VIP Access Card */}
      <div className="p-4 bg-gradient-to-t from-[#0d1117] via-[#0d1117] to-transparent relative z-20">
        <div className="group relative bg-[#1c2127] border border-white/10 rounded-2xl p-4 cursor-pointer hover:border-[#5fc4ff]/40 transition-all overflow-hidden shadow-xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#5fc4ff]/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-[#0d1117] border border-white/10 rounded-xl flex items-center justify-center relative">
              <Crown size={18} className="text-[#5fc4ff]" />
              <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#5fc4ff] rounded-full animate-pulse shadow-[0_0_8px_rgba(95,196,255,0.8)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-[12px] font-black text-white tracking-tight uppercase">VIP Early Access</span>
              <span className="text-[9px] text-[#8b949e] font-bold uppercase tracking-widest">Lifetime Edition</span>
            </div>
          </div>
          
          <button className="w-full py-2 bg-[#5fc4ff] hover:bg-[#4ab0ee] rounded-xl text-[11px] font-black text-[#0d1117] uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(95,196,255,0.2)]">
            Join Waitlist
          </button>
        </div>
      </div>
    </aside>
  );
};

interface NavItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick?: () => void;
  badge?: string;
}

const NavItem = ({ icon, label, active = false, onClick, badge }: NavItemProps) => {
  return (
    <button 
      onClick={onClick}
      className={`
        w-full flex items-center justify-between px-3 py-2.5 text-[13.5px] cursor-pointer rounded-xl transition-all duration-300 group
        ${active 
          ? "bg-[#5fc4ff]/10 text-[#5fc4ff] font-bold" 
          : "text-[#8b949e] hover:bg-white/[0.04] hover:text-white"
        }
      `}
    >
      <div className="flex items-center gap-3.5">
        <span className={`shrink-0 transition-all duration-300 ${active ? 'text-[#5fc4ff] scale-105' : 'group-hover:text-[#5fc4ff]'}`}>{icon}</span>
        <span className="truncate tracking-tight">{label}</span>
      </div>
      {badge && (
        <span className="text-[8px] font-black px-1.5 py-0.5 rounded-md bg-[#30363d] text-[#8b949e] tracking-widest leading-none">
          {badge}
        </span>
      )}
    </button>
  );
};

export default Sidebar;
