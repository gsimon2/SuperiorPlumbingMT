import { render, screen, userEvent } from "@/test-utils/render";
import CareersApplicationForm from "./CareersApplicationForm";

const fetchMock = jest.fn();

function makeFile(name: string, type: string, sizeInBytes?: number) {
   const file = new File(["resume"], name, { type });
   if (sizeInBytes !== undefined) {
      Object.defineProperty(file, "size", { value: sizeInBytes });
   }
   return file;
}

const pdfResume = () => makeFile("resume.pdf", "application/pdf");

function renderForm(userOptions?: Parameters<typeof userEvent.setup>[0]) {
   const utils = render(<CareersApplicationForm />);
   const user = userOptions ? userEvent.setup(userOptions) : utils.user;
   const fileInput = utils.container.querySelector<HTMLInputElement>('input[type="file"]')!;
   return { ...utils, user, fileInput };
}

async function fillRequiredFields(
   user: ReturnType<typeof renderForm>["user"],
   { phone = "(406) 555-1234" } = {}
) {
   await user.selectOptions(
      screen.getByRole("combobox", { name: "Position Applying For" }),
      "Journeyman Plumber"
   );
   await user.type(screen.getByRole("textbox", { name: "Full Name" }), "John Smith");
   await user.type(screen.getByRole("textbox", { name: "Email" }), "john@example.com");
   await user.type(screen.getByRole("textbox", { name: "Phone Number" }), phone);
   await user.type(screen.getByRole("textbox", { name: "Current City" }), "Missoula");
   await user.selectOptions(
      screen.getByRole("combobox", { name: "Current State" }),
      "Montana"
   );
   await user.type(screen.getByRole("spinbutton", { name: "Years of Experience" }), "7");
}

beforeEach(() => {
   global.fetch = fetchMock;
   fetchMock.mockResolvedValue({ ok: true });
});

describe("CareersApplicationForm", () => {
   it("renders the application fields", () => {
      renderForm();

      expect(screen.getByRole("combobox", { name: "Position Applying For" })).toBeRequired();
      expect(screen.getByRole("textbox", { name: "Full Name" })).toBeRequired();
      expect(screen.getByRole("textbox", { name: "Email" })).toBeRequired();
      expect(screen.getByRole("textbox", { name: "Phone Number" })).toBeRequired();
      expect(screen.getByRole("textbox", { name: "Current City" })).toBeRequired();
      expect(screen.getByRole("combobox", { name: "Current State" })).toBeRequired();
      expect(screen.getByRole("spinbutton", { name: "Years of Experience" })).toBeRequired();
      expect(screen.getByRole("button", { name: "Upload Resume" })).toBeInTheDocument();
   });

   it("offers the open positions", () => {
      renderForm();

      const position = screen.getByRole("combobox", { name: "Position Applying For" });
      expect(position).toHaveDisplayValue("Select a position");
      expect(screen.getByRole("option", { name: "Journeyman Plumber" })).toBeInTheDocument();
      expect(
         screen.getByRole("option", { name: "Customer Service Representative" })
      ).toBeInTheDocument();
   });

   it("rejects phone numbers with fewer than 10 digits", async () => {
      const { user, fileInput } = renderForm();
      await fillRequiredFields(user, { phone: "555-1234" });
      await user.upload(fileInput, pdfResume());

      await user.click(screen.getByRole("button", { name: "Submit Application" }));

      expect(await screen.findByRole("alert")).toHaveTextContent("Phone number is required.");
      expect(fetchMock).not.toHaveBeenCalled();
   });

   it("requires a resume before submitting", async () => {
      const { user } = renderForm();
      await fillRequiredFields(user);

      await user.click(screen.getByRole("button", { name: "Submit Application" }));

      expect(await screen.findByRole("alert")).toHaveTextContent("Resume is required.");
      expect(fetchMock).not.toHaveBeenCalled();
   });

   it("shows the attached resume name", async () => {
      const { user, fileInput } = renderForm();

      await user.upload(fileInput, pdfResume());

      expect(screen.getByText("Attached: resume.pdf")).toBeInTheDocument();
   });

   it("accepts Word documents", async () => {
      const { user, fileInput } = renderForm();

      await user.upload(
         fileInput,
         makeFile(
            "resume.docx",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
         )
      );

      expect(screen.getByText("Attached: resume.docx")).toBeInTheDocument();
   });

   it("rejects unsupported resume file types", async () => {
      // Bypass the input's accept filter to exercise the component's own type check.
      const { user, fileInput } = renderForm({ applyAccept: false });

      await user.upload(fileInput, makeFile("resume.txt", "text/plain"));

      expect(screen.getByRole("alert")).toHaveTextContent(
         "Resume must be a PDF or Word document."
      );
      expect(screen.queryByText(/Attached:/)).not.toBeInTheDocument();
   });

   it("rejects resumes larger than 5MB", async () => {
      const { user, fileInput } = renderForm();

      await user.upload(
         fileInput,
         makeFile("big.pdf", "application/pdf", 5 * 1024 * 1024 + 1)
      );

      expect(screen.getByRole("alert")).toHaveTextContent("Resume must be 5MB or smaller.");
      expect(screen.queryByText(/Attached:/)).not.toBeInTheDocument();
   });

   it("submits the application with the resume and shows a confirmation", async () => {
      const { user, fileInput } = renderForm();
      await fillRequiredFields(user);
      await user.upload(fileInput, pdfResume());

      await user.click(screen.getByRole("button", { name: "Submit Application" }));

      expect(
         await screen.findByRole("heading", { name: "Application submitted!" })
      ).toBeInTheDocument();
      expect(fetchMock).toHaveBeenCalledWith(
         "/api/send-application",
         expect.objectContaining({ method: "POST" })
      );

      const body: FormData = fetchMock.mock.calls[0][1].body;
      expect(body.get("position")).toBe("Journeyman Plumber");
      expect(body.get("name")).toBe("John Smith");
      expect(body.get("email")).toBe("john@example.com");
      expect(body.get("phone")).toBe("(406) 555-1234");
      expect(body.get("currentCity")).toBe("Missoula");
      expect(body.get("currentState")).toBe("Montana");
      expect(body.get("yearsExperience")).toBe("7");
      expect((body.get("resume") as File).name).toBe("resume.pdf");
   });

   it("shows an error when the server rejects the application", async () => {
      fetchMock.mockResolvedValue({ ok: false });
      const { user, fileInput } = renderForm();
      await fillRequiredFields(user);
      await user.upload(fileInput, pdfResume());

      await user.click(screen.getByRole("button", { name: "Submit Application" }));

      expect(await screen.findByRole("alert")).toHaveTextContent(
         "There was an error sending your application."
      );
      expect(
         screen.queryByRole("heading", { name: "Application submitted!" })
      ).not.toBeInTheDocument();
      expect(screen.getByRole("button", { name: "Submit Application" })).toBeEnabled();
   });
});
