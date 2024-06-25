import { Inter } from "next/font/google";
import { domainName } from "@/app/components/misc";
import "./globals.css";
import { MetaPixel } from "@/app/components/MetaPixel";
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  // TODO BUG: This fixes the "metadataBase property in metadata export is not set for resolving ..." warning, but other pages still lack an OpenGraph image
  // See if this properly loads the OpenGraph image in the final website, if not, fall back to the below solution
  metadataBase: new URL(domainName),
  title: {
    // Apparently, using a hyphen instead of a pipe as a separator improves SEO:
    // https://www.semrush.com/blog/case-study-should-you-add-pipes-or-dashes-to-your-title-ag-/
    template: "%s - Cult Creative",
    default: "Cult Creative",
  },
  // TODO BUG: Rightfully, `/src/app/opengraph-image.png` should be the default for all pages, but somehow it only applies to the home page
  // Uncomment this code if this bug persists in the final website
  // openGraph: {
  //   images: [ { url: "/opengraph-image.png" }]
  // },
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
