import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
      </body>
    </html>
  );
};

export default RootLayout;
