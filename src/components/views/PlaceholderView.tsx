"use client";

import React from "react";

interface PlaceholderViewProps {
  title: string;
  description?: string;
}

const PlaceholderView = ({ title, description }: PlaceholderViewProps) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-[#b8c0c5] max-w-md">
        {description || `This is the ${title} section. Content for this page is coming soon.`}
      </p>
      <div className="mt-8 p-6 bg-white/[0.04] rounded-xl border border-white/10 w-full max-w-2xl">
        <div className="h-4 bg-white/5 rounded w-3/4 mb-4 animate-pulse"></div>
        <div className="h-4 bg-white/5 rounded w-1/2 mb-4 animate-pulse"></div>
        <div className="h-4 bg-white/5 rounded w-5/6 animate-pulse"></div>
      </div>
    </div>
  );
};

export default PlaceholderView;
