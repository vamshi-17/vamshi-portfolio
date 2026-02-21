import { useEffect } from "react";
import { GA_TRACKING_ID } from "../../config/seo.config";

const GoogleAnalytics = () => {
  useEffect(() => {
    console.info("Initializing Google Analytics...");
    if (!GA_TRACKING_ID || GA_TRACKING_ID.startsWith('G-')) {
      console.warn("Google Analytics tracking ID is not set or invalid.");
      return;
    }

    console.info(`Loading Google Analytics with ID: ${GA_TRACKING_ID}`);

    // Load GA script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_TRACKING_ID}');
      console.info("Google Analytics initialized with ID: ${GA_TRACKING_ID}");
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
};

export default GoogleAnalytics;