import Navbar from "@/components/layout/navbar/Navbar";
import GlowEffect from "@/components/shared/GlowEffect";
import Footer from "@/components/layout/footer/Footer";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <GlowEffect />
      <div className="w-full h-full flex justify-center flex-col items-center px-28 md:pt-28 pt-16 md:mb-0 mb-16">
        {children}
      </div>
      <Footer />
    </div>
  );
}
