"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const hours = [
  { day: "Tuesday - Thursday", hours: "4:00 PM - 10:00 PM" },
  { day: "Friday", hours: "4:00 PM - 11:00 PM" },
  { day: "Saturday", hours: "12:00 PM - 2:00 PM (Brunch), 4:00 PM - 11:00 PM (Dinner)" },
  { day: "Sunday - Monday", hours: "Closed", isClosed: true },
];

export default function ContactPage() {
  const [reservationOpen, setReservationOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    requests: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setReservationOpen(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
        requests: "",
      });
    }, 3000);
  };

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-cream via-[#F5ECE6] to-[#E8D5C4]">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <Badge variant="outline" className="mb-4 border-wine text-wine bg-wine/5">
              Visit Us
            </Badge>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-charcoal mb-4">
              Contact & Reservations
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We look forward to welcoming you like family
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Reservation Form */}
              <Card className="border-wine/20 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl">Make a Reservation</CardTitle>
                  <CardDescription>
                    Reserve your table for an unforgettable Italian dining experience
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    onClick={() => setReservationOpen(true)}
                    className="w-full bg-wine hover:bg-wine-light text-white py-6 text-lg"
                  >
                    Open Reservation Form
                  </Button>
                  <p className="text-sm text-muted-foreground mt-4 text-center">
                    Or call us at{" "}
                    <a href="tel:+16052711710" className="text-wine font-semibold hover:underline">
                      (605) 271-1710
                    </a>
                  </p>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-wine/20">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-wine/10 flex items-center justify-center">
                      <MapPin className="h-6 w-6 text-wine" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">Location</CardTitle>
                      <CardDescription>Find us in downtown Sioux Falls</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <address className="not-italic text-muted-foreground">
                      360 S. Main Ave.
                      <br />
                      Sioux Falls, SD 57104
                    </address>
                  </CardContent>
                </Card>

                <Card className="border-wine/20">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-wine/10 flex items-center justify-center">
                      <Phone className="h-6 w-6 text-wine" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">Contact</CardTitle>
                      <CardDescription>Reach out to us</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <p className="text-muted-foreground">
                      <a href="tel:+16052711710" className="hover:text-wine transition-colors">
                        (605) 271-1710
                      </a>
                    </p>
                    <p className="text-muted-foreground">
                      <a href="mailto:info@ciaomaribella.com" className="hover:text-wine transition-colors">
                        info@ciaomaribella.com
                      </a>
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-wine/20">
                  <CardHeader className="flex flex-row items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-wine/10 flex items-center justify-center">
                      <Clock className="h-6 w-6 text-wine" />
                    </div>
                    <div>
                      <CardTitle className="font-heading text-xl">Hours</CardTitle>
                      <CardDescription>When we&apos;re open</CardDescription>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm">
                      {hours.map((slot) => (
                        <div key={slot.day} className="flex justify-between">
                          <span className={slot.isClosed ? "text-wine font-medium" : "text-muted-foreground"}>
                            {slot.day}
                          </span>
                          <span className={slot.isClosed ? "text-wine font-medium" : "text-foreground"}>
                            {slot.hours}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-8 bg-cream">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="aspect-[21/9] rounded-2xl overflow-hidden border border-wine/20 bg-white">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.518394183939!2d-96.73320872402947!3d43.54364097111793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x878eb5d64b652897%3A0x577838a0ebecacb5!2sMaribella%20Ristorante!5e0!3m2!1sen!2sus!4v1745000000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Maribella Ristorante Location"
              />
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className="py-16 md:py-20 bg-background">
          <div className="container max-w-7xl px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-charcoal mb-4">
                Additional Services
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                More ways to experience Maribella
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-wine/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Gift Cards</CardTitle>
                  <CardDescription>
                    Give the gift of authentic Italian dining
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Perfect for birthdays, anniversaries, or any special occasion.
                  </p>
                  <Button asChild variant="outline" className="border-wine text-wine hover:bg-wine/10 w-full">
                    <a href="https://app.upserve.com/b/maribella/gift-card" target="_blank" rel="noopener noreferrer">
                      Purchase Gift Card
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-wine/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Wine Club</CardTitle>
                  <CardDescription>
                    Exclusive wines and member events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Join our Wine Club for curated selections and special tastings.
                  </p>
                  <Button asChild variant="outline" className="border-wine text-wine hover:bg-wine/10 w-full">
                    <a href="https://www.ciaomaribella.com/italia-wine-club" target="_blank" rel="noopener noreferrer">Join Wine Club</a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="border-wine/20">
                <CardHeader>
                  <CardTitle className="font-heading text-xl">Private Events</CardTitle>
                  <CardDescription>
                    Catering and private dining available
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    From intimate gatherings to large celebrations, we cater it all.
                  </p>
                  <Button asChild variant="outline" className="border-wine text-wine hover:bg-wine/10 w-full">
                    <a href="tel:+16052711710">Inquire Now</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-wine text-cream">
          <div className="container max-w-7xl px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              We Can&apos;t Wait to Welcome You
            </h2>
            <p className="text-lg text-cream/80 max-w-2xl mx-auto mb-8">
              Experience the warmth of Italian hospitality and flavors that transport you to Florence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="px-8">
                <a href="tel:+16052711710">Call (605) 271-1710</a>
              </Button>
              <Button asChild size="lg" className="bg-cream text-wine hover:bg-cream/90 px-8">
                <a href="mailto:info@ciaomaribella.com">Email Us</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Reservation Dialog */}
      <Dialog open={reservationOpen} onOpenChange={setReservationOpen}>
        <DialogContent className="max-w-lg max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="font-heading text-2xl">Table Reservation</DialogTitle>
            <DialogDescription>
              Fill out the form below and we'll confirm your reservation
            </DialogDescription>
          </DialogHeader>

          {submitted ? (
            <div className="text-center py-8">
              <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-xl font-bold text-charcoal mb-2">
                Request Received!
              </h3>
              <p className="text-muted-foreground">
                We'll confirm your reservation within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="(605) 555-5555"
                  />
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date">Date</Label>
                  <Input
                    id="date"
                    type="date"
                    required
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Time</Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) => setFormData({ ...formData, time: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="17:00">5:00 PM</SelectItem>
                      <SelectItem value="17:30">5:30 PM</SelectItem>
                      <SelectItem value="18:00">6:00 PM</SelectItem>
                      <SelectItem value="18:30">6:30 PM</SelectItem>
                      <SelectItem value="19:00">7:00 PM</SelectItem>
                      <SelectItem value="19:30">7:30 PM</SelectItem>
                      <SelectItem value="20:00">8:00 PM</SelectItem>
                      <SelectItem value="20:30">8:30 PM</SelectItem>
                      <SelectItem value="21:00">9:00 PM</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="guests">Guests</Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) => setFormData({ ...formData, guests: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5 Guests</SelectItem>
                      <SelectItem value="6">6 Guests</SelectItem>
                      <SelectItem value="7">7 Guests</SelectItem>
                      <SelectItem value="8">8 Guests</SelectItem>
                      <SelectItem value="large">Large Party (8+)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="occasion">Occasion (Optional)</Label>
                <Select
                  value={formData.occasion}
                  onValueChange={(value) => setFormData({ ...formData, occasion: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select occasion" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="birthday">Birthday</SelectItem>
                    <SelectItem value="anniversary">Anniversary</SelectItem>
                    <SelectItem value="date">Date Night</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="celebration">Celebration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="requests">Special Requests (Optional)</Label>
                <Textarea
                  id="requests"
                  value={formData.requests}
                  onChange={(e) => setFormData({ ...formData, requests: e.target.value })}
                  placeholder="Allergies, seating preference, etc."
                  className="min-h-[80px]"
                />
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setReservationOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit" className="bg-wine hover:bg-wine-light text-white">
                  Submit Request
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
}
