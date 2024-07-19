import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import { MetaPixel } from "@/app/components/MetaPixel.jsx";
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
      <Script
        id="microsoft-clarity-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "n43cc9a95y");
        `,
        }}
      />
      {/* <Script id="clarity">
        {`
          (function(c,l,a,r,i,t,y){
              c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
              t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
              y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "n43cc9a95y");
        `}
      </Script> */}
      <body className={inter.className}>
        {children}
        <MetaPixel />
      </body>
      <GoogleAnalytics gaId="G-NP1X4Y7S7R" />
    </html>
  );
};

export default RootLayout;
