export const headerLogo = "/assets/logo.svg";

export const siteTitle = "Superior Plumbing Service";

export const siteDescription = `
Superior Plumbing Services: Providing top-tier plumbing solutions in Superior, MT, and surrounding areas.
From emergency repairs to installations, our certified experts ensure your plumbing needs are met with professionalism and efficiency.
`;

export const pages: ReadonlyArray<{
   title: string;
   url: string;
}> = [
   { title: "Home", url: "/" },
   { title: "Contact", url: "/contact" },
];

export const ContactInfo = {
   address: {
      text: "",
      href: "",
   },
   phone: {
      text: "(666) 666-6666",
      href: "tel:6666666666",
   },
   email: {
      text: "service@superiorPlumbingMt.com",
      href: "mailto:service@superiorPlumbingMt.com",
   },
   facebook: {
      text: "",
      href: "",
   },
   google: {
      href: "",
   },
   youtube: {
      href: "",
   },
};
