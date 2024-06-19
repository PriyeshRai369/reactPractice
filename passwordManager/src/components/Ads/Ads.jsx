import React, { useEffect } from "react";

const Ads = () => {
  useEffect(() => {
    const initializeAds = () => {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    };

    const scriptId = "adsbygoogle-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.async = true;
      script.src =
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3485555502925175";
      script.crossOrigin = "anonymous";
      document.head.appendChild(script);

      script.onload = initializeAds;
    } else {
      initializeAds();
    }
  }, []);

  return (
    <div style={{ width: "100%", textAlign: "center" }}>
      <ins
        className="adsbygoogle"
        style={{ display: "block", width: "100%", height: "100px" }}
        data-ad-client="ca-pub-3485555502925175"
        data-ad-slot="1197850142"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </div>
  );
};

export default Ads;
