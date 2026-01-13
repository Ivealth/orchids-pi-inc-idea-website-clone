"use client";

import React, { useState } from "react";
import { MessageSquare, Send, Heart, Bug, Lightbulb, Star } from "lucide-react";

const FeedbackView = () => {
  const [type, setType] = useState("suggestion");
  const [rating, setRating] = useState(0);

  return (
    <div className="p-6 md:p-10 max-w-3xl mx-auto">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
          <MessageSquare className="text-[#5fc4ff]" />
          Share feedback
        </h1>
        <p className="text-[#b8c0c5] text-sm">Your thoughts help us shape the future of Pi. We read every message.</p>
      </div>

      <div className="bg-[#1c2127] border border-white/5 rounded-2xl p-6 md:p-8">
        <div className="space-y-8">
          <section>
            <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider mb-4 block">What kind of feedback do you have?</label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { id: "suggestion", label: "Suggestion", icon: Lightbulb, color: "text-yellow-400" },
                { id: "bug", label: "Bug Report", icon: Bug, color: "text-red-400" },
                { id: "love", label: "Love", icon: Heart, color: "text-pink-400" },
                { id: "other", label: "Other", icon: MessageSquare, color: "text-[#5fc4ff]" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => setType(item.id)}
                  className={`flex flex-col items-center justify-center p-4 rounded-xl border transition-all ${
                    type === item.id 
                    ? "bg-white/5 border-[#5fc4ff]/30 text-white" 
                    : "bg-white/[0.02] border-white/5 text-[#b8c0c5] hover:bg-white/5"
                  }`}
                >
                  <item.icon size={24} className={`mb-2 ${type === item.id ? item.color : "text-[#8b949e]"}`} />
                  <span className="text-xs font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </section>

          <section>
            <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider mb-4 block">How would you rate your experience?</label>
            <div className="flex items-center gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className="p-1 group transition-transform hover:scale-110"
                >
                  <Star 
                    size={32} 
                    className={`transition-colors ${
                      rating >= star ? "fill-yellow-400 text-yellow-400" : "text-[#2c353f] hover:text-[#3d4854]"
                    }`} 
                  />
                </button>
              ))}
            </div>
          </section>

          <section>
            <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider mb-2 block">Tell us more</label>
            <textarea 
              placeholder="Be as specific as you can. We love details!"
              className="w-full h-32 bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#8b949e] focus:outline-none focus:border-[#5fc4ff]/50 transition-colors resize-none"
            />
          </section>

          <button className="w-full py-4 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-xl hover:bg-[#4ab0ee] transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(95,196,255,0.2)]">
            <Send size={18} />
            Send Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedbackView;
