import { Inter } from "next/font/google";
import "./globals.css";
import { MetaPixel } from "@/app/components/MetaPixel";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://www.cultcreativeasia.com"),
  title: {
    // Apparently, using a hyphen instead of a pipe as a separator improves SEO:
    // https://www.semrush.com/blog/case-study-should-you-add-pipes-or-dashes-to-your-title-ag-/
    template: "%s - Cult Creative",
    default: "Cult Creative",
  },
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <MetaPixel />
      </body>
      <GoogleAnalytics gaId="G-NP1X4Y7S7R" />
    </html>
  );
};

export default RootLayout;
