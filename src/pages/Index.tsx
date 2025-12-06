import Footer from "@/components/Footer";
import TopBar from "@/components/TopBar";
import { Button } from "@/components/ui/button";
import { GraduationCap, Heart, Users, TrendingUp } from "lucide-react";
import heroEducation from "@/assets/hero-education.jpg";
import childrenHope from "@/assets/children-hope.jpg";

const Index = () => {
  const stats = [
    { number: "500+", label: "Children Supported", icon: Users },
    { number: "50+", label: "Schools Partnered", icon: GraduationCap },
    { number: "1000+", label: "Meals Provided", icon: Heart },
    { number: "95%", label: "Success Rate", icon: TrendingUp },
  ];

  const programs = [
    {
      title: "Educational Support",
      description: "Scholarships, school fees, and learning materials for children in need.",
      icon: GraduationCap,
    },
    {
      title: "Nutritional Programs",
      description: "Food distribution and nutritional support for healthy development.",
      icon: Heart,
    },
    {
      title: "Community Engagement",
      description: "Workshops and programs that empower families and communities.",
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero z-10" />
          <img
            src={heroEducation}
            alt="Children learning in classroom"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          <div className="relative z-20 container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground">
              Empowering Children Through Education
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-foreground/90 max-w-3xl mx-auto">
              Creating a society where every child has access to quality education and the opportunity to thrive
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate">
                <Button variant="hero" size="lg">
                  Donate Now
                </Button>
              </a>
              <a href="/about">
                <Button variant="secondary" size="lg">
                  Learn More
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-block bg-primary-light p-4 rounded-full mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  To empower vulnerable and needy children in Chyulu and across Kenya by providing educational support, fulfilling basic needs, and fostering a nurturing environment that promotes holistic development.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We believe every child deserves the opportunity to learn, grow, and succeed. Through our comprehensive programs, we're breaking barriers and building brighter futures.
                </p>
                <a href="/about">
                  <Button variant="default" size="lg">
                    Discover Our Story
                  </Button>
                </a>
              </div>
              
              <div>
                <img
                  src={childrenHope}
                  alt="Hopeful children with books"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Programs Preview */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How We Help</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-md border border-border text-center hover:shadow-lg transition-smooth"
                  >
                    <div className="bg-primary-light p-4 rounded-full inline-block mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                );
              })}
            </div>
            
            <div className="text-center mt-12">
              <a href="/programs">
                <Button variant="default" size="lg">
                  View All Programs
                </Button>
              </a>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Join Us in Transforming Lives
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-secondary-foreground/90">
              Your contributions, whether financial, material, or through volunteering—can help us reach more children and provide them with the opportunities they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/donate">
                <Button variant="hero" size="lg">
                  Make a Donation
                </Button>
              </a>
              <a href="/contact">
                <Button variant="outline" size="lg" className="text-foreground border-secondary-foreground text-foreground hover:bg-secondary-foreground hover:text-secondary">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
