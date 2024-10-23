import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email/contact-email-template";
import { Resend } from "resend";
import { ContactInfo, siteTitle, siteURL } from "@/content";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
   if (
      !req.body.name ||
      !(req.body.phone || req.body.email) ||
      !req.body.message
   ) {
      return res.status(400).json({ error: "Missing required fields" });
   }

   const getDestinationEmails = (): string[] => {
      const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV;

      if (env.toLowerCase() === "production") {
         return [ContactInfo.email.text];
      } else if (req.body.subject.toLowerCase().includes("brody")) {
         return ["glen.a.simon@gmail.com", ContactInfo.email.text];
      }
      return ["glen.a.simon@gmail.com"];
   };

   const { data, error } = await resend.emails.send({
      from: `${siteTitle}<${siteURL}@glenasimon.com>`,
      to: getDestinationEmails(),
      subject: `Website Message - ${req.body.subject}`,
      react: EmailTemplate({
         name: req.body.name,
         phoneNumber: req.body.phone,
         email: req.body.email,
         message: req.body.message,
         subject: req.body.subject,
      }),
   });

   if (error) {
      console.error(error);
      // @ts-ignore - statusCode is not defined on the error object, but is passed along
      return res.status(error?.statusCode ?? "500").json(error);
   }

   res.status(200).json(data);
};

export default sendEmail;