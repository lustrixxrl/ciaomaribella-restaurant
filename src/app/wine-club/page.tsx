"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Wine, Gift, Mail, Calendar, Check, Phone, Users, Sparkles } from "lucide-react";
import Link from "next/link";

const benefits = [
  "2 high-end, hard-to-find Italian red bottles monthly",
  "Regions include Barolo, Brunello, Amarone & more",
  "Tasting notes personally written by Riccardo Tarabelsi",
  "Access to renowned Italian winemakers",
  "Exclusive member events and private tastings",
  "Priority reservations at all properties",
];

const wines = [
  { name: "Barolo DOCG", region: "Piedmont", description: "The King of Wines - powerful, complex, age-worthy" },
  { name: "Brunello di Montalcino", region: "Tuscany", description: "100% Sangiovese - elegant with remarkable structure" },
  { name: "Amarone della Valpolicella", region: "Veneto", description: "Rich, full-bodied from dried grapes" },
  { name: "Chianti Classico Riserva", region: "Tuscany", description: "Traditional Tuscan blend with aging potential" },
];

export default function WineClubPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-wine via-[#8B3D48] to-[#5A252D] text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="vine" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                <circle cx="30" cy="30" r="1.5" fill="currentColor" className="text-gold" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#vine)" />
            </svg>
          </div>

          <div className="container relative z-10 max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-gold text-gold bg-transparent">
              <Wine className="w-3 h-3 mr-1" />
              Italia Wine Club
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              Curated Italian Wines
              <br />
              <span className="text-gold italic">Delivered Monthly</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8">
              Join Riccardo&apos;s exclusive wine club and discover rare Italian treasures,
              each selected and described with personal tasting notes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal px-8 py-6 text-lg">
                <a href="https://rwinebar.com/riccardos-wine-club" target="_blank" rel="noopener noreferrer">
                  Join Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-cream text-wine hover:bg-cream/90 px-8 py-6 text-lg">
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Club Benefits
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Exclusive access to Italy&apos;s finest wines, curated by our Florentine-born chef
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                <Card key={i} className="border-wine/20 bg-white">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-wine/10 flex items-center justify-center flex-shrink-0">
                      <Check className="h-5 w-5 text-wine" />
                    </div>
                    <p className="font-medium text-charcoal">{benefit}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                How It Works
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Calendar, title: "Monthly Selection", desc: "New bottles curated and shipped around the 25th of each month" },
                { icon: Users, title: "Pick Up In-Store", desc: "Wines ready for pickup at Maribella Ristorante on the 25th" },
                { icon: Gift, title: "Tasting Notes", desc: "Receive Riccardo&apos;s personal notes with each selection" },
              ].map((step) => (
                <Card key={step.title} className="border-wine/20 text-center">
                  <CardHeader>
                    <div className="h-16 w-16 rounded-full bg-wine/10 flex items-center justify-center mx-auto mb-4">
                      <step.icon className="h-8 w-8 text-wine" />
                    </div>
                    <CardTitle className="font-heading text-xl">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Wines */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold mb-4">
                Featured Regions
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto">
                Discover wines from Italy&apos;s most prestigious appellations
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {wines.map((wine) => (
                <Card key={wine.name} className="border-cream/20 bg-white/5">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-heading text-xl font-bold text-gold">{wine.name}</h3>
                        <p className="text-cream/60 text-sm">{wine.region}</p>
                      </div>
                      <Wine className="h-6 w-6 text-gold/60" />
                    </div>
                    <p className="text-cream/70">{wine.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Membership Options
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the perfect wine club experience for your palate
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-wine/30 bg-white shadow-lg">
                <CardHeader className="text-center pb-2">
                  <Badge variant="outline" className="border-wine text-wine w-fit mx-auto mb-2">
                    <Sparkles className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                  <CardTitle className="font-heading text-2xl">Classic Membership</CardTitle>
                  <p className="text-muted-foreground">2 bottles monthly</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      2 premium Italian red wines
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      Riccardo&apos;s tasting notes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      Member event invitations
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      10% off wine purchases in-store
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-wine hover:bg-wine-light text-white">
                    <a href="https://rwinebar.com/riccardos-wine-club" target="_blank" rel="noopener noreferrer">
                      Join Classic
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gold/30 bg-white shadow-lg">
                <CardHeader className="text-center pb-2">
                  <Badge variant="outline" className="border-gold text-gold w-fit mx-auto mb-2">
                    Premium
                  </Badge>
                  <CardTitle className="font-heading text-2xl">Reserve Membership</CardTitle>
                  <p className="text-muted-foreground">4 bottles monthly</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      4 premium Italian red wines
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      Riccardo&apos;s tasting notes
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      Priority event seating
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      15% off wine purchases in-store
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-wine" />
                      Exclusive reserve bottles
                    </li>
                  </ul>
                  <Button asChild className="w-full bg-wine hover:bg-wine-light text-white">
                    <a href="https://rwinebar.com/riccardos-wine-club" target="_blank" rel="noopener noreferrer">
                      Join Reserve
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Join the Club
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              Experience Italy&apos;s finest wines, curated by someone who was born there.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal px-8">
                <a href="https://rwinebar.com/riccardos-wine-club" target="_blank" rel="noopener noreferrer">
                  Sign Up Now
                </a>
              </Button>
              <Button asChild size="lg" className="bg-cream text-wine hover:bg-cream/90 px-8">
                <Link href="/contact">Have Questions?</Link>
              </Button>
            </div>
            <p className="text-sm text-cream/60 mt-6">
              Must be 21+ to join. Membership powered by R Wine Bar & Kitchen.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
