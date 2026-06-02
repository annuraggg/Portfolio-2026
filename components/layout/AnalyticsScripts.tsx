import Script from "next/script";

export default function Scripts() {
  return (
    <>
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-N3LPZNS7CC"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N3LPZNS7CC');
          `}
      </Script>

      {/* Session Rewind */}
      <Script id="sessionrewind" strategy="afterInteractive">
        {`
            !(function(o){
              var w=window;
              w.SessionRewindConfig=o;
              var f=document.createElement('script');
              f.async=1;
              f.crossOrigin='anonymous';
              f.src='https://rec.sessionrewind.com/srloader.js';
              var g=document.getElementsByTagName('head')[0];
              g.insertBefore(f,g.firstChild);
            })({
              apiKey: 'YEfQWpLrG24OsxeBjkFZ79xBAXW7f1OS7PLQRaJo',
              startRecording: true,
              userInfo: { userId: 'visitor@anuragsawant.in' }
            });
          `}
      </Script>
    </>
  );
}
