import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import LayoutWrapper from "@/components/Layout/LayoutWrapper"; // Import the new wrapper

const font = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${font.className}`}>
        <ThemeProvider attribute="class" enableSystem={true} defaultTheme="system">
          
          <Aoscompo>
            <LayoutWrapper>{children}</LayoutWrapper> {/* Use the wrapper */}
          </Aoscompo>
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
