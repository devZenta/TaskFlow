"use client";

interface WidgetProps {
  titre: string;
  content: string;
}

export function Widget({ titre, content }: WidgetProps) {
  return (
    <div className="bg-white/5 border border-white/10 rounded-lg shadow-lg backdrop-blur-sm p-6 transition-all hover:shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:border-purple-500/50">
      <h3 className="text-lg font-semibold text-white mb-3">{titre}</h3>
      <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">{content}</p>
    </div>
  );
}