import { reportConversion } from "@/lib/gtag";
import { createMockRouter } from "@/test-utils/router";
import { render, screen, waitFor } from "@/test-utils/render";
import imageCompression from "browser-image-compression";
import { useRouter } from "next/router";
import ContactForm from "./ContactForm";

jest.mock("next/router", () => ({ useRouter: jest.fn() }));
jest.mock("@/lib/gtag", () => ({ reportConversion: jest.fn() }));
jest.mock("browser-image-compression", () => ({
   __esModule: true,
   default: jest.fn(async (file: File) => file),
}));

const fetchMock = jest.fn();

function makeImage(name: string) {
   return new File(["image-bytes"], name, { type: "image/png" });
}

function renderForm(query: Record<string, string> = {}) {
   jest.mocked(useRouter).mockReturnValue(createMockRouter({ query }));
   const utils = render(<ContactForm />);
   const fileInput = utils.container.querySelector<HTMLInputElement>('input[type="file"]')!;
   return { ...utils, fileInput };
}

async function fillRequiredFields(
   user: ReturnType<typeof renderForm>["user"],
   { phone = "406-555-1234" } = {}
) {
   await user.type(screen.getByRole("textbox", { name: "Name" }), "Jane Doe");
   await user.type(screen.getByRole("textbox", { name: "Phone Number" }), phone);
   await user.type(screen.getByRole("textbox", { name: "Message" }), "My sink is leaking.");
}

beforeEach(() => {
   global.fetch = fetchMock;
   fetchMock.mockResolvedValue({ ok: true });
   let objectUrlId = 0;
   URL.createObjectURL = jest.fn(() => `blob:mock-${++objectUrlId}`);
});

describe("ContactForm", () => {
   it("renders the contact fields and send button", () => {
      renderForm();

      expect(screen.getByRole("textbox", { name: "Name" })).toBeRequired();
      expect(screen.getByRole("textbox", { name: "Phone Number" })).toBeRequired();
      expect(screen.getByRole("textbox", { name: "Email" })).not.toBeRequired();
      expect(screen.getByRole("textbox", { name: "Subject" })).not.toBeRequired();
      expect(screen.getByRole("textbox", { name: "Message" })).toBeRequired();
      expect(screen.getByRole("button", { name: "Send" })).toBeEnabled();
   });

   it("prefills the subject from the URL query", () => {
      renderForm({ subject: "Water heater quote" });

      expect(screen.getByRole("textbox", { name: "Subject" })).toHaveValue(
         "Water heater quote"
      );
   });

   it("truncates long subjects from the URL query to 120 characters", () => {
      renderForm({ subject: "x".repeat(200) });

      expect(screen.getByRole("textbox", { name: "Subject" })).toHaveValue("x".repeat(120));
   });

   it("rejects phone numbers with fewer than 10 digits", async () => {
      const { user } = renderForm();
      await fillRequiredFields(user, { phone: "555-1234" });

      await user.click(screen.getByRole("button", { name: "Send" }));

      expect(await screen.findByRole("alert")).toHaveTextContent("Phone number is required.");
      expect(fetchMock).not.toHaveBeenCalled();
   });

   it("submits the form and shows a confirmation", async () => {
      const { user } = renderForm();
      await fillRequiredFields(user);
      await user.type(screen.getByRole("textbox", { name: "Email" }), "jane@example.com");

      await user.click(screen.getByRole("button", { name: "Send" }));

      expect(await screen.findByRole("heading", { name: "Message sent!" })).toBeInTheDocument();
      expect(fetchMock).toHaveBeenCalledWith(
         "/api/send",
         expect.objectContaining({ method: "POST" })
      );

      const body: FormData = fetchMock.mock.calls[0][1].body;
      expect(body.get("name")).toBe("Jane Doe");
      expect(body.get("phone")).toBe("406-555-1234");
      expect(body.get("email")).toBe("jane@example.com");
      expect(body.get("message")).toBe("My sink is leaking.");
      expect(reportConversion).toHaveBeenCalledTimes(1);
   });

   it("shows an error when the server rejects the message", async () => {
      fetchMock.mockResolvedValue({ ok: false });
      const { user } = renderForm();
      await fillRequiredFields(user);

      await user.click(screen.getByRole("button", { name: "Send" }));

      expect(await screen.findByRole("alert")).toHaveTextContent(
         "There was an error sending your message."
      );
      expect(screen.queryByRole("heading", { name: "Message sent!" })).not.toBeInTheDocument();
      expect(reportConversion).not.toHaveBeenCalled();
      expect(screen.getByRole("button", { name: "Send" })).toBeEnabled();
   });

   describe("image attachments", () => {
      it("previews selected images", async () => {
         const { user, fileInput } = renderForm();

         await user.upload(fileInput, [makeImage("a.png"), makeImage("b.png")]);

         expect(screen.getAllByRole("img", { name: "image to upload" })).toHaveLength(2);
      });

      it("removes an image when its remove button is clicked", async () => {
         const { user, fileInput } = renderForm();
         await user.upload(fileInput, [makeImage("a.png"), makeImage("b.png")]);

         await user.click(screen.getByRole("button", { name: "Remove a.png" }));

         expect(screen.getAllByRole("img", { name: "image to upload" })).toHaveLength(1);
         expect(screen.queryByRole("button", { name: "Remove a.png" })).not.toBeInTheDocument();
         expect(screen.getByRole("button", { name: "Remove b.png" })).toBeInTheDocument();
      });

      it("limits uploads to four images", async () => {
         const { user, fileInput } = renderForm();
         const images = ["1", "2", "3", "4", "5"].map((n) => makeImage(`${n}.png`));

         await user.upload(fileInput, images);

         expect(screen.getByRole("alert")).toHaveTextContent(
            "You can only add up to 4 images."
         );
         expect(screen.getAllByRole("img", { name: "image to upload" })).toHaveLength(4);
      });

      it("compresses and attaches images on submit", async () => {
         const { user, fileInput } = renderForm();
         await fillRequiredFields(user);
         await user.upload(fileInput, [makeImage("a.png"), makeImage("b.png")]);

         await user.click(screen.getByRole("button", { name: "Send" }));

         await waitFor(() => expect(fetchMock).toHaveBeenCalled());
         expect(imageCompression).toHaveBeenCalledTimes(2);
         expect(imageCompression).toHaveBeenCalledWith(
            expect.any(File),
            expect.objectContaining({ maxSizeMB: 2, maxWidthOrHeight: 1920 })
         );

         const body: FormData = fetchMock.mock.calls[0][1].body;
         expect((body.getAll("images") as File[]).map((f) => f.name)).toEqual([
            "a.png",
            "b.png",
         ]);
      });
   });
});
