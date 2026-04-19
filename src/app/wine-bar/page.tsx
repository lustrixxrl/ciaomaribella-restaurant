"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Wine, GlassWater, Utensils, Music, Calendar, Heart, ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  { icon: Wine, title: "Curated Wine List", desc: "Over 100 Italian and international labels selected by Riccardo" },
  { icon: Utensils, title: "Small Plates", desc: "Artisanal cheeses, charcuterie, and Italian appetizers" },
  { icon: Music, title: "Live Entertainment", desc: "Jazz nights and acoustic performances on weekends" },
  { icon: Calendar, title: "Special Events", desc: "Wine tastings, winemaker dinners, and exclusive releases" },
];

const wines = [
  { name: "Prosecco Superiore", region: "Veneto, Italy", type: "Sparkling" },
  { name: "Pinot Grigio", region: "Alto Adige, Italy", type: "White" },
  { name: "Barolo DOCG", region: "Piedmont, Italy", type: "Red" },
  { name: "Chianti Classico", region: "Tuscany, Italy", type: "Red" },
  { name: "Amarone", region: "Veneto, Italy", type: "Red" },
  { name: "Moscato d'Asti", region: "Piedmont, Italy", type: "Dessert" },
];

export default function WineBarPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-br from-wine via-[#8B3D48] to-[#5A252D] text-cream overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="grape" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="2" fill="currentColor" className="text-gold" />
                <circle cx="35" cy="35" r="1.5" fill="currentColor" className="text-gold" />
                <circle cx="45" cy="38" r="1.5" fill="currentColor" className="text-gold" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grape)" />
            </svg>
          </div>

          <div className="container relative z-10 max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-gold text-gold bg-transparent">
              <Wine className="w-3 h-3 mr-1" />
              R Wine Bar & Kitchen
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6">
              An Extension of
              <br />
              <span className="text-gold italic">Italian Tradition</span>
            </h1>
            <p className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-8">
              Sister establishment to Maribella Ristorante. Experience an intimate setting
              with exceptional wines, small plates, and live entertainment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal px-8 py-6 text-lg">
                <a href="https://rwinebar.com" target="_blank" rel="noopener noreferrer">
                  Visit R Wine Bar
                </a>
              </Button>
              <Button asChild size="lg" className="bg-cream text-wine hover:bg-cream/90 px-8 py-6 text-lg">
                <Link href="/wine-club">Explore Wine Club</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="border-wine text-wine">Our Sister Location</Badge>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
                  Where Wine Meets Culture
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  R Wine Bar & Kitchen is the sister establishment to Maribella Ristorante,
                  offering a more intimate atmosphere for wine enthusiasts and food lovers alike.
                </p>
                <p className="text-muted-foreground">
                  Located in the heart of Sioux Falls, R Wine Bar features an extensive selection
                  of wines by the glass and bottle, accompanied by artisanal small plates and
                  live entertainment.
                </p>
                <Button asChild variant="outline" className="border-wine text-wine hover:bg-wine/10">
                  <a href="https://rwinebar.com/about" target="_blank" rel="noopener noreferrer">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-wine/20 to-gold/20 flex items-center justify-center border border-wine/20">
                  <div className="text-center p-8">
                    <Wine className="h-20 w-20 text-wine mx-auto mb-4" />
                    <p className="font-heading text-2xl font-bold text-wine mb-2">
                      100+ Labels
                    </p>
                    <p className="text-muted-foreground">
                      Italian & International Selection
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 md:py-20 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                The R Wine Bar Experience
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                More than a wine bar - a gathering place for culture, cuisine, and community
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature) => (
                <Card key={feature.title} className="border-wine/20 bg-white text-center">
                  <CardContent className="p-6">
                    <div className="h-14 w-14 rounded-full bg-wine/10 flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="h-7 w-7 text-wine" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-charcoal mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Wine Selection */}
        <section className="py-16 md:py-20 bg-charcoal text-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold mb-4">
                Featured Wine Selection
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto">
                A taste of what awaits at R Wine Bar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {wines.map((wine) => (
                <Card key={wine.name} className="border-cream/20 bg-white/5">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-heading text-lg font-bold text-gold">{wine.name}</h3>
                        <p className="text-cream/60 text-sm">{wine.region}</p>
                      </div>
                      <Badge variant="outline" className="border-gold/50 text-gold">
                        {wine.type}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Events CTA */}
        <section className="py-16 md:py-20 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Heart className="h-12 w-12 mx-auto mb-6 text-gold" />
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Events & Gatherings
            </h2>
            <p className="text-cream/80 max-w-2xl mx-auto mb-8">
              From intimate celebrations to corporate events, R Wine Bar offers
              a sophisticated venue for any occasion.
            </p>
            <Button asChild size="lg" className="bg-gold hover:bg-gold/90 text-charcoal px-8">
              <a href="https://rwinebar.com/events" target="_blank" rel="noopener noreferrer">
                View Events Calendar
              </a>
            </Button>
          </div>
        </section>

        {/* Connection to Maribella */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Two Locations, One Passion
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Both establishments share Chef Riccardo&apos;s commitment to authentic
                Italian hospitality and excellence.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card className="border-wine/30 bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <GlassWater className="h-12 w-12 text-wine mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                    Maribella Ristorante
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Full dining experience with authentic Northern Italian cuisine
                  </p>
                  <Button asChild variant="outline" className="border-wine text-wine hover:bg-wine/10">
                    <Link href="/menu">View Menu</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-gold/30 bg-white shadow-lg text-center">
                <CardContent className="p-8">
                  <Wine className="h-12 w-12 text-wine mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                    R Wine Bar & Kitchen
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Intimate wine bar with small plates and live entertainment
                  </p>
                  <Button asChild variant="outline" className="border-gold text-gold hover:bg-gold/10">
                    <a href="https://rwinebar.com" target="_blank" rel="noopener noreferrer">
                      Visit Website
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
