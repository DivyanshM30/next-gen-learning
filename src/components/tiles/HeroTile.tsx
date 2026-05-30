import { Flame } from "lucide-react";

export function HeroTile() {
  return (
    <div className="h-full w-full p-6 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-card to-background">
      {/* Abstract background blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-primary/20 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-48 h-48 bg-purple-500/10 rounded-full blur-[60px] pointer-events-none" />
      
      <div className="relative z-10">
        <h2 className="text-gray-400 font-medium mb-1">Welcome back,</h2>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Alex Student
        </h1>
      </div>
      
      <div className="relative z-10 flex items-center gap-3 bg-background/50 backdrop-blur-sm border border-border w-fit px-4 py-2 rounded-2xl">
        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center">
          <Flame className="text-orange-500 w-5 h-5" />
        </div>
        <div>
          <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Current Streak</p>
          <p className="text-lg font-bold text-white">14 Days</p>
        </div>
      </div>
    </div>
  );
}
