import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4]">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-wine text-wine bg-wine/5">
              Legal
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Your privacy is important to us. Here&apos;s how we protect your information.
            </p>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-4xl px-4 md:px-6">
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-8">
                <strong>Last Updated:</strong> January 2026
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">1. Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Ciao Maribella Ristorante (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to protecting your privacy.
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or dine at our restaurant.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">2. Information We Collect</h2>

              <h3 className="font-heading text-xl font-semibold text-wine mt-6 mb-3">Personal Information</h3>
              <p className="text-muted-foreground mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Make a reservation through our website or by phone</li>
                <li>Purchase gift cards</li>
                <li>Sign up for our Wine Club or newsletter</li>
                <li>Contact us with inquiries or feedback</li>
                <li>Dine at our restaurant</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                This information may include your name, email address, phone number, mailing address,
                payment information, dietary preferences, and special occasion details.
              </p>

              <h3 className="font-heading text-xl font-semibold text-wine mt-6 mb-3">Automatically Collected Information</h3>
              <p className="text-muted-foreground mb-4">
                When you visit our website, we may automatically collect certain information about your
                device and browsing activity, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on pages</li>
                <li>Referring website addresses</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">3. How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Process and confirm reservations</li>
                <li>Fulfill gift card and other purchase orders</li>
                <li>Send reservation confirmations and reminders</li>
                <li>Respond to inquiries and provide customer service</li>
                <li>Send promotional communications (with your consent)</li>
                <li>Improve our website and services</li>
                <li>Comply with legal obligations</li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">4. Information Sharing</h2>
              <p className="text-muted-foreground mb-4">
                We do not sell, trade, or rent your personal information to third parties. We may share
                your information with:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>
                  <strong>Service Providers:</strong> Third-party vendors who assist with reservations,
                  payment processing, email delivery, and website analytics (e.g., OpenTable, Upserve,
                  Stripe)
                </li>
                <li>
                  <strong>Legal Requirements:</strong> When required by law or to protect our rights
                  and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In connection with a merger, sale, or transfer
                  of business assets
                </li>
              </ul>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">5. Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement reasonable security measures to protect your personal information, including
                encryption, secure servers, and access controls. However, no method of transmission over
                the internet is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">6. Cookies and Tracking</h2>
              <p className="text-muted-foreground mb-4">
                Our website uses cookies and similar technologies to enhance your browsing experience,
                analyze site traffic, and personalize content. You can control cookie settings through
                your browser preferences.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">7. Third-Party Links</h2>
              <p className="text-muted-foreground mb-4">
                Our website may contain links to third-party websites (including our reservation and
                ordering partners). We are not responsible for the privacy practices of these external
                sites and encourage you to review their privacy policies.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">8. Children's Privacy</h2>
              <p className="text-muted-foreground mb-4">
                Our website and services are not directed to children under 13. We do not knowingly
                collect personal information from children under 13 years of age.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">9. Your Rights</h2>
              <p className="text-muted-foreground mb-4">
                Depending on your location, you may have the right to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                <li>Access and receive a copy of your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Opt-out of marketing communications</li>
                <li>Object to or restrict certain processing</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                To exercise these rights, please contact us at{" "}
                <a href="mailto:info@ciaomaribella.com" className="text-wine hover:underline">
                  info@ciaomaribella.com
                </a>
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">10. Changes to This Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update this Privacy Policy from time to time. The updated version will be posted
                on this page with a revised &quot;Last Updated&quot; date. We encourage you to review this policy
                periodically for any changes.
              </p>

              <h2 className="font-heading text-2xl font-bold text-charcoal mt-8 mb-4">11. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions or concerns about this Privacy Policy or our data practices,
                please contact us:
              </p>
              <address className="not-italic text-muted-foreground mb-8">
                <p><strong>Ciao Maribella Ristorante</strong></p>
                <p>360 S. Main Ave.</p>
                <p>Sioux Falls, SD 57104</p>
                <p>Phone: <a href="tel:+16052711710" className="text-wine hover:underline">(605) 271-1710</a></p>
                <p>Email: <a href="mailto:info@ciaomaribella.com" className="text-wine hover:underline">info@ciaomaribella.com</a></p>
              </address>

              <Separator className="my-8" />

              <p className="text-sm text-muted-foreground italic">
                This Privacy Policy applies only to information collected through our website and
                restaurant services. It does not apply to information collected through other means
                or by third-party partners.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
