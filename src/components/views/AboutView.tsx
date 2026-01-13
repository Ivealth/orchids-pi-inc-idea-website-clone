"use client";

import React from "react";
import { Info, ExternalLink, Github, Twitter, Shield, FileText } from "lucide-react";

const AboutView = () => {
  return (
    <div className="p-6 md:p-10 max-w-4xl mx-auto">
      <div className="flex flex-col items-center text-center mb-12">
        <div className="w-20 h-20 bg-white/5 rounded-2xl flex items-center justify-center mb-6 border border-white/10">
          <img 
            src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/svgs/logo-1.svg" 
            alt="Pi Logo" 
            className="w-12 h-12"
          />
        </div>
        <h1 className="text-3xl font-bold text-white mb-2">Pi</h1>
        <p className="text-[#5fc4ff] font-medium mb-4">Presentation Intelligence Beta 1.2</p>
        <p className="text-[#b8c0c5] max-w-lg leading-relaxed">
          The world's first AI-native presentation platform. We're on a mission to revolutionize how ideas are structured, designed, and shared.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        <div className="p-6 bg-[#1c2127] border border-white/5 rounded-2xl">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <Shield size={18} className="text-[#5fc4ff]" />
            What's New
          </h3>
          <ul className="space-y-4 text-sm text-[#b8c0c5]">
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fc4ff] mt-1.5 shrink-0" />
              <span>Improved AI layout engine for better visual balance</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fc4ff] mt-1.5 shrink-0" />
              <span>Direct PDF-to-Presentation conversion beta</span>
            </li>
            <li className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5fc4ff] mt-1.5 shrink-0" />
              <span>New "Creative" theme category added</span>
            </li>
          </ul>
        </div>

        <div className="p-6 bg-[#1c2127] border border-white/5 rounded-2xl">
          <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
            <ExternalLink size={18} className="text-[#5fc4ff]" />
            Quick Links
          </h3>
          <div className="space-y-3">
            {[
              { label: "Official Website", icon: Info },
              { label: "Community Forum", icon: Twitter },
              { label: "Privacy Policy", icon: Shield },
              { label: "Terms of Service", icon: FileText },
            ].map((link, i) => (
              <a key={i} href="#" className="flex items-center justify-between p-3 bg-white/[0.02] hover:bg-white/5 rounded-xl text-sm text-[#b8c0c5] hover:text-white transition-all">
                <span className="flex items-center gap-3">
                  <link.icon size={16} />
                  {link.label}
                </span>
                <ExternalLink size={14} className="opacity-30" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center">
        <p className="text-[11px] text-[#8b949e]">© 2024 Pi Inc. All rights reserved.</p>
        <p className="text-[10px] text-[#8b949e] mt-1 italic">Made with ❤️ by the Pi Team</p>
      </div>
    </div>
  );
};

export default AboutView;
