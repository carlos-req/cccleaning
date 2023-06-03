import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/globals.css";

export const metadata = {
  title: "CC Cleaning",
  description: "Professional Cleaning Services in The Tampa Bay Area",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-sans main">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
