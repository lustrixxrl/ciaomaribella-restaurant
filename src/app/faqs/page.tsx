"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChevronDown, Wine, Utensils, Users, Clock, Gift } from "lucide-react";
import { useState } from "react";

const faqs = {
  general: [
    { q: "What type of cuisine do you serve?", a: "We serve authentic Northern Italian cuisine, with recipes passed down through generations. Chef Riccardo was born in Florence, Italy, and brings decades of culinary tradition to every dish." },
    { q: "Do you accommodate dietary restrictions?", a: "Yes! We can accommodate vegetarian, vegan, gluten-free, and other dietary needs. Please inform your server of any allergies or restrictions." },
    { q: "Is there a dress code?", a: "We recommend smart casual attire. While we don't have a strict dress code, most guests dress up for the upscale Italian dining experience." },
  ],
  wine: [
    { q: "What is your Wine Selection?", a: "We serve only Italian wines at Maribella. But next door at Trio Jazz Club and Brix Wine Bar you can get wine from the rest of the world!" },
    { q: "Do you have a full bar?", a: "Yes! We do have a full bar at Maribella Ristorante!" },
    { q: "Tell me about the Wine Club", a: "Our Italia Wine Club delivers 2 high-end, hard-to-find Italian red wines monthly. Each selection includes tasting notes personally written by Riccardo. Wines are ready for pickup on the 25th of every month." },
  ],
  reservations: [
    { q: "Do I need a reservation?", a: "Reservations are highly recommended, especially for weekends. Walk-ins are welcome based on availability." },
    { q: "Can I request patio seating?", a: "Yes! If you have a reservation you can request patio seating. Walk-ins can always come in and ask if we have a spot available." },
    { q: "What if I need to cancel?", a: "Please call us at (605) 271-1710 if you need to cancel or modify your reservation." },
    { q: "Do you take large parties?", a: "Yes! For parties of 8 or more, please contact us directly to arrange special accommodations." },
  ],
  family: [
    { q: "Are kids allowed?", a: "Yes! Kids are welcome at any and all of our businesses!" },
    { q: "Do you have a kids menu?", a: "Yes, we offer a children's menu with classic Italian favorites in smaller portions." },
    { q: "Is the restaurant stroller-accessible?", a: "Yes, our restaurant is accessible for strollers and wheelchairs." },
  ],
  gifts: [
    { q: "Do you sell gift cards?", a: "Yes! Our gift cards never expire and can be used for dine-in, takeout, and catering at all Maribella properties." },
    { q: "Can gift cards be used at sister properties?", a: "Yes! Gift cards are redeemable at Maribella Ristorante, R Wine Bar & Kitchen, Brix Wine Bar, and Vespa Catering." },
    { q: "Do you offer catering?", a: "Yes! Vespa Catering handles private events and special occasions. Contact us for custom menus and pricing." },
  ],
};

export default function FAQsPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <Header />
      <main className="flex-1 bg-cream">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4]">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-wine text-wine bg-wine/5">Help Center</Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find answers to common questions about dining, reservations, and more.
            </p>
          </div>
        </section>

        {/* FAQ Tabs */}
        <section className="py-16 md:py-20">
          <div className="container max-w-4xl px-4 md:px-6">
            <Tabs defaultValue="general" className="w-full">
              <TabsList className="w-full justify-start bg-transparent gap-2 p-0 overflow-x-auto">
                {[
                  { value: "general", label: "General", icon: Utensils },
                  { value: "wine", label: "Wine", icon: Wine },
                  { value: "reservations", label: "Reservations", icon: Clock },
                  { value: "family", label: "Family", icon: Users },
                  { value: "gifts", label: "Gifts & More", icon: Gift },
                ].map((tab) => (
                  <TabsTrigger
                    key={tab.value}
                    value={tab.value}
                    className="data-[state=active]:bg-wine data-[state=active]:text-white whitespace-nowrap px-4 py-2"
                  >
                    <tab.icon className="w-4 h-4 mr-2" />
                    {tab.label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(faqs).map(([category, items]) => (
                <TabsContent key={category} value={category} className="mt-8 space-y-4">
                  {items.map((faq, i) => (
                    <Card key={i} className="border-wine/20 bg-white cursor-pointer" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
                      <CardContent className="p-6">
                        <div className="flex justify-between items-start gap-4">
                          <h3 className="font-heading text-lg font-semibold text-charcoal pr-8">{faq.q}</h3>
                          <ChevronDown className={`h-5 w-5 text-wine transition-transform flex-shrink-0 ${openIndex === i ? "rotate-180" : ""}`} />
                        </div>
                        {openIndex === i && (
                          <p className="text-muted-foreground mt-4">{faq.a}</p>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Still Have Questions?
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              We&apos;re here to help. Reach out anytime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+16052711710" className="inline-flex items-center justify-center px-8 py-3 bg-gold text-charcoal rounded-md font-medium hover:bg-gold/90">
                Call (605) 271-1710
              </a>
              <a href="mailto:info@ciaomaribella.com" className="inline-flex items-center justify-center px-8 py-3 border border-cream text-cream rounded-md font-medium hover:bg-cream/10">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
