// Miscellaneous helper functions

// `canonicalPath` is the path portion of a page's canonical URL
// Example: if the canonical URL is `http://www.example.com/example/page.html`, then `canonicalPath` is `/example/page.html`
export const makeCanonicalUrl = (canonicalPath) => `https://www.cultcreativeasia.com${canonicalPath}`;
