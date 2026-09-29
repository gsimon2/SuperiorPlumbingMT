import { createMockRouter } from "@/test-utils/router";
import { render, screen } from "@/test-utils/render";
import { useRouter } from "next/router";
import DesktopNavMenu from "./DesktopNavMenu";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));

const pages = [
   { title: "Home", url: "/" },
   { title: "Services", url: "/services" },
   { title: "Contact", url: "/contact" },
];

function renderAt(pathname: string) {
   jest.mocked(useRouter).mockReturnValue(createMockRouter({ pathname }));
   return render(<DesktopNavMenu pages={pages} />);
}

describe("DesktopNavMenu", () => {
   it("renders a link for every page", () => {
      renderAt("/");

      for (const page of pages) {
         expect(screen.getByRole("link", { name: page.title })).toHaveAttribute(
            "href",
            page.url
         );
      }
   });

   it("marks only the current page as active", () => {
      renderAt("/contact");

      expect(screen.getByRole("link", { name: "Contact" })).toHaveAttribute(
         "aria-current",
         "page"
      );
      expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
      expect(screen.getByRole("link", { name: "Services" })).not.toHaveAttribute(
         "aria-current"
      );
   });

   it("keeps a section active on its nested routes", () => {
      renderAt("/services/drain-unclogging");

      expect(screen.getByRole("link", { name: "Services" })).toHaveAttribute(
         "aria-current",
         "page"
      );
      expect(screen.getByRole("link", { name: "Home" })).not.toHaveAttribute("aria-current");
   });
});
