"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";

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

const CategoryFilter = () => {
  const [activeScenario, setActiveScenario] = useState("All");
  const [activeSort, setActiveSort] = useState("All");

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between">
        <div className="flex w-full items-start gap-3 overflow-hidden text-sm">
          {/* Legend Label */}
          <div className="shrink-0 py-0.5 font-bold text-white">Scenario:</div>

          {/* Scrollable Container */}
          <div className="relative flex flex-1 items-center gap-3 overflow-hidden">
            <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth">
              {SCENARIOS.map((scenario) => {
                const isActive = activeScenario === scenario;
                return (
                  <button
                    key={scenario}
                    onClick={() => setActiveScenario(scenario)}
                    className={cn(
                      "text-nowrap rounded px-3 py-0.5 transition-colors duration-200",
                      isActive
                        ? "bg-[#e0f0ff] text-black hover:bg-[#e0f0ff]"
                        : "bg-transparent text-[#ffffffd9] hover:bg-[#6b6b6b]"
                    )}
                  >
                    {scenario}
                  </button>
                );
              })}
            </div>
            
            {/* Gradient Overlay for Fade Effect */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-r from-transparent to-[#1c1f26]" />
          </div>

          {/* Expand Toggle */}
          <button className="shrink-0 py-0.5 transition-colors hover:opacity-80">
            <span className="text-[#c8c8c8]">Expand</span>
          </button>
        </div>
      </div>

      {/* Secondary Sort Controls */}
      <div className="mt-4 flex min-h-6 items-center justify-between">
        <div className="flex gap-7 text-sm font-normal">
          <button
            onClick={() => setActiveSort("All")}
            className={cn(
              "transition-colors",
              activeSort === "All" ? "text-white" : "text-[#c8c8c8] hover:text-white"
            )}
          >
            All
          </button>
          <button
            onClick={() => setActiveSort("Newest")}
            className={cn(
              "transition-colors",
              activeSort === "Newest" ? "text-white" : "text-[#c8c8c8] hover:text-white"
            )}
          >
            Newest
          </button>
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
};

export default CategoryFilter;