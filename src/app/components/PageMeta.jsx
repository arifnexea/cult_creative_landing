// Component for page metadata and initializing Google Analytics

import ReactGA from "react-ga4";

// Take attributes instead of `children` because:
// * we don't want to allow the user to pass anything but a string
// * there is no need to type a closing tag
export const PageMeta = ({ title, desc }) => {
  // This measurement ID is linked to the Google Analytics account for ljcnexea@m.nexea.co
  // TODO: Change it once the main Analytics account has been set up
  // ReactGA.initialize("G-DQ9HQYL7Y2");
  ReactGA.initialize("G-WDLBYR1ETY");

  return (
    <>
      {/*
      Without the outer braces, React treats `{children}` and its adjacent substring as elements of an array

      Apparently, using a hyphen instead of a pipe as a separator improves SEO:
      https://www.semrush.com/blog/case-study-should-you-add-pipes-or-dashes-to-your-title-ag-/
      */}
      <title>{`${title} - Cult Creative`}</title>
      <meta name="description" content={desc} />
    </>
  );
};

export default PageMeta;
