"use client";

import React from "react";
import { Type, Upload, Plus, Search, MoreHorizontal, FontCcw } from "lucide-react";

const CustomFontsView = () => {
  const fonts = [
    { name: "Inter", weight: "9 weights", category: "Sans Serif", uploaded: "System" },
    { name: "Space Grotesk", weight: "5 weights", category: "Display", uploaded: "2 days ago" },
    { name: "Playfair Display", weight: "6 weights", category: "Serif", uploaded: "1 week ago" },
  ];

  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Type className="text-[#5fc4ff]" />
            Custom Fonts
          </h1>
          <p className="text-[#b8c0c5] text-sm">Upload and manage your brand's unique typography</p>
        </div>
        <button className="flex items-center gap-2 px-5 py-2.5 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-xl text-sm hover:bg-[#4ab0ee] transition-all shadow-[0_0_20px_rgba(95,196,255,0.2)]">
          <Upload size={18} />
          Upload Font
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="col-span-full bg-[#1c2127] border border-white/5 rounded-2xl overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02] text-[11px] font-bold text-[#8b949e] uppercase tracking-wider">
                <th className="px-6 py-4">Font Family</th>
                <th className="px-6 py-4">Category</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {fonts.map((font, i) => (
                <tr key={i} className="group hover:bg-white/[0.01] transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm text-white font-medium" style={{ fontFamily: font.name }}>{font.name}</span>
                      <span className="text-[11px] text-[#8b949e]">{font.weight}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#b8c0c5]">{font.category}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold uppercase ${font.uploaded === 'System' ? 'bg-blue-500/10 text-blue-400' : 'bg-green-500/10 text-green-400'}`}>
                      {font.uploaded === 'System' ? 'System' : 'Uploaded'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-[#8b949e] hover:text-white transition-colors">
                      <MoreHorizontal size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomFontsView;
