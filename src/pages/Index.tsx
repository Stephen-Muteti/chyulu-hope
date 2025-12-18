import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import {
  Users,
  GraduationCap,
  Heart,
  TrendingUp,
  BookOpen,
  Utensils,
  HeartHandshake,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import heroImage from "@/assets/hero-education.jpg";
import childrenHope from "@/assets/children-hope.jpg";

const stats = [
  { icon: Users, value: "500+", label: "Children Supported" },
  { icon: GraduationCap, value: "50+", label: "Schools Partnered" },
  { icon: Utensils, value: "1000+", label: "Meals Provided" },
  { icon: TrendingUp, value: "95%", label: "Success Rate" },
];

const programs = [
  {
    icon: BookOpen,
    title: "Educational Support",
    description: "Scholarships, school fees, and learning materials for children in need.",
    color: "ocean",
  },
  {
    icon: Utensils,
    title: "Nutritional Programs",
    description: "Food distribution and nutritional support for healthy development.",
    color: "health",
  },
  {
    icon: HeartHandshake,
    title: "Community Engagement",
    description: "Workshops and programs that empower families and communities.",
    color: "orange",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-ocean/80 to-navy/70" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-sky mb-6 animate-fade-in">
              <Sparkles className="w-5 h-5 text-orange animate-pulse-soft" />
              <span className="text-orange font-semibold italic">Light</span>
              <span className="text-white/80">the</span>
              <span className="text-white font-bold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-sky italic">one by one</span>
              <Sparkles className="w-5 h-5 text-orange animate-pulse-soft" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight animate-slide-up">
              Empowering Children Through Education
            </h1>
            
            <p className="text-lg md:text-xl text-sky/90 mb-8 leading-relaxed animate-slide-up stagger-1">
              Creating a society where every child has access to quality education, 
              healthcare, and the opportunity to thrive
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up stagger-2">
              <Link to="/donate">
                <Button variant="hero" size="lg">
                  Donate Now
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="heroOutline" size="lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-circle-orange mx-auto mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <div className="stat-number">{stat.value}</div>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                To empower vulnerable and needy children in Chyulu and across Kenya by 
                providing educational support, fulfilling basic needs, and fostering a 
                nurturing environment that promotes holistic development.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe every child deserves the opportunity to learn, grow, and succeed. 
                Through our comprehensive programs, we're breaking barriers and building 
                brighter futures.
              </p>
              
              <div className="flex items-center gap-2 mb-8 p-4 bg-ice/50 rounded-lg border border-sky/30">
                <span className="text-orange font-semibold italic">Light</span>
                <span className="text-foreground/70">the</span>
                <span className="text-navy font-bold">World</span>
                <span className="text-cyan">✦</span>
                <span className="text-ocean italic">one by one</span>
              </div>
              
              <Link to="/about">
                <Button variant="default" size="lg">
                  Discover Our Story
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
            
            <div className="relative">
              <img
                src={childrenHope}
                alt="Hopeful children with books"
                className="rounded-2xl shadow-strong w-full object-cover aspect-[4/3]"
              />
              <div className="absolute -bottom-6 -left-6 bg-card p-4 rounded-xl shadow-medium hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-health/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-health" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Health First</p>
                    <p className="text-sm text-muted-foreground">Caring for every child</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Preview */}
      <section className="py-20 section-gradient">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              How We Help
            </h2>
            <div className="flex items-center justify-center gap-2 text-sm">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-orange font-semibold italic">Light</span>
              <span className="text-foreground/70">the</span>
              <span className="text-navy font-bold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-ocean italic">one by one</span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="bg-card rounded-2xl p-8 shadow-soft card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`icon-circle-${program.color} mb-6`}>
                  <program.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {program.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {program.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/programs">
              <Button variant="outline" size="lg">
                View All Programs
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy via-ocean to-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join Us in Transforming Lives
          </h2>
          <p className="text-sky/90 max-w-2xl mx-auto mb-8">
            Your contributions—whether financial, material, or through volunteering—can 
            help us reach more children and provide them with the opportunities they deserve.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8 text-lg">
            <Sparkles className="w-5 h-5 text-orange animate-pulse-soft" />
            <span className="text-orange font-semibold italic">Light</span>
            <span className="text-white/80">the</span>
            <span className="text-white font-bold">World</span>
            <span className="text-sky">✦</span>
            <span className="text-sky italic">one by one</span>
            <Sparkles className="w-5 h-5 text-orange animate-pulse-soft" />
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/donate">
              <Button variant="hero" size="lg">
                Make a Donation
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
