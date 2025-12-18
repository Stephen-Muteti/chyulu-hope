import { Sparkles } from "lucide-react";

const TaglineBanner = () => {
  return (
    <div className="tagline-banner">
      <div className="tagline-text font-sans tracking-wide">
        <Sparkles className="w-4 h-4 text-sky animate-pulse-soft" />
        <span>
          <span className="light">Light</span>
          <span className="the"> the </span>
          <span className="world">World</span>
        </span>
        <span className="text-cyan">✦</span>
        <span className="one-by-one">one by one</span>
        <Sparkles className="w-4 h-4 text-sky animate-pulse-soft" />
      </div>
    </div>
  );
};

export default TaglineBanner;
