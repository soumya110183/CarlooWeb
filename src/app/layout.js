import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "./_components/Navigation";

import { Montserrat } from "next/font/google";
import { ThemeProvider } from "./_subcomponents/ThemeContext";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Carlo peass | Ethical and Data Science",
  description: "Ethical and Data Science",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body>
          <Navigation />
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
