import Script from "next/script";

export const Snitcher = () => (
  <Script
    id="snitcher-script"
    strategy="beforeInteractive"
    dangerouslySetInnerHTML={{
      __html: `
          !function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
          (s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
          h=n.getElementsByTagName(t)[0];c.src='//snid.snitcher.com/8426934.js';
          h.parentNode.insertBefore(c,h)}(window,document,'snid','script');

          snid('verify', '8426934');
        `,
    }}
  />
);
