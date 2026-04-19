import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(114,47,55,0.05),transparent_50%)]" />
          <div className="container relative z-10 max-w-7xl px-4 md:px-6 text-center">
            <Badge
              variant="outline"
              className="mb-6 border-wine/30 text-wine bg-wine/5 px-4 py-2"
            >
              OpenTable Diners&apos; Choice 2024 & 2025
            </Badge>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-charcoal mb-6">
              Entri come amici,
              <br />
              <span className="text-wine italic">Vada come famiglia</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Authentic Northern Italian cuisine crafted with passion by Florentine-born
              Chef Riccardo. Experience elegance, warmth, and flavors that transport you to Italy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-wine hover:bg-wine-light text-white px-8 py-6 text-lg">
                <Link href="/contact">Reserve a Table</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-wine text-wine hover:bg-wine/10 px-8 py-6 text-lg">
                <Link href="/menu">View Our Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="py-12 bg-charcoal text-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-gold">OpenTable</p>
                <p className="text-sm text-cream/70">Diners&apos; Choice 2024 & 2025</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-gold">Wine Spectator</p>
                <p className="text-sm text-cream/70">Award of Excellence 2023-2025</p>
              </div>
              <div className="text-center">
                <p className="font-heading text-2xl font-bold text-gold">TripAdvisor</p>
                <p className="text-sm text-cream/70">Travelers' Choice</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Preview */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="border-wine text-wine">Our Story</Badge>
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal">
                  A Taste of Florence in Sioux Falls
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Born in Florence, Italy, Chef Riccardo brings decades of culinary tradition to every dish.
                  Together with Marybeth, he created Maribella Ristorante in 2022 as their third venture
                  celebrating Italian hospitality.
                </p>
                <p className="text-muted-foreground">
                  From Vespa Catering to R Wine Bar & Kitchen, their journey has been driven by one principle:
                  treating every guest like family.
                </p>
                <Button asChild variant="outline" className="border-wine text-wine hover:bg-wine/10">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-wine/20 to-gold/20 flex items-center justify-center border border-wine/20">
                  <div className="text-center p-8">
                    <p className="font-heading text-3xl font-bold text-wine mb-2">
                      Authentic Italian
                    </p>
                    <p className="text-muted-foreground">
                      Family recipes passed down through generations
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Preview */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <Badge variant="outline" className="border-wine text-wine mb-4">Menu Highlights</Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-charcoal mb-4">
                Culinary Excellence
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From handmade pasta to wood-fired pizzas, every dish is crafted with
                imported Italian ingredients and time-honored techniques.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: "Antipasti", description: "Traditional starters to awaken your palate" },
                { category: "Primi", description: "Handmade pasta and risotto creations" },
                { category: "Secondi", description: "Prime cuts and fresh seafood" },
                { category: "Dolci", description: "House-made Italian desserts" },
              ].map((item) => (
                <Card key={item.category} className="border-wine/20 bg-white hover:shadow-lg transition-shadow">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading text-xl font-bold text-wine mb-2">{item.category}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-8">
              <Button asChild className="bg-wine hover:bg-wine-light text-white">
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready for an Unforgettable Evening?
            </h2>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-8">
              Join us for an authentic Italian dining experience where every guest is family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <Link href="/contact">Make a Reservation</Link>
              </Button>
              <Button asChild size="lg" className="bg-cream text-wine hover:bg-cream/90 px-8">
                <a href="tel:+16052711710">Call (605) 271-1710</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
