import Nav from "@components/Nav";
import Footer from "@components/Footer";
import "@styles/globals.css";

export const metadata = {
  title: "Double C Cleaning",
  description: "Professional Cleaning Services in The Tampa Bay Area",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
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
