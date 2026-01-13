"use client";

import React, { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Plus, Sparkles, MessageSquare, ChevronRight, Zap, History, Globe } from "lucide-react";

const SUGGESTED_PROMPTS = [
  "Outline a presentation for a seed round pitch deck",
  "Write an executive summary for a Q3 marketing report",
  "Suggest 5 themes for a sustainable fashion brand",
  "Help me structure a technical roadmap for 2024"
];

const AIAssistantView = () => {
  const [messages, setMessages] = useState([
    { role: "assistant", content: "Hello! I'm your Pi AI Assistant. I can help you structure your ideas, write content, and design your slides. What are we working on today?", time: "Just now" }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (text: string = input) => {
    if (!text.trim()) return;
    
    const userMessage = { role: "user", content: text, time: "Just now" };
    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);
    
    // Simulate assistant response
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        "That's a great topic. I've drafted an outline with 8 slides focusing on market analysis and your unique value proposition. Would you like to see the breakdown?",
        "I've generated some content for your executive summary. It highlights the 15% growth we saw in Q3 and the upcoming product launches. Shall I add this to your current doc?",
        "Based on your request, I've selected the 'Midnight Nebula' theme and added some futuristic icons. It matches your brand's tech-forward vision perfectly."
      ];
      const assistantMessage = { 
        role: "assistant", 
        content: responses[Math.floor(Math.random() * responses.length)],
        time: "Just now"
      };
      setMessages(prev => [...prev, assistantMessage]);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100vh-1rem)]">
      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0 bg-[#161a1f]">
        <div className="flex-1 overflow-y-auto px-4 py-8 custom-scrollbar">
          <div className="max-w-3xl mx-auto space-y-8">
            {messages.map((msg, i) => (
              <div key={i} className={`flex items-start gap-4 animate-in fade-in slide-in-from-bottom-2 duration-300 ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
                <div className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border transition-all ${
                  msg.role === "assistant" 
                  ? "bg-[#1d252f] border-white/10 text-[#5fc4ff] shadow-[0_0_15px_rgba(95,196,255,0.1)]" 
                  : "bg-[#5fc4ff] border-[#5fc4ff]/20 text-[#161a1f]"
                }`}>
                  {msg.role === "assistant" ? <Bot size={20} /> : <User size={20} />}
                </div>
                <div className="flex flex-col gap-1.5 max-w-[85%]">
                  <div className={`px-5 py-3.5 rounded-2xl leading-relaxed text-[15px] ${
                    msg.role === "assistant" 
                    ? "bg-[#1c2127] border border-white/5 text-[#d1d5db]" 
                    : "bg-[#5fc4ff]/10 border border-[#5fc4ff]/20 text-[#5fc4ff]"
                  }`}>
                    {msg.content}
                  </div>
                  <span className={`text-[10px] text-[#8b949e] ${msg.role === "user" ? "text-right" : ""}`}>{msg.time}</span>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex items-start gap-4 animate-pulse">
                <div className="w-9 h-9 rounded-xl bg-[#1d252f] border border-white/10 flex items-center justify-center text-[#5fc4ff]">
                  <Bot size={20} />
                </div>
                <div className="px-5 py-3.5 rounded-2xl bg-[#1c2127] border border-white/5 flex gap-1 items-center">
                  <span className="w-1.5 h-1.5 bg-[#5fc4ff] rounded-full animate-bounce [animation-delay:-0.3s]" />
                  <span className="w-1.5 h-1.5 bg-[#5fc4ff] rounded-full animate-bounce [animation-delay:-0.15s]" />
                  <span className="w-1.5 h-1.5 bg-[#5fc4ff] rounded-full animate-bounce" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="p-4 md:p-8 bg-gradient-to-t from-[#161a1f] via-[#161a1f] to-transparent">
          <div className="max-w-3xl mx-auto space-y-4">
            {messages.length === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-4">
                {SUGGESTED_PROMPTS.map((prompt, i) => (
                  <button 
                    key={i}
                    onClick={() => handleSend(prompt)}
                    className="text-left px-4 py-3 rounded-xl bg-white/[0.02] border border-white/5 text-[13px] text-[#b8c0c5] hover:bg-white/5 hover:border-[#5fc4ff]/30 hover:text-white transition-all flex items-center justify-between group"
                  >
                    <span className="truncate">{prompt}</span>
                    <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[#5fc4ff]" />
                  </button>
                ))}
              </div>
            )}
            
            <div className="relative group">
              <div className="absolute inset-0 bg-[#5fc4ff]/5 blur-xl rounded-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
              <div className="relative flex items-end gap-2 bg-[#1c2127] border border-white/10 rounded-2xl p-2 focus-within:border-[#5fc4ff]/40 transition-all shadow-2xl">
                <textarea 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  placeholder="Ask Pi to help with your presentation..."
                  className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-[#8b949e] px-4 py-3 text-[15px] resize-none min-h-[50px] max-h-[200px]"
                  rows={1}
                />
                <button 
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isTyping}
                  className="p-3 bg-[#5fc4ff] text-[#161a1f] rounded-xl hover:bg-[#4ab0ee] transition-all disabled:opacity-30 disabled:hover:bg-[#5fc4ff] shrink-0 shadow-[0_0_15px_rgba(95,196,255,0.2)]"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center gap-6">
              {[
                { icon: Globe, label: "Search Web" },
                { icon: History, label: "Version History" },
                { icon: Zap, label: "Fast Mode" }
              ].map((tool, i) => (
                <button key={i} className="flex items-center gap-1.5 text-[11px] text-[#8b949e] hover:text-white transition-colors">
                  <tool.icon size={14} />
                  {tool.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar - Context/History */}
      <div className="hidden lg:flex w-72 flex-col bg-[#1c2127] border-l border-white/5">
        <div className="p-5 border-b border-white/5 flex items-center justify-between">
          <h3 className="text-sm font-bold text-white uppercase tracking-widest">Assistant History</h3>
          <button className="p-1.5 rounded-lg hover:bg-white/5 text-[#8b949e] hover:text-white transition-colors">
            <Plus size={18} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-[#8b949e] uppercase tracking-wider px-2 mb-2">Today</p>
            {["Seed Pitch Deck Strategy", "Q3 Report Analysis", "New Brand Guidelines"].map((item, i) => (
              <button key={i} className="w-full text-left px-3 py-2.5 rounded-xl text-[13px] text-[#b8c0c5] hover:bg-white/5 hover:text-white transition-all flex items-center gap-3 group">
                <MessageSquare size={16} className="text-[#8b949e] group-hover:text-[#5fc4ff]" />
                <span className="truncate">{item}</span>
              </button>
            ))}
          </div>
          <div className="pt-4 border-t border-white/5">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-[#5fc4ff]/10 to-transparent border border-[#5fc4ff]/20">
              <div className="flex items-center gap-2 text-[#5fc4ff] font-bold text-xs mb-2">
                <Sparkles size={14} />
                Pro Tip
              </div>
              <p className="text-[11px] text-[#b8c0c5] leading-relaxed">
                You can upload a PDF or PPT and I'll summarize it and help you redesign the slides instantly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantView;
