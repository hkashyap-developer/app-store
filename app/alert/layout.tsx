import Header from "@/components/custom/header/header"
import Footer from "@/components/custom/footer/footer"

export const metadata: Metadata = {
  title: "App Store",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
