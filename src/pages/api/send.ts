import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email/contact-email-template";
import { Resend } from "resend";
import { ContactInfo, siteTitle, siteURL } from "@/content";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
   if (!req.body.name || !req.body.email || !req.body.message) {
      return res.status(400).json({ error: "Missing required fields" });
   }

   const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV;
   const destinationEmail = env.toLowerCase() === "production" ? ContactInfo.email.text : "glen.a.simon@gmail.com";

   const { data, error } = await resend.emails.send({
      from: `${siteTitle}<${siteURL}@resend.dev>`,
      to: [destinationEmail],
      subject: `Webiste Inquiry - ${req.body.subject}`,
      react: EmailTemplate({
         name: req.body.name,
         phoneNumber: req.body.phone,
         email: req.body.email,
         message: req.body.message,
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
