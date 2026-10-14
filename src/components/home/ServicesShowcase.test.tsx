import { plumbingServices } from "@/content/services";
import { render, screen, waitFor } from "@/test-utils/render";
import { ServicesShowcase } from "./ServicesShowcase";

function setViewportBelowMd(matches: boolean) {
   jest.mocked(window.matchMedia).mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn(),
   }));
}

describe("ServicesShowcase", () => {
   it("renders every service as a link to its page on desktop", () => {
      setViewportBelowMd(false);
      render(<ServicesShowcase />);

      for (const service of plumbingServices) {
         expect(
            screen.getByRole("link", { name: new RegExp(service.title) })
         ).toHaveAttribute("href", `/services/${service.slug}`);
      }
      expect(document.querySelector(".services-carousel")).not.toBeInTheDocument();
   });

   it("switches to a carousel on smaller screens", async () => {
      setViewportBelowMd(true);
      render(<ServicesShowcase />);

      await waitFor(() =>
         expect(document.querySelector(".services-carousel")).toBeInTheDocument()
      );
      expect(screen.getAllByRole("link")).toHaveLength(plumbingServices.length);
   });
});
