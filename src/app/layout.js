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
  title: "Carlo PEaaS | Real-Time AI Compliance, Ethical Governance & Data Science Security",
  description: "Ensure your AI stays ethical, secure, and compliant with global standards like GDPR, HIPAA & EU AI Act. Carlo PEaaS offers real-time monitoring, automated enforcement, and enterprise-scale governance for trustworthy AI.",
  keywords: "AI compliance, ethical AI, data security, GDPR, HIPAA, EU AI Act, AI governance, AI monitoring, enterprise AI, AI enforcement, data science security",
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
