import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4]">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-wine text-wine bg-wine/5">
              Our Story
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal mb-6">
              Entri come amici, Vada come famiglia
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto italic">
              Enter as friends, leave as family
            </p>
          </div>
        </section>

        {/* Founders Story */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-wine/20 to-gold/20 border border-wine/20 flex items-center justify-center">
                  <div className="text-center p-8">
                    <p className="font-heading text-2xl font-bold text-wine mb-2">
                      Riccardo & Marybeth
                    </p>
                    <p className="text-muted-foreground">
                      Founders & Hosts
                    </p>
                  </div>
                </div>
              </div>
              <div className="order-1 md:order-2 space-y-6">
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
                  From Florence to Sioux Falls
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Riccardo was born and raised in Florence, Italy, where he learned the art of
                  Italian cooking from his grandmother. The aromas of fresh pasta, the taste of
                  handmade ragu, and the warmth of family gatherings around the table shaped his
                  culinary philosophy from an early age.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  After years of honing his craft in the kitchens of Florence and Milan, Riccardo
                  brought his passion to the United States. There he met Marybeth, who shared his
                  vision of creating a place where authentic Italian cuisine meets genuine hospitality.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Journey Timeline */}
        <section className="py-20 md:py-28 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Three ventures, one unwavering commitment to excellence
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-wine/20 bg-white">
                <CardContent className="p-6">
                  <div className="text-wine font-heading text-5xl font-bold mb-4">1</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Vespa Catering</h3>
                  <p className="text-muted-foreground">
                    The beginning of our culinary journey, bringing authentic Italian flavors to
                    private events and special occasions throughout Sioux Falls.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-wine/20 bg-white">
                <CardContent className="p-6">
                  <div className="text-wine font-heading text-5xl font-bold mb-4">2</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">R Wine Bar & Kitchen</h3>
                  <p className="text-muted-foreground">
                    Expanding our vision with an intimate wine bar experience, curating exceptional
                    wines paired with small plates and live jazz at Trio Jazz Club.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-wine/20 bg-white relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gold text-charcoal text-xs font-semibold px-3 py-1">
                  Current
                </div>
                <CardContent className="p-6">
                  <div className="text-wine font-heading text-5xl font-bold mb-4">3</div>
                  <h3 className="font-heading text-xl font-bold text-charcoal mb-2">Maribella Ristorante</h3>
                  <p className="text-muted-foreground">
                    Established in 2022, our flagship restaurant represents the culmination of our
                    passion for Italian cuisine and heartfelt hospitality.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Awards */}
        <section className="py-20 md:py-28 bg-charcoal text-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-gold mb-4">
                Recognition & Awards
              </h2>
              <p className="text-cream/70 max-w-2xl mx-auto">
                Honored by industry leaders and beloved by our guests
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-6 border border-cream/20 rounded-lg">
                <p className="font-heading text-2xl font-bold text-gold mb-2">OpenTable</p>
                <p className="text-lg font-semibold">Diners&apos; Choice</p>
                <p className="text-cream/70">2024 & 2025</p>
              </div>
              <div className="text-center p-6 border border-cream/20 rounded-lg">
                <p className="font-heading text-2xl font-bold text-gold mb-2">Wine Spectator</p>
                <p className="text-lg font-semibold">Award of Excellence</p>
                <p className="text-cream/70">2023, 2024 & 2025</p>
              </div>
              <div className="text-center p-6 border border-cream/20 rounded-lg">
                <p className="font-heading text-2xl font-bold text-gold mb-2">TripAdvisor</p>
                <p className="text-lg font-semibold">Travelers' Choice</p>
                <p className="text-cream/70">Hall of Fame</p>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-20 md:py-28 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal">
                Our Philosophy
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  At Maribella, we believe that a restaurant is more than a place to eat—it's a place
                  where memories are made, where strangers become friends, and where every guest is
                  treated like family.
                </p>
                <p>
                  We source the finest ingredients, importing many directly from Italy to ensure
                  authenticity in every dish. Our pasta is made fresh daily, our sauces are simmered
                  with patience, and our pizzas are crafted with imported San Marzano tomatoes and
                  mozzarella di bufala.
                </p>
                <p>
                  But beyond the food, it's the warmth of our hospitality that defines us. Whether
                  you're joining us for a romantic dinner, a family celebration, or a business meal,
                  we welcome you with open arms and an open heart.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Sister Properties */}
        <section className="py-20 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Our Sister Properties
              </h2>
              <p className="text-muted-foreground">
                Explore more of our culinary ventures
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: "Vespa Catering", description: "Private events & catering" },
                { name: "R Wine Bar & Kitchen", description: "Intimate wine experience" },
                { name: "Brix Wine Bar", description: "Curated wine selections" },
                { name: "Trio Jazz Club", description: "Live music & cocktails" },
              ].map((property) => (
                <Card key={property.name} className="border-wine/20 bg-white">
                  <CardContent className="p-6 text-center">
                    <h3 className="font-heading text-lg font-bold text-wine mb-2">{property.name}</h3>
                    <p className="text-sm text-muted-foreground">{property.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Experience Italian Hospitality
            </h2>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-8">
              Join us for an unforgettable evening of authentic cuisine and warm hospitality.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-8">
              <Link href="/contact">Make a Reservation</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
