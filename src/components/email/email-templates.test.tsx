import { render, screen } from "@testing-library/react";
import { CareersEmailTemplate } from "./careers-email-template";
import { EmailTemplate } from "./contact-email-template";
import { formatPhoneNumber } from "./email-layout";

describe("formatPhoneNumber", () => {
   it.each([
      ["4065500868", "(406) 550-0868"],
      ["406-550-0868", "(406) 550-0868"],
      ["+1 406 550 0868", "(406) 550-0868"],
      ["555-1234", "555-1234"],
   ])("formats %p as %p", (input, expected) => {
      expect(formatPhoneNumber(input)).toBe(expected);
   });
});

describe("EmailTemplate (contact)", () => {
   const props = {
      name: "Jane Doe",
      email: "jane@example.com",
      message: "My sink is leaking.",
   };

   it("renders the sender, message, and a mailto link", () => {
      render(<EmailTemplate {...props} />);

      expect(screen.getByRole("heading", { name: "New website message" })).toBeInTheDocument();
      expect(screen.getByText("My sink is leaking.")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "jane@example.com" })).toHaveAttribute(
         "href",
         "mailto:jane@example.com"
      );
   });

   it("includes a formatted tel link and subject when provided", () => {
      render(<EmailTemplate {...props} phoneNumber="406-550-0868" subject="Leak" />);

      expect(screen.getByRole("link", { name: "(406) 550-0868" })).toHaveAttribute(
         "href",
         "tel:4065500868"
      );
      expect(screen.getByText("Subject")).toBeInTheDocument();
      expect(screen.getByText("Leak")).toBeInTheDocument();
   });

   it("omits the phone and subject rows when not provided", () => {
      render(<EmailTemplate {...props} />);

      expect(screen.queryByText("Phone")).not.toBeInTheDocument();
      expect(screen.queryByText("Subject")).not.toBeInTheDocument();
   });
});

describe("CareersEmailTemplate", () => {
   it("renders the applicant details", () => {
      render(
         <CareersEmailTemplate
            name="John Smith"
            email="john@example.com"
            phoneNumber="(406) 555-1234"
            position="Journeyman Plumber"
            currentCity="Missoula"
            currentState="Montana"
            yearsExperience="7"
         />
      );

      expect(screen.getByRole("heading", { name: "New job application" })).toBeInTheDocument();
      expect(screen.getByText("John Smith applied for Journeyman Plumber.")).toBeInTheDocument();
      expect(screen.getByText("Missoula, Montana")).toBeInTheDocument();
      expect(screen.getByRole("link", { name: "(406) 555-1234" })).toHaveAttribute(
         "href",
         "tel:4065551234"
      );
      expect(screen.getByRole("link", { name: "john@example.com" })).toHaveAttribute(
         "href",
         "mailto:john@example.com"
      );
   });
});
