import type { NextApiRequest, NextApiResponse } from "next";
import { EmailTemplate } from "../../components/email/contact-email-template";
import { Resend } from "resend";
import { ContactInfo, siteTitle, siteURL } from "@/content";
import formidable from "formidable";
import fs from "fs";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (req: NextApiRequest, res: NextApiResponse) => {
   const form = formidable({ allowEmptyFiles: false, minFileSize: 1 });

   let fields;
   let files;
   try {
      [fields, files] = await form.parse(req);
   } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Error parsing form data" });
   }

   // Transform fields into string values instead of string arrays
   fields = Object.fromEntries(
      Object.entries(fields).map(([key, value]) => [key, value ? value[0] : ""])
   );

   // Transform files into objects with content property
   const images = Object.entries(files.images ?? [])
      .filter(([key, file]) => file.size > 0)
      .map(([key, value]) => ({
         ...value,
         content: fs.readFileSync(value.filepath),
      }));

   if (!fields.name || !fields.phone || !fields.message) {
      return res.status(400).json({ error: "Missing required fields" });
   }

   const getDestinationEmails = (): string[] => {
      const env = process.env.VERCEL_ENV ?? process.env.NODE_ENV;

      if (env.toLowerCase() === "production") {
         return [ContactInfo.email.text];
      } else if (fields.subject?.toLowerCase().includes("brody")) {
         return ["glen.a.simon@gmail.com", ContactInfo.email.text];
      }
      return ["glen.a.simon@gmail.com"];
   };

   const { data, error } = await resend.emails.send({
      from: `${siteTitle}<${siteURL}@glenasimon.com>`,
      to: getDestinationEmails(),
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
            filename: image.originalFilename ?? "image.png",
            type: image.mimetype,
         })),
      }),
   });

   // Clean up temporary files
   if (images.length > 0) {
      for (let img of images) fs.unlinkSync(img.filepath);
   }

   if (error) {
      console.error(error);
      // @ts-ignore - statusCode is not defined on the error object, but is passed along
      return res.status(error?.statusCode ?? "500").json(error);
   }

   res.status(200).json(data);
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
