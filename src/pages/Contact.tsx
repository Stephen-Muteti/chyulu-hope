import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import { Phone, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+254 714 262 174", "+254 799 377 805"],
    color: "primary",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["joshwambu992@gmail.com", "danielndiku58@gmail.com"],
    color: "accent",
  },
  {
    icon: MapPin,
    title: "Location",
    details: ["Chyulu, Kenya"],
    color: "health",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with us to learn more about our work or to discuss how you can support our mission."
      />

      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                Get In Touch
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We'd love to hear from you. Whether you have questions, want to volunteer, 
                or are interested in supporting our cause, please reach out.
              </p>

              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className={`icon-circle-${info.color} flex-shrink-0`}>
                      <info.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h3>
                      {info.details.map((detail) => (
                        <p key={detail} className="text-muted-foreground text-sm">
                          {info.title === "Email" ? (
                            <a
                              href={`mailto:${detail}`}
                              className="hover:text-ocean transition-colors"
                            >
                              {detail}
                            </a>
                          ) : info.title === "Phone" ? (
                            <a
                              href={`tel:${detail.replace(/\s/g, "")}`}
                              className="hover:text-ocean transition-colors"
                            >
                              {detail}
                            </a>
                          ) : (
                            detail
                          )}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2 p-4 bg-ice/50 rounded-xl border border-sky/30">
                <Sparkles className="w-5 h-5 text-cyan" />
                <span className="text-orange font-semibold italic">Light</span>
                <span className="text-foreground/70">the</span>
                <span className="text-navy font-bold">World</span>
                <span className="text-cyan">✦</span>
                <span className="text-ocean italic">one by one</span>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-card rounded-2xl p-8 shadow-medium">
                <h3 className="text-xl font-display font-semibold text-foreground mb-6">
                  Send Us a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      placeholder="What is this about?"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      className="mt-1"
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
