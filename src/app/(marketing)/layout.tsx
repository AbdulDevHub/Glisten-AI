import Header from "@/components/Header";
import Footer from "@/components/Footer";

/** Public marketing pages: the site header and footer wrap every page. */
export default function MarketingLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
