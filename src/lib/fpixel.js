// TODO: This Pixel ID is from a testing account, change this (and remove this comment)
export const FB_PIXEL_ID = 1165013624792679;

export const pageview = () => {
  window.fbq("track", "PageView");
};

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name, options = {}) => {
  window.fbq("track", name, options);
};
