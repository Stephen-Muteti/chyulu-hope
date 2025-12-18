import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import { Home, Sparkles } from "lucide-react";

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center py-20">
        <div className="text-center px-4">
          <h1 className="text-8xl font-display font-bold text-ocean/20 mb-4">404</h1>
          <h2 className="text-2xl font-display font-bold text-foreground mb-4">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">The page you're looking for doesn't exist.</p>
          <div className="flex items-center justify-center gap-2 mb-8">
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-orange font-semibold italic">Light</span>
            <span className="text-foreground/70">the</span>
            <span className="text-navy font-bold">World</span>
            <span className="text-cyan">✦</span>
            <span className="text-ocean italic">one by one</span>
          </div>
          <Link to="/">
            <Button variant="default" size="lg">
              <Home className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
