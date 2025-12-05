import TopBar from "@/components/TopBar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, GraduationCap, Apple } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { PaystackButton } from "react-paystack";

const Donate = () => {
  const { toast } = useToast();
  const [amount, setAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [donorInfo, setDonorInfo] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [transactionRef, setTransactionRef] = useState(null);
  const [loading, setLoading] = useState(false);

  const predefinedAmounts = [
    { value: "25", label: "$25", description: "School supplies for 1 child" },
    { value: "50", label: "$50", description: "Meals for 1 child for a month" },
    { value: "100", label: "$100", description: "School fees for 1 child" },
    { value: "250", label: "$250", description: "Complete support for 1 child" },
  ];

  const handleAmountSelect = (value: string) => {
    setAmount(value);
    setCustomAmount("");
  };

  const handleCustomAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value);
    setAmount(e.target.value);
  };

  const handleDonate = async (e) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please select or enter a valid donation amount.",
        variant: "destructive",
      });
      return;
    }

    if (!donorInfo.name || !donorInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please provide your name and email.",
        variant: "destructive",
      });
      return;
    }

    try {
      setLoading(true); // Start loader
      const res = await fetch("/.netlify/functions/init-transaction", {
        method: "POST",
        body: JSON.stringify({
          amount,
          email: donorInfo.email,
          name: donorInfo.name,
          message: donorInfo.message,
        }),
      });

      const data = await res.json();

      if (!data.status) {
        throw new Error(data.message || "Failed to initialize payment");
      }

      setTransactionRef(data.data.reference);
    } catch (err) {
      toast({
        title: "Payment Error",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false); // Stop loader
    }
  };

  const impacts = [
    {
      icon: GraduationCap,
      title: "Education",
      description: "Your donation helps provide school fees, books, and learning materials.",
      color: "text-primary",
      bgColor: "bg-primary-light",
    },
    {
      icon: Apple,
      title: "Nutrition",
      description: "Support healthy meals and nutritional programs for growing children.",
      color: "text-accent",
      bgColor: "bg-accent-light",
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Enable access to medical check-ups, vaccinations, and health services.",
      color: "text-destructive",
      bgColor: "bg-destructive/10",
    },
    {
      icon: Users,
      title: "Community",
      description: "Empower families through workshops and sustainable development programs.",
      color: "text-secondary",
      bgColor: "bg-secondary-light",
    },
  ];

  return (
    <div className="min-h-screen">
      <TopBar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-section py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">Make a Difference</h1>
            <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
              Your generous donation helps us transform lives and provide hope to vulnerable children in need.
            </p>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-lg border border-border">
                <h2 className="text-3xl font-bold mb-8 text-center">Choose Your Donation Amount</h2>
                
                <form onSubmit={handleDonate} className="space-y-8">
                  {/* Amount Selection */}
                  <div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      {predefinedAmounts.map((preset) => (
                        <button
                          key={preset.value}
                          type="button"
                          onClick={() => handleAmountSelect(preset.value)}
                          className={`p-4 rounded-lg border-2 transition-smooth ${
                            amount === preset.value
                              ? "border-primary bg-primary-light"
                              : "border-border hover:border-primary/50"
                          }`}
                        >
                          <div className="text-2xl font-bold text-primary mb-1">{preset.label}</div>
                          <div className="text-xs text-muted-foreground">{preset.description}</div>
                        </button>
                      ))}
                    </div>

                    <div>
                      <label htmlFor="custom-amount" className="block text-sm font-medium mb-2">
                        Or enter a custom amount
                      </label>
                      <Input
                        id="custom-amount"
                        type="number"
                        min="1"
                        step="0.01"
                        value={customAmount}
                        onChange={handleCustomAmount}
                        placeholder="Enter amount in USD"
                        className="text-lg"
                      />
                    </div>
                  </div>

                  {/* Donor Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">Your Information</h3>
                    
                    <div>
                      <label htmlFor="donor-name" className="block text-sm font-medium mb-2">
                        Full Name *
                      </label>
                      <Input
                        id="donor-name"
                        value={donorInfo.name}
                        onChange={(e) => setDonorInfo({ ...donorInfo, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="donor-email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="donor-email"
                        type="email"
                        value={donorInfo.email}
                        onChange={(e) => setDonorInfo({ ...donorInfo, email: e.target.value })}
                        placeholder="john@example.com"
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="donor-message" className="block text-sm font-medium mb-2">
                        Message (Optional)
                      </label>
                      <Input
                        id="donor-message"
                        value={donorInfo.message}
                        onChange={(e) => setDonorInfo({ ...donorInfo, message: e.target.value })}
                        placeholder="Leave a message of hope"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    className="w-full flex justify-center items-center gap-2"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        {/* Tailwind spinner */}
                        <div className="h-5 w-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        Processing...
                      </>
                    ) : (
                      "Continue to Payment"
                    )}
                  </Button>
                  {transactionRef && (
                    <PaystackButton
                      publicKey="pk_live_xxxxxxxxxxxxxxxxx"
                      email={donorInfo.email}
                      amount={Math.round(Number(amount) * 100)}
                      currency="USD"
                      reference={transactionRef}
                      metadata={{
                        name: donorInfo.name,
                        message: donorInfo.message,
                      }}
                      onSuccess={(ref) => {
                        toast({
                          title: "Donation Successful 🎉",
                          description: "Thank you for your generous support!",
                        });
                        setTransactionRef(null);
                      }}
                      onClose={() => {
                        toast({
                          title: "Payment Cancelled",
                          description: "You closed the payment window.",
                        });
                      }}
                      className="w-full bg-green-600 text-white py-3 rounded-lg mt-2"
                      text="Pay with Card"
                    />
                  )}

                  <p className="text-center text-sm text-muted-foreground">
                    Secure payment processing via Stripe. Your donation is tax-deductible.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-16 bg-primary-light">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Your Impact</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {impacts.map((impact, index) => {
                const Icon = impact.icon;
                return (
                  <div
                    key={index}
                    className="bg-card p-6 rounded-lg shadow-md text-center border border-border"
                  >
                    <div className={`${impact.bgColor} p-4 rounded-lg inline-block mb-4`}>
                      <Icon className={`h-8 w-8 ${impact.color}`} />
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{impact.title}</h3>
                    <p className="text-sm text-muted-foreground">{impact.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Alternative Giving Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Other Ways to Give</h2>
              
              <div className="bg-card p-8 rounded-lg shadow-md border border-border">
                <h3 className="text-xl font-semibold mb-4">Bank Transfer</h3>
                <p className="text-muted-foreground mb-6">
                  You can also make a direct bank transfer or donate via PayPal. Please contact us for banking details.
                </p>
                <a href="/contact">
                  <Button variant="secondary" size="lg">
                    Contact Us for Details
                  </Button>
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

export default Donate;
