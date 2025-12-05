import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { GraduationCap, Apple, Heart, Users, Award, Lightbulb } from "lucide-react";
import communitySupport from "@/assets/community-support.jpg";

const Programs = () => {
  const programs = [
    {
      icon: GraduationCap,
      title: "School Fees Assistance",
      description: "We cover tuition fees and provide learning materials for children in need, ensuring they can attend school without financial barriers.",
      color: "text-primary",
      bgColor: "bg-primary-light",
    },
    {
      icon: Apple,
      title: "Nutritional Support",
      description: "We distribute food and essential supplies to ensure children are well-nourished and ready to learn, supporting their physical and cognitive development.",
      color: "text-accent",
      bgColor: "bg-accent-light",
    },
    {
      icon: Heart,
      title: "Health Initiatives",
      description: "We partner with local health providers to offer health check-ups and vaccinations for children, ensuring they stay healthy and active.",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Users,
      title: "Community Workshops",
      description: "We conduct workshops for parents and guardians on the importance of education and how to support their children's learning journey.",
      color: "text-secondary",
      bgColor: "bg-secondary-light",
    },
    {
      icon: Award,
      title: "Mentorship Programs",
      description: "We connect children with mentors who can guide them in their education and personal development, providing role models and support.",
      color: "text-primary",
      bgColor: "bg-primary-light",
    },
    {
      icon: Lightbulb,
      title: "Educational Resources",
      description: "We provide books, uniforms, and learning materials to create an optimal learning environment for every child we support.",
      color: "text-accent",
      bgColor: "bg-accent-light",
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-section py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Our Programs</h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Comprehensive initiatives designed to empower children and transform communities through education and support.
            </p>
          </div>
        </section>

        {/* Programs Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {programs.map((program, index) => {
                const Icon = program.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-md border border-border hover:shadow-lg transition-smooth"
                  >
                    <div className={`${program.bgColor} p-3 rounded-lg inline-block mb-4`}>
                      <Icon className={`h-8 w-8 ${program.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{program.title}</h3>
                    <p className="text-muted-foreground">{program.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What We Do</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <img 
                    src={communitySupport}
                    alt="Children receiving educational support"
                    className="rounded-lg shadow-lg w-full h-auto"
                  />
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-primary">Holistic Child Development</h3>
                    <p className="text-muted-foreground">
                      Our programs are designed to address the complete needs of each child, from education and nutrition to health and emotional support.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-secondary">Community Empowerment</h3>
                    <p className="text-muted-foreground">
                      We work closely with families and communities to create sustainable change, fostering an environment where children can thrive.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-accent">Long-term Impact</h3>
                    <p className="text-muted-foreground">
                      By investing in education and basic needs today, we are building a foundation for lifelong success and breaking cycles of poverty.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Your support enables us to expand these programs and reach more children in need. Together, we can create lasting change.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/donate">
                  <button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-warm font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8">
                    Make a Donation
                  </button>
                </a>
                <a href="/contact">
                  <button className="bg-secondary text-secondary-foreground hover:bg-secondary/80 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-12 px-8">
                    Get Involved
                  </button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Programs;
