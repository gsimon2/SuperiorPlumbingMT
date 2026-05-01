import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email/contact-email-template";
import { Resend } from "resend";
import { siteTitle, siteURL } from "@/content";
import { getDestinationEmails } from "@/lib/email/destination-emails";
import {
   cleanupUploadedFiles,
   getAttachmentsFromFiles,
   ParsedFormData,
   parseMultipartForm,
} from "@/lib/email/form-data";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
   let parsed: ParsedFormData;
   try {
      parsed = await parseMultipartForm(req);
   } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Error parsing form data" });
   }

   const { fields, files } = parsed;
   const images = getAttachmentsFromFiles(files.images);

   if (!fields.name || !fields.phone || !fields.message) {
      return res.status(400).json({ error: "Missing required fields" });
   }

   try {
      const { data, error } = await resend.emails.send({
         from: `${siteTitle}<${siteURL}@glenasimon.com>`,
         to: getDestinationEmails({
            subject: fields.subject
         }),
         subject: `Website Message - ${fields.subject}`,
         react: EmailTemplate({
            name: fields.name,
            phoneNumber: fields.phone,
            email: fields.email,
            message: fields.message,
            subject: fields.subject,
         }),
         ...(images.length > 0 && {
            attachments: images.map((image) => ({
               content: image.content,
               filename: image.filename,
               type: image.type,
            })),
         }),
      });

      if (error) {
         console.error(error);
         // @ts-ignore - statusCode is not defined on the error object, but is passed along
         return res.status(error?.statusCode ?? "500").json(error);
      }

      return res.status(200).json(data);
   } finally {
      cleanupUploadedFiles(images);
   }
};

export default sendEmail;

export const config = {
   api: {
      // bodyParser: {
      //    sizeLimit: "10mB",
      // },
      bodyParser: false,
   },
};
