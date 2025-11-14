import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Space_Grotesk,
  IBM_Plex_Mono,
} from "next/font/google";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Elara Voss — Computational Neuroscience",
  description:
    "Explorations of neural computation, adaptive cognition, and immersive neuroaesthetics.",
  metadataBase: new URL("https://agentic-a18d4ec9.vercel.app"),
  openGraph: {
    title: "Dr. Elara Voss — Computational Neuroscience",
    description:
      "Explorations of neural computation, adaptive cognition, and immersive neuroaesthetics.",
    images: [
      {
        url: "/og-neuro.png",
        width: 1200,
        height: 630,
        alt: "Ambient neural waveforms drifting across a dark minimal canvas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} bg-transparent text-foreground antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
