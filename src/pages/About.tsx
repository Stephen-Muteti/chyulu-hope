import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import {
  Eye,
  Target,
  Compass,
  BookOpen,
  Heart,
  Users,
  Leaf,
  Sparkles,
  ArrowRight,
} from "lucide-react";

const goals = [
  {
    icon: BookOpen,
    title: "Educational Support",
    description:
      "To provide scholarships, school fees, and educational resources for needy children to ensure they have access to quality education.",
  },
  {
    icon: Heart,
    title: "Basic Needs Provision",
    description:
      "To ensure that children receive essential supplies, including food, clothing, and healthcare, to create a stable foundation for learning.",
  },
  {
    icon: Users,
    title: "Community Engagement",
    description:
      "To engage with the community and raise awareness about the challenges faced by vulnerable children, encouraging collective action and support.",
  },
  {
    icon: Leaf,
    title: "Sustainable Development",
    description:
      "To implement programs that promote self-sufficiency among families, reducing dependency and empowering communities.",
  },
];

const About = () => {
  return (
    <Layout>
      <PageHeader
        title="About Us"
        subtitle="Learn about our vision, mission, and commitment to transforming lives through education and support."
      />

      {/* Vision Section */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-12">
              <div className="icon-circle-primary flex-shrink-0">
                <Eye className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  To create a society where every child has access to quality education, 
                  basic needs, and the opportunity to thrive, regardless of their circumstances.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 section-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <div className="icon-circle-orange flex-shrink-0">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Our mission is to empower vulnerable and needy children in Chyulu and across 
                  Kenya by providing educational support, fulfilling basic needs, and fostering 
                  a nurturing environment that promotes holistic development.
                </p>
              </div>
            </div>
            
            <div className="flex items-center justify-center gap-2 mt-8 p-4 bg-card rounded-xl shadow-soft">
              <Sparkles className="w-5 h-5 text-orange animate-pulse-soft" />
              <span className="text-orange font-semibold italic">Light</span>
              <span className="text-foreground/70">the</span>
              <span className="text-navy font-bold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-ocean italic">one by one</span>
              <Sparkles className="w-5 h-5 text-orange animate-pulse-soft" />
            </div>
          </div>
        </div>
      </section>

      {/* Goals Section */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="icon-circle-health mx-auto mb-4">
              <Compass className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Our Goals
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {goals.map((goal, index) => (
              <div
                key={goal.title}
                className="bg-card rounded-2xl p-8 shadow-soft card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-circle-accent mb-4">
                  <goal.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {goal.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {goal.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg mb-6">
              Chyulu Hope Initiative was founded with a simple yet powerful belief: every 
              child deserves the opportunity to learn, grow, and succeed. We recognized the 
              urgent need to support vulnerable children in Chyulu and across Kenya who face 
              barriers to education and basic necessities.
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg mb-8">
              Through the dedication of our team and the generosity of our supporters, we 
              have been able to transform lives, one child at a time. Together, we are 
              building a brighter future for the next generation.
            </p>
            
            <div className="flex items-center justify-center gap-2 mb-8">
              <Sparkles className="w-5 h-5 text-cyan" />
              <span className="text-orange font-semibold italic">Light</span>
              <span className="text-foreground/70">the</span>
              <span className="text-navy font-bold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-ocean italic">one by one</span>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/programs">
                <Button variant="default" size="lg">
                  Our Programs
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/donate">
                <Button variant="hero" size="lg">
                  Support Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
