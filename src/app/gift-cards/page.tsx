"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Gift, Mail, CreditCard, Heart, Star, Coffee } from "lucide-react";
import { useState } from "react";

const giftAmounts = [
  { amount: 50, label: "$50", description: "Perfect for lunch or appetizers" },
  { amount: 100, label: "$100", description: "Great for a dinner for two", popular: true },
  { amount: 150, label: "$150", description: "Full dining experience with wine" },
  { amount: 200, label: "$200", description: "Ultimate Italian feast" },
];

export default function GiftCardsPage() {
  const [selectedAmount, setSelectedAmount] = useState(100);
  const [customAmount, setCustomAmount] = useState("");
  const [giftType, setGiftType] = useState<"digital" | "physical">("digital");

  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setCustomAmount(value);
    if (value) {
      setSelectedAmount(parseInt(value));
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4] overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-wine blur-3xl" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-gold blur-3xl" />
          </div>

          <div className="container relative z-10 max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-wine text-wine bg-wine/5 px-4 py-2">
              <Heart className="w-3 h-3 mr-1" />
              Give the Gift of Taste
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-charcoal mb-6">
              Gift Cards
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Share the warmth of Italian hospitality. Perfect for birthdays, anniversaries,
              holidays, or any occasion worth celebrating.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="py-12 bg-white border-b">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Mail, title: "Instant Delivery", description: "Digital cards arrive via email within minutes" },
                { icon: CreditCard, title: "No Expiration", description: "Gift cards never expire, no hidden fees" },
                { icon: Star, title: "Redeem Anywhere", description: "Use for dine-in, takeout, or catering" },
              ].map((feature) => (
                <div key={feature.title} className="flex items-start gap-4 p-4">
                  <div className="h-12 w-12 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-wine" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-charcoal">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Purchase Section */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Gift Card Preview */}
              <div className="order-2 lg:order-1">
                <div className="sticky top-24">
                  <Card className="border-wine/20 shadow-2xl overflow-hidden">
                    <div className="relative h-64 bg-gradient-to-br from-wine via-[#8B3D48] to-[#5A252D] p-8 flex flex-col justify-between">
                      {/* Decorative pattern */}
                      <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="20" cy="20" r="2" fill="currentColor" className="text-gold" />
                          </pattern>
                          <rect width="100%" height="100%" fill="url(#pattern)" />
                        </svg>
                      </div>

                      <div className="relative z-10">
                        <p className="text-gold/80 text-sm font-medium">Ciao Maribella</p>
                        <p className="text-cream/60 text-xs italic mt-1">Ristorante Italiano</p>
                      </div>

                      <div className="relative z-10">
                        <p className="text-cream/70 text-sm">Gift Card</p>
                        <p className="text-3xl font-heading font-bold text-gold mt-1">
                          ${selectedAmount || customAmount || 100}
                        </p>
                      </div>

                      <div className="relative z-10 flex items-center justify-between">
                        <div>
                          <p className="text-cream/60 text-xs">Entri come amici,</p>
                          <p className="text-cream/80 text-xs italic">Vada come famiglia</p>
                        </div>
                        <Gift className="h-8 w-8 text-gold/60" />
                      </div>
                    </div>
                    <CardContent className="p-6 bg-cream/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Card Type:</span>
                        <span className="font-medium text-charcoal capitalize">{giftType === "digital" ? "Digital Delivery" : "Physical Card"}</span>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Sister properties */}
                  <div className="mt-6 p-4 bg-gradient-to-r from-wine/5 to-gold/5 rounded-lg border border-wine/10">
                    <p className="text-sm text-muted-foreground mb-2">Also redeemable at:</p>
                    <div className="flex flex-wrap gap-2">
                      {["R Wine Bar & Kitchen", "Brix Wine Bar", "Vespa Catering"].map((name) => (
                        <Badge key={name} variant="outline" className="text-xs border-wine/30 text-wine">
                          {name}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Purchase Form */}
              <div className="order-1 lg:order-2 space-y-8">
                <Tabs defaultValue="digital" className="w-full" onValueChange={(v) => setGiftType(v as "digital" | "physical")}>
                  <TabsList className="w-full grid grid-cols-2 gap-2 bg-wine/5 p-1">
                    <TabsTrigger value="digital" className="data-[state=active]:bg-wine data-[state=active]:text-white">
                      <Mail className="w-4 h-4 mr-2" />
                      Digital (Email)
                    </TabsTrigger>
                    <TabsTrigger value="physical" className="data-[state=active]:bg-wine data-[state=active]:text-white">
                      <Coffee className="w-4 h-4 mr-2" />
                      Physical (Mail)
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="digital" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-semibold text-charcoal">Recipient Information</h3>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="recipient-name">Full Name</Label>
                            <Input id="recipient-name" placeholder="Maria Rossi" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="recipient-email">Email</Label>
                            <Input id="recipient-email" type="email" placeholder="maria@example.com" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="digital-message">Personal Message (Optional)</Label>
                          <Textarea
                            id="digital-message"
                            placeholder="Add a personal message to accompany your gift..."
                            className="min-h-[100px]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-semibold text-charcoal">Your Information</h3>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="sender-name">Your Name</Label>
                          <Input id="sender-name" placeholder="John Doe" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="sender-email">Your Email</Label>
                          <Input id="sender-email" type="email" placeholder="john@example.com" />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="physical" className="mt-6 space-y-6">
                    <div className="space-y-4">
                      <h3 className="font-heading text-xl font-semibold text-charcoal">Shipping Information</h3>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="ship-name">Full Name</Label>
                            <Input id="ship-name" placeholder="Maria Rossi" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ship-phone">Phone</Label>
                            <Input id="ship-phone" type="tel" placeholder="(605) 555-5555" />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="ship-address">Street Address</Label>
                          <Input id="ship-address" placeholder="123 Main Street" />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="ship-city">City</Label>
                            <Input id="ship-city" placeholder="Sioux Falls" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ship-state">State</Label>
                            <Input id="ship-state" placeholder="SD" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="ship-zip">ZIP Code</Label>
                            <Input id="ship-zip" placeholder="57104" />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg">
                      <p className="text-sm text-amber-800">
                        <strong>Note:</strong> Physical cards arrive within 5-7 business days via USPS.
                        Rush shipping available at checkout.
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Amount Selection */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-charcoal">Select Amount</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {giftAmounts.map((tier) => (
                      <button
                        key={tier.amount}
                        onClick={() => {
                          setSelectedAmount(tier.amount);
                          setCustomAmount("");
                        }}
                        className={`relative p-4 rounded-lg border-2 transition-all ${
                          selectedAmount === tier.amount && !customAmount
                            ? "border-wine bg-wine/5"
                            : "border-border hover:border-wine/50"
                        }`}
                      >
                        {tier.popular && (
                          <Badge className="absolute -top-2 -right-2 bg-gold text-charcoal text-xs">
                            Popular
                          </Badge>
                        )}
                        <p className="font-heading text-xl font-bold text-wine">{tier.label}</p>
                        <p className="text-xs text-muted-foreground mt-1">{tier.description}</p>
                      </button>
                    ))}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="custom-amount">Or enter custom amount (min $25)</Label>
                    <div className="relative">
                      <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground">$</span>
                      <Input
                        id="custom-amount"
                        type="text"
                        inputMode="numeric"
                        placeholder="75"
                        value={customAmount}
                        onChange={handleCustomAmountChange}
                        className="pl-8"
                      />
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-wine hover:bg-wine-light text-white py-6 text-lg shadow-lg shadow-wine/20"
                >
                  <a href="https://app.upserve.com/b/maribella/gift-card" target="_blank" rel="noopener noreferrer">
                    <Gift className="w-5 h-5 mr-2" />
                    Purchase Gift Card - ${selectedAmount || customAmount || 100}
                  </a>
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  Gift cards are non-refundable and cannot be redeemed for cash.
                  Valid for dine-in, takeout, and catering at all Maribella properties.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-charcoal text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Need a Larger Quantity?
            </h2>
            <p className="text-cream/70 max-w-2xl mx-auto mb-8">
              Contact us for corporate gifts, event favors, or bulk orders.
              We offer custom designs and denominations for special occasions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <a href="tel:+16052711710">Call (605) 271-1710</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-cream text-cream hover:bg-cream/10 px-8">
                <a href="mailto:info@ciaomaribella.com">Email Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
