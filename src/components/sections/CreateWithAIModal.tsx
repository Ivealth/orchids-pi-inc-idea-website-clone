"use client";

import React, { useState } from "react";
import { X, Sparkles, Wand2, Layout, Palette, ArrowRight } from "lucide-react";

interface CreateWithAIModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateWithAIModal = ({ isOpen, onClose }: CreateWithAIModalProps) => {
  const [prompt, setPrompt] = useState("");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
      <div 
        className="relative w-full max-w-2xl bg-[#1c2127] rounded-xl border border-white/10 shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/5">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-[#5fc4ff1a] border border-[#5fc4ff33]">
              <Sparkles className="text-[#5fc4ff]" size={24} />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-white">Create with AI</h2>
              <p className="text-sm text-[#b8c0c5]">Transform your ideas into professional presentations</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-white/5 text-[#b8c0c5] hover:text-white transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Prompt Area */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-[#b8c0c5]">What do you want to create?</label>
            <div className="relative">
              <textarea 
                placeholder="e.g. A business proposal for a new sustainable fashion line..."
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-32 bg-white/[0.03] border border-white/10 rounded-lg p-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#5fc4ff55] focus:ring-1 focus:ring-[#5fc4ff33] transition-all resize-none"
              />
              <div className="absolute bottom-3 right-3 text-[10px] text-white/20">
                {prompt.length} / 500
              </div>
            </div>
          </div>

          {/* Quick Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <OptionCard 
              icon={<Layout size={18} />} 
              title="Smart Layout" 
              description="AI-driven positioning"
            />
            <OptionCard 
              icon={<Palette size={18} />} 
              title="Auto Theme" 
              description="Contextual styling"
            />
            <OptionCard 
              icon={<Wand2 size={18} />} 
              title="Refine Text" 
              description="Polished copy"
            />
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 bg-white/[0.02] border-t border-white/5">
          <button 
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#b8c0c5] hover:text-white transition-colors"
          >
            Cancel
          </button>
          <button 
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all duration-300 ${
              prompt.trim() 
                ? "bg-[#5fc4ff] text-black hover:bg-[#7dd3ff] shadow-[0_0_20px_rgba(95,196,255,0.3)]" 
                : "bg-white/5 text-white/30 cursor-not-allowed"
            }`}
            disabled={!prompt.trim()}
          >
            <span>Generate Design</span>
            <ArrowRight size={18} />
          </button>
        </div>
      </div>
      
      {/* Background Click to Close */}
      <div className="absolute inset-0 -z-10" onClick={onClose}></div>
    </div>
  );
};

const OptionCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:border-[#5fc4ff33] hover:bg-[#5fc4ff05] transition-all cursor-pointer group">
    <div className="text-[#b8c0c5] group-hover:text-[#5fc4ff] transition-colors mb-2">{icon}</div>
    <div className="text-sm font-medium text-white mb-0.5">{title}</div>
    <div className="text-[10px] text-[#b8c0c5] leading-tight">{description}</div>
  </div>
);

export default CreateWithAIModal;
