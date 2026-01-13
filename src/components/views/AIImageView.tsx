"use client";

import React, { useState } from "react";
import { 
  ImageIcon, 
  Sparkles, 
  Download, 
  Share2, 
  Zap, 
  Maximize2, 
  RefreshCw, 
  Layout, 
  Layers,
  Search,
  Check
} from "lucide-react";

const STYLES = [
  { id: "cinematic", label: "Cinematic", image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=2659&auto=format&fit=crop" },
  { id: "digital", label: "Digital Art", image: "https://images.unsplash.com/photo-1547891269-0512a155521b?q=80&w=2670&auto=format&fit=crop" },
  { id: "3d", label: "3D Render", image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?q=80&w=2564&auto=format&fit=crop" },
  { id: "minimal", label: "Minimalist", image: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?q=80&w=2667&auto=format&fit=crop" },
  { id: "vibrant", label: "Vibrant", image: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?q=80&w=2670&auto=format&fit=crop" },
  { id: "sketch", label: "Sketch", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2671&auto=format&fit=crop" },
];

const RATIOS = ["1:1", "16:9", "4:3", "9:16"];

const AIImageView = () => {
  const [prompt, setPrompt] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState("cinematic");
  const [selectedRatio, setSelectedRatio] = useState("16:9");

  const handleGenerate = () => {
    if (!prompt.trim()) return;
    setIsGenerating(true);
    setTimeout(() => {
      setGeneratedImage("https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop");
      setIsGenerating(false);
    }, 2500);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="mb-10">
        <h1 className="text-2xl font-bold text-white mb-1 flex items-center gap-2">
          <ImageIcon className="text-[#5fc4ff]" />
          AI Image Generator
        </h1>
        <p className="text-[#b8c0c5] text-sm">Transform your ideas into stunning presentation-ready visuals</p>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-10">
        {/* Controls Column */}
        <div className="xl:col-span-4 space-y-8">
          <section className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider">Prompt</label>
              <button className="text-[10px] text-[#5fc4ff] hover:underline flex items-center gap-1">
                <Sparkles size={10} />
                Magic Enhance
              </button>
            </div>
            <textarea 
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe the image you want to create in detail..."
              className="w-full h-32 bg-[#1c2127] border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-[#8b949e] focus:outline-none focus:border-[#5fc4ff]/40 transition-all resize-none text-sm leading-relaxed"
            />
          </section>

          <section className="space-y-3">
            <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider">Select Style</label>
            <div className="grid grid-cols-3 gap-2">
              {STYLES.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setSelectedStyle(style.id)}
                  className={`group relative aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    selectedStyle === style.id ? "border-[#5fc4ff]" : "border-transparent"
                  }`}
                >
                  <img src={style.image} alt={style.label} className="w-full h-full object-cover opacity-50 group-hover:opacity-80 transition-opacity" />
                  <div className="absolute inset-0 bg-black/40 flex items-end p-1.5">
                    <span className="text-[9px] font-bold text-white uppercase tracking-tighter truncate w-full">{style.label}</span>
                  </div>
                  {selectedStyle === style.id && (
                    <div className="absolute top-1 right-1 bg-[#5fc4ff] rounded-full p-0.5">
                      <Check size={8} className="text-[#161a1f]" />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </section>

          <section className="space-y-3">
            <label className="text-xs font-bold text-[#8b949e] uppercase tracking-wider">Aspect Ratio</label>
            <div className="flex gap-2">
              {RATIOS.map((ratio) => (
                <button
                  key={ratio}
                  onClick={() => setSelectedRatio(ratio)}
                  className={`flex-1 py-2 rounded-lg text-xs font-medium border transition-all ${
                    selectedRatio === ratio 
                    ? "bg-[#5fc4ff]/10 border-[#5fc4ff]/30 text-[#5fc4ff]" 
                    : "bg-[#1c2127] border-white/10 text-[#8b949e] hover:border-white/20"
                  }`}
                >
                  {ratio}
                </button>
              ))}
            </div>
          </section>

          <button 
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full py-4 bg-[#5fc4ff] text-[#161a1f] font-bold rounded-xl hover:bg-[#4ab0ee] transition-all flex items-center justify-center gap-2 shadow-[0_10px_20px_rgba(95,196,255,0.2)] disabled:opacity-50"
          >
            {isGenerating ? (
              <RefreshCw size={20} className="animate-spin" />
            ) : (
              <Zap size={20} />
            )}
            {isGenerating ? "Generating Magic..." : "Generate Visual"}
          </button>
        </div>

        {/* Preview Column */}
        <div className="xl:col-span-8 flex flex-col gap-6">
          <div className="relative flex-1 min-h-[500px] bg-[#1c2127] border border-white/5 rounded-2xl overflow-hidden flex items-center justify-center group shadow-2xl">
            {generatedImage ? (
              <>
                <img 
                  src={generatedImage} 
                  alt="Generated" 
                  className={`max-w-full max-h-full object-contain transition-all duration-1000 ${isGenerating ? 'blur-md opacity-50 scale-95' : 'blur-0 opacity-100 scale-100'}`} 
                />
                {!isGenerating && (
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white">
                      <Download size={24} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white">
                      <Share2 size={24} />
                    </button>
                    <button className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-colors text-white">
                      <Maximize2 size={24} />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex flex-col items-center text-center p-8">
                <div className="w-20 h-20 rounded-3xl bg-white/[0.02] border border-white/5 flex items-center justify-center mb-6 text-[#5fc4ff]/20">
                  <ImageIcon size={40} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Ready to create?</h3>
                <p className="text-[#8b949e] max-w-sm text-sm">Enter a prompt on the left to generate unique AI images for your presentation slides.</p>
              </div>
            )}

            {isGenerating && (
              <div className="absolute inset-0 bg-[#161a1f]/40 backdrop-blur-sm flex items-center justify-center">
                <div className="flex flex-col items-center gap-6">
                  <div className="relative">
                    <div className="w-16 h-16 border-4 border-[#5fc4ff]/10 border-t-[#5fc4ff] rounded-full animate-spin" />
                    <Sparkles size={24} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[#5fc4ff] animate-pulse" />
                  </div>
                  <div className="space-y-2 text-center">
                    <p className="text-white font-bold text-lg tracking-tight">Creating Masterpiece</p>
                    <p className="text-[#5fc4ff] text-xs font-medium animate-pulse uppercase tracking-widest">Processing neural layers...</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sample Gallery */}
          <div className="grid grid-cols-4 gap-4 h-32">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="bg-[#1c2127] border border-white/5 rounded-xl overflow-hidden cursor-pointer hover:border-[#5fc4ff]/30 transition-all opacity-40 hover:opacity-100">
                <img 
                  src={`https://images.unsplash.com/photo-${1618005182384 + i}-a83a8bd57fbe?q=80&w=400&auto=format&fit=crop`} 
                  className="w-full h-full object-cover" 
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIImageView;
