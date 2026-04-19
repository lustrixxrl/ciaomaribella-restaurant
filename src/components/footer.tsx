import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-charcoal text-cream">
      <div className="container max-w-7xl px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold text-gold">
                Ciao Maribella
              </span>
              <span className="text-xs text-cream/70 italic">
                Entri come amici, Vada come famiglia
              </span>
            </div>
            <p className="text-sm text-cream/70">
              Authentic Northern Italian cuisine in an elegant, warm setting.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-gold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/menu" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Menu
              </Link>
              <Link href="/about" className="text-sm text-cream/70 hover:text-gold transition-colors">
                About Us
              </Link>
              <Link href="/wine-bar" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Wine Bar
              </Link>
              <Link href="/contact" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Reservations
              </Link>
              <a href="https://app.upserve.com/b/maribella/gift-card" target="_blank" rel="noopener noreferrer" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Gift Cards
              </a>
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-gold">Contact</h4>
            <address className="not-italic space-y-2 text-sm text-cream/70">
              <p>360 S. Main Ave.</p>
              <p>Sioux Falls, SD 57104</p>
              <p>
                <a href="tel:+16052711710" className="hover:text-gold transition-colors">
                  (605) 271-1710
                </a>
              </p>
            </address>
          </div>

          {/* More */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-gold">More</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/wine-club" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Wine Club
              </Link>
              <Link href="/privacy" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-cream/70 hover:text-gold transition-colors">
                Terms
              </Link>
            </nav>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-heading text-lg font-semibold text-gold">Hours</h4>
            <div className="text-sm text-cream/70 space-y-1">
              <p>Tue - Thu: 4 - 10 PM</p>
              <p>Fri: 4 - 11 PM</p>
              <p>Sat: 12 - 2 PM, 4 - 11 PM</p>
              <p className="text-wine-light">Sun - Mon: Closed</p>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-cream/20" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-cream/60">
          <p>&copy; {new Date().getFullYear()} Ciao Maribella Ristorante. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-gold transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
