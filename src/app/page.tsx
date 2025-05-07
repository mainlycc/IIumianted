"use client";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [email, setEmail] = useState("");
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
    setEmail("");
  };

  return (
    <div
      className="min-h-screen flex flex-col justify-between items-center bg-gradient-to-br from-[#6a1cc7] via-[#7b3fe4] to-[#a084ee] relative"
      style={{ minHeight: "100dvh" }}
    >
      <div className="flex-1 flex flex-col justify-center items-center w-full">
        <Card className="w-full max-w-md mx-auto mt-24 p-8 bg-[rgba(40,0,80,0.25)] shadow-2xl backdrop-blur-md border-none">
          <div className="flex flex-col items-center gap-2 mb-6">
            <span className="text-3xl sm:text-4xl font-bold flex items-center gap-2 text-yellow-300">
              <span className="inline-block">✨</span> IIIluminate.com
            </span>
            <p className="text-center text-base text-white/90 mt-2">
              Discover the art of illumination. Enter your email to receive exclusive lighting insights and inspiration.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <Label htmlFor="email" className="text-white">Your email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              className="bg-white/80 text-black placeholder:text-gray-500"
            />
            <Button type="submit" className="mt-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold hover:from-yellow-500 hover:to-orange-600">
              Get Illuminated ✨
            </Button>
          </form>
          {showToast && (
            <div className="fixed left-1/2 top-8 z-50 -translate-x-1/2 bg-black/80 text-white px-6 py-3 rounded-lg shadow-lg animate-fade-in">
              Welcome to IIIluminate! Check your email for your exclusive guide.
            </div>
          )}
        </Card>
      </div>
      <footer className="w-full flex flex-col items-center gap-4 pb-6 mt-12">
        <p className="text-white/80 text-sm text-center max-w-xl">
          Join our community of lighting enthusiasts who have discovered the power of perfect illumination. Get access to our exclusive guides and inspiration.
        </p>
        <div className="flex flex-row gap-6 items-center text-white/80 text-sm">
          <span>© 2025 IIIluminate.com. All rights reserved.</span>
          <a
            href="#"
            className="flex items-center gap-2 hover:underline hover:text-yellow-300 transition-colors"
          >
            <span className="inline-block">✨</span> Explore our designs
          </a>
        </div>
      </footer>
      <style jsx global>{`
        body { background: none !important; }
      `}</style>
    </div>
  );
}
