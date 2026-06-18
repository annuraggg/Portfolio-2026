import "./globals.css";
import type { Metadata } from "next";
import { polyMedian, neueMedium, gloock } from "@/lib/fonts";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import AnalyticsScripts from "@/components/layout/AnalyticsScripts";
import LogRocketInit from "@/components/layout/LogRocketInit";

export const metadata: Metadata = {
  title: "Anurag Sawant - Full Stack Developer",
  description:
    "Hello, I'm Anurag Sawant, a Full Stack Developer. I craft digital experiences that people love.",
  icons: {
    icon: "/logoicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${polyMedian.variable} ${neueMedium.variable} ${gloock.variable}`}
    >
      <body>
        {children}
        <LogRocketInit />
        <SpeedInsights />
        <Analytics />
      </body>
      <AnalyticsScripts />
    </html>
  );
}
