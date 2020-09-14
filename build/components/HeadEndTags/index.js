/* eslint-disable */
import React, { Fragment } from 'react'
import { FacebookPixel } from '../../common/components'

const HeadEndTags = () => (
  <Fragment>
    {/* START <!-- Global site tag (gtag.js) - Google Analytics -->  */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-136772238-1" preconnect="true"></script>
    <script dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
        function gtag() {
          dataLayer.push(arguments)
        }
        gtag('js', new Date());

        gtag('config', 'UA-136772238-1');
    `}} />
    {/* END <!-- Global site tag (gtag.js) - Google Analytics -->  */}
    <script
      dangerouslySetInnerHTML={{
        __html: `
        (function(h,o,t,j,a,r){
          h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments) };
          h._hjSettings={hjid:1692455,hjsv:6};
          a=o.getElementsByTagName('head')[0];
          r=o.createElement('script');r.async=1;
          r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
          a.appendChild(r);
        })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
      `}} />

    {/* START <!-- Google Tag Manager --> */}
    <script dangerouslySetInnerHTML={{
      __html: `
        (function (w, d, s, l, i) {
          w[l] = w[l] || []; w[l].push({
            'gtm.start':
              new Date().getTime(), event: 'gtm.js'
          }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-KXFHQ42')
      `}} />
    {/* END <!-- End Google Tag Manager -->  */}

    {/* <!-- Facebook Pixel Code --> */}
    <script dangerouslySetInnerHTML={{
      __html: ` !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '457256228159128');
      fbq('track', 'PageView')`
    }} />

    <noscript><img height="1" width="1" style={{ display: 'none' }}
      src="https://www.facebook.com/tr?id=457256228159128&ev=PageView&noscript=1"
    /></noscript>
    {/* <!-- End Facebook Pixel Code --> */}
    <FacebookPixel names={['FACEBOOK_PIXEL_POST_VENTA_09_2020']}/>



  </Fragment >
)

export default HeadEndTags
