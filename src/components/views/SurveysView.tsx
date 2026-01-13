"use client";

import React from "react";
import { SquareArrowOutUpRight, Plus, Search, MoreHorizontal, BarChart3, Users, Clock } from "lucide-react";

const SAMPLE_SURVEYS = [
  { id: 1, title: "Product Feedback 2024", responses: 128, status: "Active", date: "2 days ago" },
  { id: 2, title: "Event RSVP - Summer Gala", responses: 45, status: "Draft", date: "1 week ago" },
  { id: 3, title: "Customer Satisfaction Q3", responses: 256, status: "Closed", date: "1 month ago" },
];

const SurveysView = () => {
  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <SquareArrowOutUpRight className="text-[#5fc4ff]" />
            Surveys
          </h1>
          <p className="text-[#b8c0c5] text-sm">Create and manage interactive surveys within your presentations</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-xl text-sm hover:bg-[#4ab0ee] transition-all shadow-[0_0_20px_rgba(95,196,255,0.2)]">
          <Plus size={18} />
          New Survey
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {SAMPLE_SURVEYS.map((survey) => (
          <div key={survey.id} className="group bg-[#1c2127] border border-white/5 rounded-2xl p-6 hover:border-[#5fc4ff]/30 transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#5fc4ff]/10 flex items-center justify-center text-[#5fc4ff]">
                <BarChart3 size={20} />
              </div>
              <button className="text-[#8b949e] hover:text-white transition-colors">
                <MoreHorizontal size={18} />
              </button>
            </div>
            
            <h3 className="text-white font-semibold mb-1 group-hover:text-[#5fc4ff] transition-colors">{survey.title}</h3>
            <div className="flex items-center gap-2 mb-6">
              <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${
                survey.status === 'Active' ? 'bg-green-500/10 text-green-400' : 
                survey.status === 'Draft' ? 'bg-yellow-500/10 text-yellow-400' : 
                'bg-white/10 text-[#8b949e]'
              }`}>
                {survey.status}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
              <div className="flex flex-col">
                <span className="text-[10px] text-[#8b949e] uppercase font-bold tracking-wider mb-1">Responses</span>
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Users size={14} className="text-[#5fc4ff]" />
                  {survey.responses}
                </div>
              </div>
              <div className="flex flex-col">
                <span className="text-[10px] text-[#8b949e] uppercase font-bold tracking-wider mb-1">Created</span>
                <div className="flex items-center gap-1.5 text-white font-medium">
                  <Clock size={14} className="text-[#8b949e]" />
                  {survey.date}
                </div>
              </div>
            </div>
          </div>
        ))}
        
        <button className="flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-2xl p-6 hover:border-[#5fc4ff]/30 hover:bg-white/[0.02] transition-all group min-h-[200px]">
          <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-4 group-hover:bg-[#5fc4ff]/10 group-hover:text-[#5fc4ff] transition-colors">
            <Plus size={24} />
          </div>
          <span className="text-sm font-medium text-[#b8c0c5] group-hover:text-white transition-colors">Create Survey</span>
        </button>
      </div>
    </div>
  );
};

export default SurveysView;
