import localFont from "next/font/local";
import { Gloock } from "next/font/google";

export const polyMedian = localFont({
  src: "../public/fonts/polysans/median.woff2",
  variable: "--font-polymedian-source",
  display: "swap",
});

export const neueMedium = localFont({
  src: "../public/fonts/neue/NeueMontreal-Medium.otf",
  variable: "--font-neuemedium-source",
  display: "swap",
});

export const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-gloock-source",
  display: "swap",
});
