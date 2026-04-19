import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function TermsPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4]">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-wine text-wine bg-wine/5">Legal</Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal mb-4">Terms of Service</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8"><strong>Last Updated:</strong> January 2026</p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing this website, making reservations, or purchasing gift cards from Ciao Maribella Ristorante,
                you agree to be bound by these Terms of Service.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">2. Reservations</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Reservations are subject to availability and confirmation</li>
                <li>Large parties (8+) may require special arrangements</li>
                <li>We hold tables for 15 minutes past reservation time</li>
                <li>Please call to cancel if you cannot make your reservation</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">3. Gift Cards</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Gift cards never expire and have no hidden fees</li>
                <li>Not redeemable for cash except where required by law</li>
                <li>Valid at Maribella Ristorante and sister properties</li>
                <li>Lost or stolen cards cannot be replaced</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">4. Online Orders</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Online orders are processed through Upserve</li>
                <li>Order times and availability subject to change</li>
                <li>Special requests accommodated when possible</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">5. Wine Club</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Monthly wine allocations available for pickup on the 25th</li>
                <li>Must be 21+ to join</li>
                <li>Membership terms governed by separate agreement</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">6. Website Use</h2>
              <p className="text-muted-foreground mb-4">
                You agree not to misuse this website, including attempting to interfere with site functionality,
                access data unauthorizedly, or use the site for fraudulent purposes.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">7. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                Ciao Maribella Ristorante is not liable for indirect, incidental, or consequential damages
                arising from use of our website or services.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">8. Changes to Terms</h2>
              <p className="text-muted-foreground mb-4">
                We reserve the right to modify these terms at any time. Continued use constitutes acceptance
                of updated terms.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">9. Contact</h2>
              <address className="not-italic text-muted-foreground mb-8">
                <p><strong>Ciao Maribella Ristorante</strong></p>
                <p>360 S. Main Ave., Sioux Falls, SD 57104</p>
                <p>Phone: <a href="tel:+16052711710" className="text-wine hover:underline">(605) 271-1710</a></p>
                <p>Email: <a href="mailto:info@ciaomaribella.com" className="text-wine hover:underline">info@ciaomaribella.com</a></p>
              </address>

              <Separator className="my-8" />
              <p className="text-sm text-muted-foreground italic">
                These terms governed by South Dakota law. Disputes subject to Sioux Falls jurisdiction.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
