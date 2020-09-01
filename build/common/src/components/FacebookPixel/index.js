import React from 'react';
/*
* Facebook Pixel Component
* This component contains all Facebook pixels for this website, the prop "Name" handle the pixel to render.
* prop.names: Array
*/
function FacebookPixel({ names }) {

  return (
    <React.Fragment>
      // FACEBOOK_PIXEL_POST_VENTA_09_2020
      {names.includes('FACEBOOK_PIXEL_POST_VENTA_09_2020') && (
        <React.Fragment>
        <script dangerouslySetInnerHTML={{ __html: `!function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '2097279653619932');
        fbq('track', 'PageView')`}} />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
        src="https://www.facebook.com/tr?id=2097279653619932&ev=PageView&noscript=1"
        />`}} />
        <h1>Hi</h1>
        </React.Fragment>
      )
      }
    </React.Fragment>
  )
}

export default {
  FacebookPixel
}