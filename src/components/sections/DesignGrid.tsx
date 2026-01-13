"use client";

import React, { useState } from 'react';
import { Ellipsis, Trash2, Edit2, Share2, Copy } from 'lucide-react';

interface DesignCardProps {
  image: string;
  title: string;
  timestamp: string;
  avatar: string;
  scenario: string;
}

const DesignCard = ({ image, title, timestamp, avatar }: DesignCardProps) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full group">
      <div className="relative cursor-pointer overflow-hidden rounded-lg bg-[#1c2127] border border-white/[0.03] transition-all duration-500 hover:border-white/10 hover:shadow-[0_8px_30px_rgb(0,0,0,0.5)] hover:-translate-y-1">
        {/* Card Cover */}
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Top Shadow on Hover */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
          
          {/* Mobile Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent lg:hidden"></div>
        </div>

        {/* Card Body */}
        <div className="relative flex flex-col p-3 md:p-4 bg-[#1c2127]">
          <div className="flex items-start justify-between gap-2">
            <div className="flex-1 min-w-0">
              <h3 className="truncate text-[13px] md:text-sm font-semibold text-white mb-0.5 tracking-tight group-hover:text-[#5FC4FF] transition-colors">
                {title}
              </h3>
              <div className="text-[10px] md:text-[11px] text-[#8b949e] font-medium uppercase tracking-wider">
                {timestamp}
              </div>
            </div>
            
            {/* User Avatar */}
            <div className="flex-shrink-0 relative w-6 h-6 rounded-full overflow-hidden border border-white/10 shadow-sm">
              <img 
                src={avatar} 
                alt="User avatar" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* Action Button - Elegant Floating Style */}
          <div className="absolute right-2 top-[-40px] z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
            <div className="relative">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setShowMenu(!showMenu);
                }}
                className="flex h-8 w-8 items-center justify-center rounded-lg bg-black/40 backdrop-blur-md text-white transition-all hover:bg-black/60 border border-white/10"
              >
                <Ellipsis size={18} />
              </button>
            
              {/* Ellipsis Dropdown Menu */}
              {showMenu && (
                <div 
                  className="absolute right-0 bottom-full mb-2 w-40 bg-[#1c2127] border border-white/10 rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] py-1.5 z-50 overflow-hidden animate-in slide-in-from-bottom-2 duration-200"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-[12px] text-[#b8c0c5] hover:bg-white/5 hover:text-white transition-colors">
                    <Edit2 size={14} className="text-[#8b949e]" /> Rename
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-[12px] text-[#b8c0c5] hover:bg-white/5 hover:text-white transition-colors">
                    <Copy size={14} className="text-[#8b949e]" /> Duplicate
                  </button>
                  <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-[12px] text-[#b8c0c5] hover:bg-white/5 hover:text-white transition-colors">
                    <Share2 size={14} className="text-[#8b949e]" /> Share
                  </button>
                  <div className="h-[1px] bg-white/5 my-1.5 mx-2"></div>
                  <button className="w-full flex items-center gap-2.5 px-3.5 py-2 text-[12px] text-red-400 hover:bg-red-400/10 transition-colors font-medium">
                    <Trash2 size={14} /> Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Global Click Handler to Close Menu */}
        {showMenu && (
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setShowMenu(false)}
          ></div>
        )}
      </div>
    </div>
  );
};

interface DesignGridProps {
  searchQuery: string;
  activeScenario: string;
  activeSort: string;
}

const SAMPLE_DESIGNS = [
  {
    title: "Presentation Intelligence",
    timestamp: "7 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/1cbe52f155944f60a0dbc8aa249c995baa8512d69e85c74234-1.webp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png",
    scenario: "Technology",
    date: new Date(2023, 5, 1)
  },
  {
    title: "MEDTRONIC’S BARIATRIC SURGERY",
    timestamp: "4 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/62734eeaa25946feb99f98852d5fcbaf3e5f96be22999f640c-3.webp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png",
    scenario: "Healthcare",
    date: new Date(2023, 8, 1)
  },
  {
    title: "Sustainable Fashion Trends",
    timestamp: "2 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/ef4f293a42d747c1a312a38360c782972962e79b2237bd4fa6-5.webp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png",
    scenario: "Fashion",
    date: new Date(2023, 10, 1)
  },
  {
    title: "Future of Robotics",
    timestamp: "5 months ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/7ad3884f7aa641baab5f057a435f3c3cca8d5e6890450387ae-7.webp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png",
    scenario: "Science",
    date: new Date(2023, 7, 1)
  },
  {
    title: "AI & Creativity",
    timestamp: "1 month ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/bfa6f711cea047d4b1b5aa8d534f3bb0c7f55b6a7f399bee68-9.webp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png",
    scenario: "Creative",
    date: new Date(2023, 11, 1)
  },
  {
    title: "Interactive Storytelling",
    timestamp: "3 weeks ago",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/84e7117ef1f941619cdb8b330993a2377b9a635a2f24868d64-11.webp",
    avatar: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/a8bca284-8d60-4fd1-9602-77e8e87cb874-pi-inc/assets/images/23222733f43b4acd8e765038aedff125072ccd4a5dcc35d304-2.png",
    scenario: "Entertainment",
    date: new Date(2023, 11, 15)
  }
];

const DesignGrid = ({ searchQuery, activeScenario, activeSort }: DesignGridProps) => {
  let filtered = SAMPLE_DESIGNS.filter(design => {
    const matchesSearch = design.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesScenario = activeScenario === "All" || design.scenario === activeScenario;
    return matchesSearch && matchesScenario;
  });

  if (activeSort === "Newest") {
    filtered = [...filtered].sort((a, b) => b.date.getTime() - a.date.getTime());
  }

  return (
    <div className="py-4 min-h-[400px]">
      {filtered.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-3 md:gap-6">
          {filtered.map((design, index) => (
            <DesignCard
              key={`${design.title}-${index}`}
              title={design.title}
              timestamp={design.timestamp}
              image={design.image}
              avatar={design.avatar}
              scenario={design.scenario}
            />
          ))}
        </div>
      ) : (
        <div className="w-full flex flex-col items-center justify-center py-20 text-[#b8c0c5]">
          <div className="mb-4 opacity-20">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          </div>
          <p className="text-sm">No creations found matching your criteria</p>
        </div>
      )}
    </div>
  );
};

export default DesignGrid;
