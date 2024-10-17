import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email/contact-email-template";
import { Resend } from "resend";
import { siteTitle, siteURL } from "@/content";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
   if (!req.body.name || !req.body.email || !req.body.message) {
      return res.status(400).json({ error: "Missing required fields" });
   }

   const destinationEmail =
      process.env.NODE_ENV === "production" ? "" : "glen.a.simon@gmail.com";

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
      return res.status(400).json(error);
   }

   res.status(200).json(data);
};

export default sendEmail;
