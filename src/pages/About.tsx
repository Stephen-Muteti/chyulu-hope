import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Target, Eye, Goal } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      
      <main className="pt-28">
        {/* Hero Section */}
        <section className="bg-gradient-section py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">About Us</h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Learn about our vision, mission, and commitment to transforming lives through education and support.
            </p>
          </div>
        </section>

        {/* Vision */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-secondary-light p-3 rounded-lg">
                  <Eye className="h-8 w-8 text-secondary" />
                </div>
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To create a society where every child has access to quality education, basic needs, and the opportunity to thrive, regardless of their circumstances.
              </p>
            </div>
          </div>
        </section>

        {/* Mission */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our mission is to empower vulnerable and needy children in Chyulu and across Kenya by providing educational support, fulfilling basic needs, and fostering a nurturing environment that promotes holistic development.
              </p>
            </div>
          </div>
        </section>

        {/* Goals */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-accent-light p-3 rounded-lg">
                  <Goal className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-3xl font-bold">Our Goals</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Educational Support</h3>
                  <p className="text-muted-foreground">
                    To provide scholarships, school fees, and educational resources for needy children to ensure they have access to quality education.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Basic Needs Provision</h3>
                  <p className="text-muted-foreground">
                    To ensure that children receive essential supplies, including food, clothing, and healthcare, to create a stable foundation for learning.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Community Engagement</h3>
                  <p className="text-muted-foreground">
                    To engage with the community and raise awareness about the challenges faced by vulnerable children, encouraging collective action and support.
                  </p>
                </div>

                <div className="bg-card p-6 rounded-lg shadow-md border border-border">
                  <h3 className="text-xl font-semibold mb-3 text-primary">Sustainable Development</h3>
                  <p className="text-muted-foreground">
                    To implement programs that promote self-sufficiency among families, reducing dependency and empowering communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-gradient-section">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Chyulu Hope Initiative was founded with a simple yet powerful belief: every child deserves the opportunity to learn, grow, and succeed. We recognized the urgent need to support vulnerable children in Chyulu and across Kenya who face barriers to education and basic necessities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Through the dedication of our team and the generosity of our supporters, we have been able to transform lives, one child at a time. Together, we are building a brighter future for the next generation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
