import { plumbingServices } from "@/content/services";
import { render, screen } from "@/test-utils/render";
import Service, { LinkedService } from "./Service";

describe("Service", () => {
   it("renders the title and description", () => {
      render(<Service title="Drain Cleaning" text="We clear clogs." />);

      expect(screen.getByRole("heading", { name: "Drain Cleaning" })).toBeInTheDocument();
      expect(screen.getByText("We clear clogs.")).toBeInTheDocument();
   });

   it("renders the icon when an image source is provided", () => {
      render(
         <Service
            title="Toilets"
            text="Repairs"
            imageSource="/assets/toilet.svg"
            imageAltText="Toilet icon"
         />
      );

      expect(screen.getByRole("img", { name: "Toilet icon" })).toBeInTheDocument();
   });

   it("omits the icon when no image source is provided", () => {
      render(<Service title="Toilets" text="Repairs" />);

      expect(screen.queryByRole("img")).not.toBeInTheDocument();
   });
});

describe("LinkedService", () => {
   it("links the card to the service detail page", () => {
      const service = plumbingServices[0];
      render(<LinkedService service={service} />);

      const link = screen.getByRole("link");
      expect(link).toHaveAttribute("href", `/services/${service.slug}`);
      expect(link).toContainElement(screen.getByRole("heading", { name: service.title }));
   });
});
