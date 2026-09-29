import { GA_TRACKING_ID, GOOGLE_ADS_CONVERSION_ID, pageview, reportConversion } from "./gtag";

describe("gtag", () => {
   const gtag = jest.fn();

   beforeEach(() => {
      (window as any).gtag = gtag;
   });

   afterEach(() => {
      delete (window as any).gtag;
   });

   it("reports page views to the tracking ID", () => {
      pageview("/contact");

      expect(gtag).toHaveBeenCalledWith("config", GA_TRACKING_ID, {
         page_path: "/contact",
      });
   });

   it("sends a conversion event to Google Ads", () => {
      reportConversion();

      expect(gtag).toHaveBeenCalledWith(
         "event",
         "conversion",
         expect.objectContaining({
            send_to: GOOGLE_ADS_CONVERSION_ID,
            value: 1.0,
            currency: "USD",
         })
      );
   });

   it("does not navigate from the callback when no URL is given", () => {
      const originalHref = window.location.href;
      reportConversion();

      const { event_callback } = gtag.mock.calls[0][2];
      event_callback();

      expect(window.location.href).toBe(originalHref);
   });
});
