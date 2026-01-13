"use client";

import React, { useState } from "react";
import { 
  FileText, 
  MoreVertical, 
  Plus, 
  Search, 
  LayoutGrid, 
  List, 
  Clock, 
  File, 
  CheckCircle2, 
  Circle,
  MoreHorizontal,
  FolderPlus
} from "lucide-react";

const SAMPLE_DOCS = [
  { id: 1, title: "Quarterly Review Q4", lastModified: "2 hours ago", status: "Published", type: "Presentation", thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop" },
  { id: 2, title: "Product Roadmap 2024", lastModified: "Yesterday", status: "Draft", type: "Document", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" },
  { id: 3, title: "Marketing Strategy", lastModified: "3 days ago", status: "Published", type: "Presentation", thumbnail: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop" },
  { id: 4, title: "Design Systems", lastModified: "1 week ago", status: "Published", type: "Presentation", thumbnail: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=2564&auto=format&fit=crop" },
  { id: 5, title: "Team Alignment", lastModified: "2 weeks ago", status: "Draft", type: "Document", thumbnail: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2670&auto=format&fit=crop" },
];

const PiDocsView = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div className="p-6 md:p-10 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Pi docs</h1>
          <p className="text-[#b8c0c5] text-sm">Manage and organize your presentation intelligence</p>
        </div>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 bg-[#1d252f] border border-white/10 rounded-lg text-sm text-[#b8c0c5] hover:bg-white/5 transition-colors">
            <FolderPlus size={16} />
            New Folder
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-lg text-sm hover:bg-[#4ab0ee] transition-colors shadow-[0_0_15px_rgba(95,196,255,0.3)]">
            <Plus size={18} />
            Create New
          </button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4 border-b border-white/5 pb-4">
        <div className="flex items-center gap-1">
          {["All", "Drafts", "Published"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-1.5 text-sm rounded-full transition-all ${
                activeFilter === filter 
                ? "bg-white/10 text-white font-medium" 
                : "text-[#b8c0c5] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2 bg-[#1c2127] border border-white/5 rounded-lg p-1">
          <button 
            onClick={() => setViewMode("grid")}
            className={`p-1.5 rounded-md transition-colors ${viewMode === "grid" ? "bg-white/10 text-white" : "text-[#b8c0c5] hover:text-white"}`}
          >
            <LayoutGrid size={18} />
          </button>
          <button 
            onClick={() => setViewMode("list")}
            className={`p-1.5 rounded-md transition-colors ${viewMode === "list" ? "bg-white/10 text-white" : "text-[#b8c0c5] hover:text-white"}`}
          >
            <List size={18} />
          </button>
        </div>
      </div>

      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {SAMPLE_DOCS.map((doc) => (
            <div key={doc.id} className="group relative bg-[#1c2127] rounded-xl border border-white/5 overflow-hidden hover:border-[#5fc4ff]/30 transition-all duration-300 hover:-translate-y-1">
              <div className="aspect-[16/10] overflow-hidden relative">
                <img src={doc.thumbnail} alt={doc.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2 right-2">
                  <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${doc.status === "Published" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                    {doc.status}
                  </div>
                </div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-sm font-semibold text-white truncate group-hover:text-[#5fc4ff] transition-colors">{doc.title}</h3>
                  <button className="text-[#b8c0c5] hover:text-white p-1">
                    <MoreHorizontal size={16} />
                  </button>
                </div>
                <div className="flex items-center justify-between text-[11px] text-[#8b949e]">
                  <div className="flex items-center gap-1.5">
                    {doc.type === "Presentation" ? <FileText size={12} /> : <File size={12} />}
                    <span>{doc.type}</span>
                  </div>
                  <span>{doc.lastModified}</span>
                </div>
              </div>
            </div>
          ))}
          <button className="aspect-[16/10] flex flex-col items-center justify-center border-2 border-dashed border-white/5 rounded-xl hover:border-[#5fc4ff]/30 hover:bg-white/[0.02] transition-all group min-h-[200px]">
            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-3 group-hover:bg-[#5fc4ff]/10 group-hover:text-[#5fc4ff] transition-colors">
              <Plus size={20} />
            </div>
            <span className="text-sm text-[#b8c0c5] group-hover:text-white transition-colors">Create new doc</span>
          </button>
        </div>
      ) : (
        <div className="space-y-2">
          <div className="grid grid-cols-12 px-4 py-2 text-[11px] font-bold text-[#8b949e] uppercase tracking-wider border-b border-white/5">
            <div className="col-span-6">Name</div>
            <div className="col-span-2 text-center">Status</div>
            <div className="col-span-2 text-center">Type</div>
            <div className="col-span-2 text-right">Modified</div>
          </div>
          {SAMPLE_DOCS.map((doc) => (
            <div key={doc.id} className="grid grid-cols-12 items-center px-4 py-3 bg-[#1c2127] border border-white/5 rounded-lg hover:border-[#5fc4ff]/30 transition-all group">
              <div className="col-span-6 flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center shrink-0">
                  {doc.type === "Presentation" ? <FileText size={16} className="text-[#5fc4ff]" /> : <File size={16} className="text-white/50" />}
                </div>
                <span className="text-sm text-white font-medium truncate">{doc.title}</span>
              </div>
              <div className="col-span-2 flex justify-center">
                <div className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase ${doc.status === "Published" ? "bg-green-500/20 text-green-400" : "bg-yellow-500/20 text-yellow-400"}`}>
                  {doc.status}
                </div>
              </div>
              <div className="col-span-2 text-center text-[12px] text-[#b8c0c5]">
                {doc.type}
              </div>
              <div className="col-span-2 text-right text-[12px] text-[#8b949e]">
                {doc.lastModified}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default PiDocsView;
