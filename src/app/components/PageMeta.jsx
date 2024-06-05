// Component for page metadata and initializing Google Analytics

import ReactGA from "react-ga4";

export const PageMeta = ({
  title,
  desc,
  // The path portion of the page's canonical URL
  // Example: if the canonical URL is `http://www.example.com/example/page.html`, then `canonicalPath` is `/example/page.html`
  canonicalPath,

  // OpenGraph properties: https://ogp.me/
  // Guidelines: https://ahrefs.com/blog/open-graph-meta-tags/
  //
  // If unspecified, equal to `title`
  ogTitle,
  // If unspecified, defaults to `"website"`
  ogType,
  // If unspecified, defaults to 1200x630 Cult Creative logo
  ogImage,
  // If unspecified, defaults to alt text for said logo
  ogImageAlt,
  // If unspecified, equal to `desc`
  ogDesc
}) => {
  ReactGA.initialize("G-NP1X4Y7S7R");

  const canonicalUrl = `https://www.cultcreativeasia.com${canonicalPath}`;

  return (
    <>
      {/*
      Without the outer braces, React treats `{children}` and its adjacent substring as elements of an array

      Apparently, using a hyphen instead of a pipe as a separator improves SEO:
      https://www.semrush.com/blog/case-study-should-you-add-pipes-or-dashes-to-your-title-ag-/
      */}
      <title>{`${title} - Cult Creative`}</title>
      <meta name="description" content={desc} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Do not insert `<title>` suffix; guidelines recommend that branding be left out */}
      <meta property="og:title" content={ogTitle || title} />
      <meta property="og:type" content={ogType || "website"} />
      <meta property="og:image" content={ogImage || "/images/og-image.png"} />
      {/* https://ogp.me/#structured states that this is optional, but also that it "should" be specified if `og:image` is specified */}
      <meta property="og:image:alt" content={ogImageAlt || "Cult Creative logo"} />
      <meta property="og:url" content={canonicalUrl} />
      {/* This property is optional, but `desc` is a nice default to have */}
      <meta property="og:description" content={ogDesc || desc} />
    </>
  );
};
