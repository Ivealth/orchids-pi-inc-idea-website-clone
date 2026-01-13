"use client";

import React, { useState } from "react";
import { 
  User, 
  Settings as SettingsIcon, 
  Users, 
  CreditCard, 
  Bell, 
  Shield, 
  Globe, 
  Zap,
  Check,
  ChevronRight,
  LogOut
} from "lucide-react";

const TABS = [
  { id: "account", label: "Account", icon: User },
  { id: "workspace", label: "Workspace", icon: Globe },
  { id: "members", label: "Members", icon: Users },
  { id: "billing", label: "Billing", icon: CreditCard },
  { id: "notifications", label: "Notifications", icon: Bell },
];

const SettingsView = () => {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1">Settings</h1>
        <p className="text-[#b8c0c5] text-sm">Manage your personal account and workspace preferences</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Settings Sidebar */}
        <div className="w-full md:w-64 shrink-0 space-y-1">
          {TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm transition-all ${
                  activeTab === tab.id 
                  ? "bg-[#5fc4ff] text-[#161a1f] font-bold shadow-[0_4px_15px_rgba(95,196,255,0.2)]" 
                  : "text-[#b8c0c5] hover:bg-white/5 hover:text-white"
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
          <div className="pt-4 mt-4 border-t border-white/5">
            <button className="w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-red-400 hover:bg-red-400/10 transition-all">
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </div>

        {/* Settings Content */}
        <div className="flex-1 bg-[#1c2127] border border-white/5 rounded-2xl overflow-hidden">
          <div className="p-6 md:p-8">
            {activeTab === "account" && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <section>
                  <h3 className="text-lg font-semibold text-white mb-4">Profile Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/[0.02] rounded-xl border border-white/5">
                      <div className="w-16 h-16 rounded-full bg-[#2c353f] flex items-center justify-center text-2xl font-bold border border-white/10 shrink-0">
                        U
                      </div>
                      <div className="flex-1">
                        <p className="text-white font-medium">Unnamed User</p>
                        <p className="text-sm text-[#8b949e]">user@example.com</p>
                      </div>
                      <button className="px-4 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm transition-colors">
                        Change
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider">Full Name</label>
                        <input type="text" defaultValue="Unnamed" className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#5fc4ff]/30 outline-none" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider">Email Address</label>
                        <input type="email" defaultValue="user@example.com" className="w-full bg-white/[0.04] border border-white/10 rounded-lg px-4 py-2 text-white focus:border-[#5fc4ff]/30 outline-none" />
                      </div>
                    </div>
                  </div>
                </section>

                <section className="pt-8 border-t border-white/5">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white">Password</h3>
                      <p className="text-sm text-[#8b949e]">Last changed 3 months ago</p>
                    </div>
                    <button className="px-4 py-2 bg-[#5fc4ff]/10 text-[#5fc4ff] hover:bg-[#5fc4ff]/20 rounded-lg text-sm font-medium transition-colors">
                      Update Password
                    </button>
                  </div>
                </section>

                <section className="pt-8 border-t border-white/5">
                  <h3 className="text-lg font-semibold text-red-400 mb-4">Danger Zone</h3>
                  <div className="p-4 bg-red-400/5 border border-red-400/20 rounded-xl">
                    <p className="text-sm text-[#b8c0c5] mb-4">Permanently delete your account and all associated data. This action cannot be undone.</p>
                    <button className="px-4 py-2 bg-red-400/10 text-red-400 hover:bg-red-400/20 rounded-lg text-sm font-medium transition-colors border border-red-400/20">
                      Delete Account
                    </button>
                  </div>
                </section>
              </div>
            )}

            {activeTab === "billing" && (
              <div className="space-y-8 animate-in fade-in slide-in-from-right-4 duration-300">
                <section>
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold text-white">Current Plan</h3>
                    <div className="px-3 py-1 rounded-full bg-[#5fc4ff]/20 text-[#5fc4ff] text-xs font-bold uppercase tracking-wider">
                      Pro Plan
                    </div>
                  </div>
                  
                  <div className="p-6 bg-gradient-to-br from-[#1d252f] to-[#161a1f] border border-[#5fc4ff]/20 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                      <Zap size={80} className="text-[#5fc4ff]" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="text-2xl font-bold text-white mb-2">$19<span className="text-sm font-normal text-[#8b949e]">/month</span></h4>
                      <p className="text-[#b8c0c5] text-sm mb-6">Your next billing date is Oct 12, 2024</p>
                      <ul className="space-y-3 mb-8">
                        {["Unlimited Presentations", "AI Image Generation (Unlimited)", "Custom Branding & Fonts", "Team Collaboration"].map((feature, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-[#b8c0c5]">
                            <Check size={16} className="text-[#5fc4ff]" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <button className="w-full py-3 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-xl hover:bg-[#4ab0ee] transition-all">
                        Manage Subscription
                      </button>
                    </div>
                  </div>
                </section>
              </div>
            )}

            {activeTab !== "account" && activeTab !== "billing" && (
              <div className="flex flex-col items-center justify-center py-20 text-center animate-in fade-in duration-500">
                <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
                  <SettingsIcon size={32} className="text-white/20" />
                </div>
                <h3 className="text-white font-medium mb-2">{TABS.find(t => t.id === activeTab)?.label} Settings</h3>
                <p className="text-sm text-[#8b949e] max-w-xs">This section is currently being updated to match the latest Pi interface.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsView;
