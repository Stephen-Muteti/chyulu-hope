import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import {
  GraduationCap,
  Heart,
  Stethoscope,
  Users,
  UserCheck,
  BookOpen,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import communitySupport from "@/assets/community-support.jpg";

const programs = [
  {
    icon: GraduationCap,
    title: "School Fees Assistance",
    description:
      "We cover tuition fees and provide learning materials for children in need, ensuring they can attend school without financial barriers.",
    color: "orange",
  },
  {
    icon: Heart,
    title: "Nutritional Support",
    description:
      "We distribute food and essential supplies to ensure children are well-nourished and ready to learn, supporting their physical and cognitive development.",
    color: "health",
  },
  {
    icon: Stethoscope,
    title: "Health Initiatives",
    description:
      "We partner with local health providers to offer health check-ups, vaccinations, and medical support for children, ensuring they stay healthy and active.",
    color: "primary",
    featured: true,
  },
  {
    icon: Users,
    title: "Community Workshops",
    description:
      "We conduct workshops for parents and guardians on the importance of education and how to support their children's learning journey.",
    color: "ocean",
  },
  {
    icon: UserCheck,
    title: "Mentorship Programs",
    description:
      "We connect children with mentors who can guide them in their education and personal development, providing role models and support.",
    color: "accent",
  },
  {
    icon: BookOpen,
    title: "Educational Resources",
    description:
      "We provide books, uniforms, and learning materials to create an optimal learning environment for every child we support.",
    color: "cyan",
  },
];

const healthFeatures = [
  "Regular health screenings and check-ups",
  "Vaccination programs for preventable diseases",
  "Mental health support and counseling",
  "Nutrition education and healthy meal programs",
  "Partnerships with local healthcare providers",
  "Emergency medical assistance fund",
];

const impactAreas = [
  {
    title: "Holistic Child Development",
    description:
      "Our programs are designed to address the complete needs of each child, from education and nutrition to health and emotional support.",
  },
  {
    title: "Community Empowerment",
    description:
      "We work closely with families and communities to create sustainable change, fostering an environment where children can thrive.",
  },
  {
    title: "Long-term Impact",
    description:
      "By investing in education and basic needs today, we are building a foundation for lifelong success and breaking cycles of poverty.",
  },
];

const Programs = () => {
  return (
    <Layout>
      <PageHeader
        title="Our Programs"
        subtitle="Comprehensive initiatives designed to empower children and transform communities through education, health, and support."
      />

      {/* Programs Grid */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className={`bg-card rounded-2xl p-8 shadow-soft card-hover animate-slide-up ${
                  program.featured ? "ring-2 ring-health/30 relative overflow-hidden" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {program.featured && (
                  <div className="absolute top-0 right-0 bg-health text-white text-xs px-3 py-1 rounded-bl-lg font-semibold">
                    Featured
                  </div>
                )}
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
        </div>
      </section>

      {/* Health Focus Section */}
      <section className="py-20 bg-gradient-to-r from-health/10 via-cyan/10 to-health/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="icon-circle-health mx-auto mb-4">
              <Stethoscope className="w-6 h-6" />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Health-Focused Initiatives
            </h2>
            <p className="text-muted-foreground">
              We believe that good health is the foundation for learning and growth. 
              Our health programs ensure every child has access to quality healthcare.
            </p>
            
            <div className="flex items-center justify-center gap-2 mt-6">
              <Sparkles className="w-4 h-4 text-health" />
              <span className="text-orange font-semibold italic">Light</span>
              <span className="text-foreground/70">the</span>
              <span className="text-navy font-bold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-ocean italic">one by one</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {healthFeatures.map((feature, index) => (
              <div
                key={feature}
                className="flex items-center gap-3 bg-card p-4 rounded-xl shadow-soft animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <CheckCircle className="w-5 h-5 text-health flex-shrink-0" />
                <span className="text-foreground text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 section-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src={communitySupport}
                alt="Children receiving educational support"
                className="rounded-2xl shadow-strong w-full object-cover aspect-[4/3]"
              />
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-8">
                What We Do
              </h2>
              
              <div className="space-y-6">
                {impactAreas.map((area, index) => (
                  <div
                    key={area.title}
                    className="animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                      {area.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy via-ocean to-cyan text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Join Our Mission
          </h2>
          <p className="text-sky/90 max-w-2xl mx-auto mb-6">
            Your support enables us to expand these programs and reach more children in need. 
            Together, we can create lasting change.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-8">
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
                Get Involved
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Programs;
