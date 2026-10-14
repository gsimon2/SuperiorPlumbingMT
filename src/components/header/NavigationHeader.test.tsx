import { ContactInfo, pages } from "@/content";
import { reportConversion } from "@/lib/gtag";
import { createMockRouter } from "@/test-utils/router";
import { render, screen, within } from "@/test-utils/render";
import { useRouter } from "next/router";
import NavigationHeader from "./NavigationHeader";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));
jest.mock("@/lib/gtag", () => ({ reportConversion: jest.fn() }));

function renderHeader(pathname = "/") {
   jest.mocked(useRouter).mockReturnValue(createMockRouter({ pathname }));
   return render(<NavigationHeader />);
}

async function openMenu(user: ReturnType<typeof renderHeader>["user"]) {
   await user.click(screen.getByRole("button", { name: "Toggle navigation" }));
   return screen.getByRole("dialog");
}

describe("NavigationHeader", () => {
   it("links the dog mark and wordmark back to the home page", () => {
      renderHeader();

      const homeLinks = screen.getAllByRole("link", { name: "Superior Plumbing Service" });
      expect(homeLinks).toHaveLength(2);
      for (const link of homeLinks) {
         expect(link).toHaveAttribute("href", "/");
      }
   });

   it("renders the desktop navigation with the mobile menu closed", () => {
      renderHeader();

      for (const page of pages) {
         expect(screen.getByRole("link", { name: page.title })).toBeInTheDocument();
      }
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
   });

   it("opens the mobile menu with every page, the call button, and footer links", async () => {
      const { user } = renderHeader();

      const drawer = await openMenu(user);

      for (const page of pages) {
         expect(within(drawer).getByRole("link", { name: page.title })).toHaveAttribute(
            "href",
            page.url
         );
      }
      expect(within(drawer).getByRole("link", { name: "Call now" })).toHaveAttribute(
         "href",
         ContactInfo.phone.href
      );
      expect(within(drawer).getByRole("link", { name: "Privacy Policy" })).toBeInTheDocument();
   });

   it("highlights the current page in the mobile menu", async () => {
      const { user } = renderHeader("/careers");

      const drawer = await openMenu(user);

      expect(within(drawer).getByRole("link", { name: "Careers" })).toHaveAttribute(
         "aria-current",
         "page"
      );
   });

   it("closes the mobile menu after a link is chosen", async () => {
      const { user } = renderHeader();

      const drawer = await openMenu(user);
      await user.click(within(drawer).getByRole("link", { name: "Contact" }));

      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
   });

   it("reports a conversion and closes the menu when Call now is clicked", async () => {
      const { user } = renderHeader();

      const drawer = await openMenu(user);
      await user.click(within(drawer).getByRole("link", { name: "Call now" }));

      expect(reportConversion).toHaveBeenCalledWith(ContactInfo.phone.href);
      expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
   });
});
