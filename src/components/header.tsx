"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/wine-bar", label: "Wine Bar" },
  { href: "/contact", label: "Contact" },
];

const externalLinks = [
  { href: "https://app.upserve.com/s/maribella-sioux-falls", label: "Order Online", external: true },
  { href: "https://app.upserve.com/b/maribella/gift-card", label: "Gift Cards", external: true },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="flex flex-col">
            <span className="font-heading text-2xl font-bold text-wine">
              Ciao Maribella
            </span>
            <span className="text-xs text-muted-foreground italic">
              Ristorante Italiano
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-wine"
            >
              {link.label}
            </Link>
          ))}
          {externalLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground transition-colors hover:text-wine"
            >
              {link.label}
            </a>
          ))}
          <Button asChild className="bg-wine hover:bg-wine-light text-white">
            <Link href="/contact">Reserve a Table</Link>
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px]">
            <SheetTitle>Menu</SheetTitle>
            <nav className="flex flex-col space-y-6 mt-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-wine"
                >
                  {link.label}
                </Link>
              ))}
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-foreground transition-colors hover:text-wine"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild className="bg-wine hover:bg-wine-light text-white mt-4">
                <Link href="/contact" onClick={() => setOpen(false)}>
                  Reserve a Table
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
