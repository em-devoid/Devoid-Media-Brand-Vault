import type { Metadata } from "next";
import "./globals.css";
import "./headline-spacing.css";
import "./entry-heading.css";
import "./footer-tagline.css";
import "./hero-heading.css";
import "./section-headings.css";
import "./uppercase-type.css";
import "./card-headings.css";
import "./statement-copy.css";
import "./contact-forms.css";
import "./portfolio-grid.css";

export const metadata: Metadata = {
  title: "Devoid Media — Art Without Apology",
  description: "The independent creative studio of em.devoid: boudoir, dark romance, modeling, visual storytelling, and creative direction.",
  icons: { icon: "/media/logo-mark.png" },
  openGraph: {
    title: "Devoid Media — Art Without Apology",
    description: "Boudoir. Dark romance. Intimate storytelling. Enter the void.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
