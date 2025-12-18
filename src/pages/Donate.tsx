import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Layout from "@/components/Layout";
import PageHeader from "@/components/PageHeader";
import {
  BookOpen,
  Utensils,
  Stethoscope,
  Users,
  Lock,
  CreditCard,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

const donationAmounts = [
  { amount: 25, description: "School supplies for 1 child" },
  { amount: 50, description: "Meals for 1 child for a month" },
  { amount: 100, description: "School fees for 1 child" },
  { amount: 250, description: "Complete support for 1 child" },
];

const impactAreas = [
  {
    icon: BookOpen,
    title: "Education",
    description: "Your donation helps provide school fees, books, and learning materials.",
  },
  {
    icon: Utensils,
    title: "Nutrition",
    description: "Support healthy meals and nutritional programs for growing children.",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Enable access to medical check-ups, vaccinations, and health services.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Empower families through workshops and sustainable development programs.",
  },
];

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(100);
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [customAmount, setCustomAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAmountSelect = (value: number) => {
    setSelectedAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setSelectedAmount(null);
  };

  const getFinalAmount = () => {
    if (customAmount && Number(customAmount) > 0) {
      return Number(customAmount);
    }
    return selectedAmount || 0;
  };


  const handleDonate = async (e: React.FormEvent) => {
    e.preventDefault();

    if (loading) return;

    const finalAmount = getFinalAmount();

    if (!finalAmount || finalAmount <= 0) {
      toast.error("Please select or enter a valid donation amount");
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast.error("Please provide your name and email");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/.netlify/functions/init-transaction", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          amount: finalAmount,
          email: donorInfo.email,
          name: donorInfo.name,
          message: donorInfo.message,
        }),
      });

      const data = await res.json();

      if (!data.status || !data.data?.authorization_url) {
        throw new Error("Payment initialization failed");
      }

      // REDIRECT TO PAYSTACK
      window.location.href = data.data.authorization_url;

    } catch (err: any) {
      toast.error(err.message || "Payment failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <PageHeader
        title="Make a Difference"
        subtitle="Your generous donation helps us transform lives and provide hope to vulnerable children in need."
      />

      {/* Donation Form Section */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 shadow-medium">
              <h2 className="text-2xl font-display font-bold text-center text-foreground mb-8">
                Choose Your Donation Amount
              </h2>

              <form onSubmit={handleDonate}>
                {/* Amount Selection */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {donationAmounts.map((option) => (
                    <button
                      key={option.amount}
                      type="button"
                      onClick={() => handleAmountSelect(option.amount)}
                      className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                        selectedAmount === option.amount
                          ? "border-orange bg-orange-light"
                          : "border-border hover:border-ocean"
                      }`}
                    >
                      <div className="text-2xl font-bold text-orange">${option.amount}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {option.description}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Custom Amount */}
                <div className="mb-8">
                  <Label className="text-muted-foreground text-sm">
                    Or enter a custom amount
                  </Label>
                  <Input
                    type="number"
                    placeholder="Enter amount in USD"
                    value={customAmount}
                    onChange={handleCustomAmount}
                    className="mt-2"
                    min="1"
                  />
                </div>

                {/* Donor Information */}
                <div className="space-y-4 mb-8">
                  <h3 className="text-lg font-display font-semibold text-foreground">
                    Your Information
                  </h3>
                  
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={donorInfo.name}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, name: e.target.value })
                      }
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={donorInfo.email}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, email: e.target.value })
                      }
                      required
                      className="mt-1"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message (Optional)</Label>
                    <Textarea
                      id="message"
                      placeholder="Leave a message of hope"
                      value={donorInfo.message}
                      onChange={(e) =>
                        setDonorInfo({ ...donorInfo, message: e.target.value })
                      }
                      className="mt-1"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  variant="donate"
                  size="xl"
                  className="w-full"
                  disabled={loading}
                >
                  {loading ? (
                    "Processing..."
                  ) : (
                    <>
                      <CreditCard className="w-5 h-5" />
                      Continue to Payment
                    </>
                  )}
                </Button>

                {/* Security Note */}
                <div className="flex items-center justify-center gap-2 mt-4 text-sm text-muted-foreground">
                  <Lock className="w-4 h-4" />
                  <span>Secure payment processing via Paystack. Your donation is tax-deductible.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Your Impact Section */}
      <section className="py-20 section-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Your Impact
            </h2>
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span className="text-orange font-semibold italic">Light</span>
              <span className="text-foreground/70">the</span>
              <span className="text-navy font-bold">World</span>
              <span className="text-cyan">✦</span>
              <span className="text-ocean italic">one by one</span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactAreas.map((area, index) => (
              <div
                key={area.title}
                className="bg-card rounded-2xl p-6 shadow-soft card-hover text-center animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="icon-circle-primary mx-auto mb-4">
                  <area.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Ways to Give */}
      <section className="py-20 section-light">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
              Other Ways to Give
            </h2>
            <div className="bg-card rounded-2xl p-8 shadow-soft">
              <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                Bank Transfer
              </h3>
              <p className="text-muted-foreground mb-6">
                You can also make a direct bank transfer or donate via PayPal. 
                Please contact us for banking details.
              </p>
              <Link to="/contact">
                <Button variant="outline" size="lg">
                  Contact Us for Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Donate;
