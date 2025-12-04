"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, ArrowLeft } from "lucide-react";

interface NavigationProps {
  variant?: "home" | "back";
}

export function Navigation({ variant = "home" }: NavigationProps) {
  return (
    <nav className="fixed top-5 left-3 right-3 md:left-5 md:right-5 flex justify-between items-center z-9999 pointer-events-none">
      {variant === "home" ? (
        <>
          <Link href="/about" className="pointer-events-auto">
            <Button variant="nav" size="navIcon" aria-label="Go to About Page">
              <Menu className="h-5 w-5" />
            </Button>
          </Link>
          {/* Uncomment for Resume button */}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="pointer-events-auto"
          >
            <Button variant="nav" className="px-6 py-3 text-sm tracking-wider">
              RESUME
            </Button>
          </Link>
        </>
      ) : (
        <Link href="/" className="pointer-events-auto">
          <Button variant="nav" size="navIcon" aria-label="Go Back">
            <ArrowLeft className="h-5 w-5" />
          </Button>
        </Link>
      )}
    </nav>
  );
}
