import { Sparkles } from "lucide-react";

const Banner = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 overflow-hidden bg-gradient-banner py-3 px-4">
      {/* Animated glow background */}
      <div className="absolute inset-0 bg-banner-glow opacity-30 animate-pulse-slow" />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-shimmer animate-shimmer" />
      
      <div className="relative z-10 flex items-center justify-center gap-2">
        <Sparkles className="h-4 w-4 text-banner-accent animate-twinkle" />
        <p className="text-sm md:text-base font-medium tracking-wider text-banner-foreground">
          <span className="text-banner-accent font-bold animate-glow">Light</span>
          <span className="mx-1 text-banner-muted">the</span>
          <span className="font-semibold">World</span>
          <span className="mx-2 text-banner-accent">✦</span>
          <span className="italic text-banner-muted">one by one</span>
        </p>
        <Sparkles className="h-4 w-4 text-banner-accent animate-twinkle delay-500" />
      </div>
    </div>
  );
};


export default Banner;
