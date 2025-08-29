import 'leaflet/dist/leaflet.css';
import "./globals.css";
import Navigation from "./_components/Navigation";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./_subcomponents/ThemeContext";
import Footer from "./_components/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Carlo PEaaS | Ethical and Data Science",
  description: "Ethical and Data Science",
  icons: {
    icon: "/logo black-carlo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <body>
      <ThemeProvider>
          <Navigation />
          {children}
          <Footer />
      </ThemeProvider>
        </body>
    </html>
  );
}
