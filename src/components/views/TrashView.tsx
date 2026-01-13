"use client";

import React from "react";
import { Trash2, RotateCcw, XCircle, Search, FileText } from "lucide-react";

const TRASH_ITEMS = [
  { id: 1, title: "Old Marketing Deck", deletedDate: "2 days ago", size: "4.2 MB" },
  { id: 2, title: "Draft Proposal - Rejected", deletedDate: "5 days ago", size: "1.8 MB" },
];

const TrashView = () => {
  return (
    <div className="p-6 md:p-10 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
            <Trash2 className="text-red-400" />
            Trash
          </h1>
          <p className="text-[#b8c0c5] text-sm">Items in trash will be permanently deleted after 30 days</p>
        </div>
        <button className="px-4 py-2 bg-red-400/10 text-red-400 hover:bg-red-400/20 rounded-lg text-sm font-medium transition-colors border border-red-400/20">
          Empty Trash
        </button>
      </div>

      <div className="bg-[#1c2127] border border-white/5 rounded-2xl overflow-hidden">
        <div className="grid grid-cols-12 px-6 py-4 text-[11px] font-bold text-[#8b949e] uppercase tracking-wider border-b border-white/5 bg-white/[0.02]">
          <div className="col-span-7">Name</div>
          <div className="col-span-3 text-center">Deleted</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>

        {TRASH_ITEMS.length > 0 ? (
          <div className="divide-y divide-white/5">
            {TRASH_ITEMS.map((item) => (
              <div key={item.id} className="grid grid-cols-12 items-center px-6 py-4 hover:bg-white/[0.02] transition-colors group">
                <div className="col-span-7 flex items-center gap-3">
                  <div className="w-10 h-10 rounded bg-white/5 flex items-center justify-center shrink-0">
                    <FileText size={20} className="text-[#8b949e]" />
                  </div>
                  <div>
                    <p className="text-sm text-white font-medium">{item.title}</p>
                    <p className="text-[11px] text-[#8b949e]">{item.size}</p>
                  </div>
                </div>
                <div className="col-span-3 text-center text-[12px] text-[#b8c0c5]">
                  {item.deletedDate}
                </div>
                <div className="col-span-2 flex justify-end gap-2">
                  <button className="p-2 text-[#b8c0c5] hover:text-[#5fc4ff] hover:bg-[#5fc4ff]/10 rounded-lg transition-all" title="Restore">
                    <RotateCcw size={18} />
                  </button>
                  <button className="p-2 text-[#b8c0c5] hover:text-red-400 hover:bg-red-400/10 rounded-lg transition-all" title="Delete permanently">
                    <XCircle size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mb-4">
              <Trash2 size={32} className="text-white/20" />
            </div>
            <p className="text-[#8b949e]">Your trash is empty</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrashView;
