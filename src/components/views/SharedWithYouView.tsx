"use client";

import React from "react";
import { Users, Search, MoreHorizontal, FileText, Share2, Calendar } from "lucide-react";

const SHARED_DOCS = [
  { id: 1, title: "Q3 Strategy Planning", sharedBy: "Alex Chen", date: "2 days ago", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop" },
  { id: 2, title: "Brand Identity Guidelines", sharedBy: "Sarah Wilson", date: "5 days ago", thumbnail: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2670&auto=format&fit=crop" },
];

const SharedWithYouView = () => {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
          <Users className="text-[#5fc4ff]" />
          Shared with you
        </h1>
        <p className="text-[#b8c0c5] text-sm">Presentations and documents shared by your team members</p>
      </div>

      <div className="flex items-center gap-2 mb-8 bg-white/[0.04] border border-white/5 rounded-xl px-4 py-2 max-w-md">
        <Search size={18} className="text-[#8b949e]" />
        <input type="text" placeholder="Search shared items..." className="bg-transparent border-none outline-none text-sm text-white w-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SHARED_DOCS.map((doc) => (
          <div key={doc.id} className="group relative bg-[#1c2127] rounded-xl border border-white/5 overflow-hidden hover:border-[#5fc4ff]/30 transition-all duration-300">
            <div className="aspect-video overflow-hidden">
              <img src={doc.thumbnail} alt={doc.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="p-4">
              <h3 className="text-sm font-semibold text-white mb-3 group-hover:text-[#5fc4ff] transition-colors">{doc.title}</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2 text-[11px] text-[#b8c0c5]">
                  <div className="w-5 h-5 rounded-full bg-[#5fc4ff]/20 flex items-center justify-center text-[9px] font-bold text-[#5fc4ff]">
                    {doc.sharedBy.charAt(0)}
                  </div>
                  <span>Shared by <span className="text-white font-medium">{doc.sharedBy}</span></span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-[#8b949e]">
                  <Calendar size={12} />
                  <span>{doc.date}</span>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 flex gap-1">
              <button className="p-1.5 bg-black/40 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <Share2 size={14} />
              </button>
              <button className="p-1.5 bg-black/40 backdrop-blur-md rounded-lg text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <MoreHorizontal size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {SHARED_DOCS.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
            <Share2 size={32} className="text-white/20" />
          </div>
          <p className="text-[#8b949e]">No shared presentations yet</p>
        </div>
      )}
    </div>
  );
};

export default SharedWithYouView;
