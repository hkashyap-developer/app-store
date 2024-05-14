import Header from "@/components/custom/header/header"
import Footer from "@/components/custom/footer/footer"

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
