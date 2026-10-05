import type { Metadata } from "next";
import { Cormorant, Outfit } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/lib/cart";
import { InkShell } from "@/atelier/InkShell";
import { StudioConcierge } from "@/atelier/StudioConcierge";

const cormorant = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aureline — Light caught in gold",
  description: "Editorial jewelry atelier",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body>
        <CartProvider>
          <InkShell>{children}</InkShell>
          <StudioConcierge />
        </CartProvider>
      </body>
    </html>
  );
}
