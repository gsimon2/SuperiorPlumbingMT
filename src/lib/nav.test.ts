import { isNavActive } from "./nav";

describe("isNavActive", () => {
   it("matches the home link only on the root path", () => {
      expect(isNavActive("/", "/")).toBe(true);
      expect(isNavActive("/services", "/")).toBe(false);
   });

   it("matches an exact path", () => {
      expect(isNavActive("/contact", "/contact")).toBe(true);
   });

   it("matches nested routes under a section", () => {
      expect(isNavActive("/services/drain-unclogging", "/services")).toBe(true);
   });

   it("does not match paths that merely share a prefix", () => {
      expect(isNavActive("/services-extra", "/services")).toBe(false);
      expect(isNavActive("/team", "/contact")).toBe(false);
   });
});
