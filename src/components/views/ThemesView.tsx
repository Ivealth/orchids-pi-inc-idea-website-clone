"use client";

import React, { useState } from "react";
import { 
  Palette, 
  Search, 
  Plus, 
  ChevronRight, 
  Layout, 
  Type, 
  Paintbrush, 
  Eye, 
  Heart,
  Filter
} from "lucide-react";

const CATEGORIES = ["All", "General", "Corporate", "Creative", "Minimal", "Academic", "Portfolio"];

const SAMPLE_THEMES = [
  { id: 1, name: "Midnight Nebula", category: "Creative", colors: ["#161a1f", "#5fc4ff", "#ffffff"], preview: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop", uses: "12.4k" },
  { id: 2, name: "Arctic Minimal", category: "Minimal", colors: ["#ffffff", "#f0f4f8", "#2d3436"], preview: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2670&auto=format&fit=crop", uses: "8.2k" },
  { id: 3, name: "Modern Corporate", category: "Corporate", colors: ["#0a2540", "#70e000", "#ffffff"], preview: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2670&auto=format&fit=crop", uses: "25k" },
  { id: 4, name: "Vintage Journal", category: "Academic", colors: ["#f4f1ea", "#4a4a4a", "#8b4513"], preview: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2673&auto=format&fit=crop", uses: "5.1k" },
  { id: 5, name: "Neon Pulse", category: "Creative", colors: ["#000000", "#ff00ff", "#00ffff"], preview: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2670&auto=format&fit=crop", uses: "15.7k" },
  { id: 6, name: "Organic Earth", category: "General", colors: ["#2d4031", "#e6f4ea", "#d4a373"], preview: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=2480&auto=format&fit=crop", uses: "9.3k" },
];

const ThemesView = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredThemes = SAMPLE_THEMES.filter(theme => 
    activeCategory === "All" || theme.category === activeCategory
  );

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Palette className="text-[#5fc4ff]" />
            Themes Library
          </h1>
          <p className="text-[#b8c0c5] text-sm">Choose from hundreds of designer-crafted themes or create your own</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-xl text-sm hover:bg-[#4ab0ee] transition-all shadow-[0_0_20px_rgba(95,196,255,0.2)]">
          <Plus size={18} />
          Create Custom Theme
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-2 mb-8">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-lg text-sm transition-all border ${
              activeCategory === cat 
              ? "bg-white/10 border-[#5fc4ff]/30 text-white font-medium" 
              : "bg-white/[0.02] border-white/5 text-[#b8c0c5] hover:bg-white/5 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredThemes.map(theme => (
          <div key={theme.id} className="group relative flex flex-col bg-[#1c2127] rounded-2xl border border-white/5 overflow-hidden transition-all duration-300 hover:border-[#5fc4ff]/30 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
            <div className="aspect-[16/9] overflow-hidden relative">
              <img src={theme.preview} alt={theme.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                <button className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded-lg text-xs font-bold hover:bg-[#5fc4ff] transition-colors">
                  <Eye size={14} />
                  Preview
                </button>
                <button className="p-2 bg-white/10 backdrop-blur-md rounded-lg hover:bg-white/20 transition-colors">
                  <Heart size={16} className="text-white" />
                </button>
              </div>
            </div>
            
            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-white font-semibold group-hover:text-[#5fc4ff] transition-colors">{theme.name}</h3>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-white/5 text-[#8b949e] uppercase tracking-wider font-bold">
                  {theme.category}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  {theme.colors.map((color, i) => (
                    <div 
                      key={i} 
                      className="w-4 h-4 rounded-full border border-white/10" 
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#8b949e]">
                  <Layout size={12} />
                  <span>{theme.uses} uses</span>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <div className="aspect-[16/9] flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl hover:border-[#5fc4ff]/30 hover:bg-white/[0.02] transition-all group min-h-[250px] cursor-pointer">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#5fc4ff]/10 group-hover:text-[#5fc4ff] transition-colors">
            <Plus size={24} />
          </div>
          <span className="text-sm font-medium text-[#b8c0c5] group-hover:text-white transition-colors">Custom Designer</span>
          <p className="text-[11px] text-[#8b949e] mt-1">Build your brand theme</p>
        </div>
      </div>
    </div>
  );
};

export default ThemesView;
