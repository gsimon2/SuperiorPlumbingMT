export const headerLogo = "/assets/dog_logo_no_background.png";
export const dogOnlyLogo = "/assets/dog_only_logo.svg";
export const siteTitleLogo = "/assets/superior_plumbing_name_graphic.svg"

export const siteTitle = "Superior Plumbing Service";
export const siteURL = "superiorPlumbingMt.com";
export const siteOrigin = "https://www.superiorplumbingmt.com";

export const siteDescription =
   "Licensed plumbers in Superior, MT serving Mineral, Sanders, and Missoula Counties. Emergency repairs, water heaters, drain cleaning, and remodel plumbing.";

export const googlePlaceId = "ChIJI38X8IHzZm8R8xBNy6v5EhU";
export const reviewsUrl = `https://search.google.com/local/reviews?placeid=${googlePlaceId}`;
export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=Superior+Plumbing+Service&query_place_id=${googlePlaceId}`;

export const pages: ReadonlyArray<{
   title: string;
   url: string;
}> = [
   { title: "Home", url: "/" },
   { title: "Services", url: "/services" },
   { title: "Contact", url: "/contact" },
   { title: "Careers", url: "/careers" },
   { title: "Reviews", url: "/reviews" },
   { title: "Our Team", url: "/team" },
   { title: "FAQ", url: "/faq" },
];

export const footerLinks: ReadonlyArray<{
   title: string;
   url: string;
}> = [{ title: "Privacy Policy", url: "/privacy" }];

export const ContactInfo = {
   address: {
      text: "",
      href: "",
   },
   phone: {
      text: "(406) 550-0868",
      href: "tel:4065500868",
   },
   email: {
      text: "service@superiorPlumbingMt.com",
      href: "mailto:service@superiorPlumbingMt.com",
   },
   applicationEmail: {
      text: "BrodyBarr@superiorPlumbingMt.com",
      href: "mailto:BrodyBarr@superiorPlumbingMt.com",
   },
   facebook: {
      text: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61555851148323&mibextid=qi2Omg",
   },
   google: {
      href: googleMapsUrl,
   },
   rinnai: {
      href: "https://www.rinnai.us/pro/superior-plumbing-service/superior/sanders?guid=120e8584731a7137fddbc6eca9e592613dc62666",
   },
   youtube: {
      href: "",
   },

};
