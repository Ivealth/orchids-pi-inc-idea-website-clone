"use client";

import React, { useState } from "react";
import { Plus, FileUp, Sparkles, Filter } from "lucide-react";

const SCENARIOS = [
  "All",
  "Fashion",
  "Brands",
  "Economics",
  "Music",
  "Life",
  "Games",
  "Interactive",
  "Science",
  "Report",
  "Research",
  "Marketing",
  "Hiring",
  "Education",
  "Creative",
  "Technology",
  "Entertainment",
  "AI Ranking",
  "Culture",
  "Resume",
  "Picture Book",
  "Art",
  "Design",
  "Invitation",
  "Business Plan",
  "Beauty and Cosmetics",
  "Healthcare",
  "Reading",
  "Movie",
  "Travel",
  "Food",
  "Promotion",
];

interface DesignHubHeaderProps {
  activeScenario: string;
  setActiveScenario: (scenario: string) => void;
  activeSort: string;
  setActiveSort: (sort: string) => void;
  onOpenAIModal?: () => void;
}

export default function DesignHubHeader({ 
  activeScenario, 
  setActiveScenario, 
  activeSort, 
  setActiveSort,
  onOpenAIModal
}: DesignHubHeaderProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="flex flex-col gap-4 py-6 px-4 md:py-8 md:px-10 bg-[#161a1f]">
      {/* Title */}
      <h1 className="text-xl font-semibold leading-7 text-white mt-8 lg:mt-0">
        Pi Design Hub
      </h1>

      {/* Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {/* Create with AI */}
        <button 
          onClick={onOpenAIModal}
          className="flex items-center justify-center gap-2 h-[44px] md:h-[48px] border border-[#5FC4FF] rounded-lg text-white bg-[#5FC4FF14] hover:bg-[#5FC4FF26] transition-all group px-4 shadow-[0_0_15px_rgba(95,196,255,0.1)]"
        >
          <div className="relative flex items-center justify-center shrink-0">
            <Sparkles 
              size={18} 
              className="text-[#5FC4FF] md:w-5 md:h-5"
              strokeWidth={2}
            />
            <div className="absolute inset-0 bg-[#5FC4FF] opacity-10 blur-md"></div>
          </div>
          <span className="font-medium text-[13px] md:text-sm">Create with AI</span>
        </button>

        {/* Import */}
        <button className="flex items-center justify-center gap-2 h-[44px] md:h-[48px] border border-[#30363d] rounded-lg text-white bg-[#ffffff0a] hover:bg-[#ffffff14] transition-all group px-4">
          <FileUp size={16} className="text-[#b8c0c5] group-hover:text-white md:w-[18px] md:h-[18px]" strokeWidth={2} />
          <span className="font-medium text-[13px] md:text-sm text-[#b8c0c5] group-hover:text-white transition-colors">Import</span>
        </button>

        {/* Create from blank */}
        <button className="flex items-center justify-center gap-2 h-[44px] md:h-[48px] border border-[#30363d] rounded-lg text-white bg-[#ffffff0a] hover:bg-[#ffffff14] transition-all group px-4">
          <Plus size={16} className="text-[#b8c0c5] group-hover:text-white md:w-[18px] md:h-[18px]" strokeWidth={2} />
          <span className="font-medium text-[13px] md:text-sm text-[#b8c0c5] group-hover:text-white transition-colors">Create from blank</span>
        </button>
      </div>

      {/* Filter Bar Section */}
      <div className="mt-2">
        <div className="flex items-center gap-3 text-sm h-11 border-b border-white/5 relative">
          <div className="flex items-center gap-2 overflow-hidden flex-1 h-full">
            {/* Label */}
            <div className="flex-shrink-0 font-bold text-[#8b949e] text-[10px] uppercase tracking-[0.1em]">
              Scenario
            </div>

            {/* Vertical Divider */}
            <div className="h-3.5 w-[1px] bg-white/10 mx-1 flex-shrink-0"></div>

            {/* Tags Container */}
            {!isFilterOpen && (
              <div className="relative flex-1 overflow-hidden h-full flex items-center">
                <div className="flex gap-1 overflow-x-auto no-scrollbar scroll-smooth whitespace-nowrap py-1">
                  {SCENARIOS.map((scenario) => (
                    <button
                      key={scenario}
                      onClick={() => setActiveScenario(scenario)}
                      className={`text-nowrap py-1 px-3 rounded-full text-[11px] font-medium transition-all whitespace-nowrap ${
                        activeScenario === scenario
                          ? "text-[#5FC4FF] bg-[#5FC4FF14] border border-[#5FC4FF30]"
                          : "text-[#8b949e] hover:text-white hover:bg-white/5 border border-transparent"
                      }`}
                    >
                      {scenario}
                    </button>
                  ))}
                </div>
                <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#161a1f] to-transparent pointer-events-none"></div>
              </div>
            )}
            
            {isFilterOpen && (
              <div className="flex items-center text-[#5FC4FF] text-[11px] font-medium animate-in fade-in duration-300">
                All Scenarios
              </div>
            )}
          </div>

          {/* Filter Toggle */}
          <button 
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className={`flex-shrink-0 flex items-center gap-1.5 h-6.5 px-2.5 rounded text-[11px] transition-all border ${
              isFilterOpen 
                ? "bg-[#5FC4FF14] border-[#5FC4FF40] text-[#5FC4FF]" 
                : "bg-transparent border-[#30363d] text-[#8b949e] hover:text-white hover:border-[#8b949e]"
            }`}
          >
            <Filter size={12} />
            <span className="font-semibold">Filter</span>
          </button>
        </div>

        {/* Expanded Filter Panel */}
        {isFilterOpen && (
          <div className="mt-2 p-5 rounded-xl bg-[#1c2127] border border-[#30363d] shadow-[0_20px_40px_rgba(0,0,0,0.4)] animate-in slide-in-from-top-2 duration-300 z-30 relative">
            <div className="flex items-center justify-between mb-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.1em] text-[#8b949e]">Select Scenario</span>
              <button onClick={() => setIsFilterOpen(false)} className="text-[#8b949e] hover:text-white transition-colors p-1">
                <Plus size={18} className="rotate-45" />
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-2 gap-y-1">
              {SCENARIOS.map((scenario) => (
                <button
                  key={scenario}
                  onClick={() => {
                    setActiveScenario(scenario);
                    setIsFilterOpen(false);
                  }}
                  className={`text-left py-2 px-3 rounded-md text-[13px] transition-all ${
                    activeScenario === scenario
                      ? "text-[#5FC4FF] bg-[#5FC4FF14] font-semibold"
                      : "text-[#8b949e] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {scenario}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Sorting Toggles */}
        <div className="mt-4 flex justify-between items-center">
          <div className="flex gap-6 text-[10px] font-bold uppercase tracking-[0.1em]">
            <button 
              onClick={() => setActiveSort("All")}
              className={`pb-1.5 transition-all relative ${
                activeSort === "All" ? "text-white" : "text-[#8b949e] hover:text-white"
              }`}
            >
              All
              {activeSort === "All" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5FC4FF]"></span>
              )}
            </button>
            <button 
              onClick={() => setActiveSort("Newest")}
              className={`pb-1.5 transition-all relative ${
                activeSort === "Newest" ? "text-white" : "text-[#8b949e] hover:text-white"
              }`}
            >
              Newest
              {activeSort === "Newest" && (
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#5FC4FF]"></span>
              )}
            </button>
          </div>
          
          <div className="text-[10px] text-[#484f58] font-bold uppercase tracking-wider">
            {activeScenario}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
