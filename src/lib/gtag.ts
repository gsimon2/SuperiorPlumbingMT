export const GA_TRACKING_ID: string = "AW-11477384494";
export const GOOGLE_ADS_CONVERSION_ID =
   "AW-11477384494/GzNeCJWAiO8bEK766-Aq";

export const pageview = (url: string) => {
   (window as any).gtag("config", GA_TRACKING_ID, {
      page_path: url,
   });
};

export const event = ({
   action,
   category,
   label,
   value,
}: {
   action: string;
   category: string;
   label: string;
   value: number;
}) => {
   (window as any).gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
   });
};

export const reportConversion = (url?: string) => {
   const callback = () => {
      if (typeof url !== "undefined") {
         window.location.href = url;
      }
   };

   (window as any).gtag("event", "conversion", {
      send_to: GOOGLE_ADS_CONVERSION_ID,
      value: 1.0,
      currency: "USD",
      event_callback: callback,
   });
};
