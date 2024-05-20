// Components for page metadata
// Named after the HTML tag
// Recommended import: `import * as head from "@/app/components/head";`

// Take an attribute instead of `children` because:
// * we don't want to allow the user to pass anything but a string
// * there is no need to type a closing tag
//
// Without the braces, React treats `{children}` and its adjacent substring as elements of an array
//
// Apparently, using a hyphen instead of a pipe as a separator improves SEO:
// https://www.semrush.com/blog/case-study-should-you-add-pipes-or-dashes-to-your-title-ag-/
export const Title = ({ value }) => (
  <title>{`${value} - Cult Creative`}</title>
);
