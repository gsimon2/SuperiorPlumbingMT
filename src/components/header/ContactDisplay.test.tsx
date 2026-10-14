import { ContactInfo } from "@/content";
import { reportConversion } from "@/lib/gtag";
import { render, screen } from "@/test-utils/render";
import ContactDisplay, { DisplayableContacts } from "./ContactDisplay";

jest.mock("@/lib/gtag", () => ({ reportConversion: jest.fn() }));

describe("ContactDisplay", () => {
   it("renders only the requested contact methods", () => {
      render(
         <ContactDisplay
            contactsToDisplay={[DisplayableContacts.phone, DisplayableContacts.email]}
         />
      );

      expect(screen.getByRole("link", { name: ContactInfo.phone.text })).toHaveAttribute(
         "href",
         ContactInfo.phone.href
      );
      expect(screen.getByRole("link", { name: ContactInfo.email.text })).toHaveAttribute(
         "href",
         ContactInfo.email.href
      );
      expect(screen.queryByRole("link", { name: "Facebook Page" })).not.toBeInTheDocument();
   });

   it("renders social links", () => {
      render(
         <ContactDisplay
            contactsToDisplay={[
               DisplayableContacts.facebook,
               DisplayableContacts.google,
               DisplayableContacts.rinnai,
            ]}
         />
      );

      expect(screen.getByRole("link", { name: "Facebook Page" })).toHaveAttribute(
         "href",
         ContactInfo.facebook.href
      );
      expect(screen.getByRole("link", { name: "Google Page" })).toHaveAttribute(
         "href",
         ContactInfo.google.href
      );
      expect(screen.getByRole("link", { name: "Rinnai Page" })).toBeInTheDocument();
   });

   it("reports a conversion when the phone number is clicked", async () => {
      const { user } = render(
         <ContactDisplay contactsToDisplay={[DisplayableContacts.phone]} />
      );

      await user.click(screen.getByRole("link", { name: ContactInfo.phone.text }));

      expect(reportConversion).toHaveBeenCalledWith(ContactInfo.phone.href);
   });

   it("does not report a conversion for email clicks", async () => {
      const { user } = render(
         <ContactDisplay contactsToDisplay={[DisplayableContacts.email]} />
      );

      await user.click(screen.getByRole("link", { name: ContactInfo.email.text }));

      expect(reportConversion).not.toHaveBeenCalled();
   });
});
