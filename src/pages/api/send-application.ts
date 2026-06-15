import { CareersEmailTemplate } from "@/components/email/careers-email-template";
import { ContactInfo, siteTitle, siteURL } from "@/content";
import { getDestinationEmails } from "@/lib/email/destination-emails";
import {
   cleanupUploadedFiles,
   getAttachmentsFromFiles,
   ParsedFormData,
   parseMultipartForm,
} from "@/lib/email/form-data";
import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendApplication = async (req: NextApiRequest, res: NextApiResponse) => {
   let parsed: ParsedFormData;
   try {
      parsed = await parseMultipartForm(req);
   } catch (e) {
      console.error(e);
      return res.status(500).json({ error: "Error parsing form data" });
   }

   const { fields, files } = parsed;
   const attachments = getAttachmentsFromFiles(files.resume).slice(0, 1);

   if (
      !fields.name ||
      !fields.email ||
      !fields.phone ||
      !fields.currentCity ||
      !fields.currentState ||
      !fields.position ||
      !fields.yearsExperience ||
      attachments.length === 0
   ) {
      cleanupUploadedFiles(attachments);
      return res.status(400).json({ error: "Missing required fields" });
   }

   try {
      const subject = `Website Job Application - ${fields.position}`;
      const { data, error } = await resend.emails.send({
         from: `${siteTitle}<${siteURL}@glenasimon.com>`,
         to: getDestinationEmails({
            subject,
            email: ContactInfo.applicationEmail.text,
         }),
         subject,
         react: CareersEmailTemplate({
            name: fields.name,
            email: fields.email,
            phoneNumber: fields.phone,
            position: fields.position,
            currentCity: fields.currentCity,
            currentState: fields.currentState,
            yearsExperience: fields.yearsExperience,
         }),
         ...(attachments.length > 0 && {
            attachments: attachments.map((file) => ({
               content: file.content,
               filename: file.filename,
               type: file.type,
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
      cleanupUploadedFiles(attachments);
   }
};

export default sendApplication;

export const config = {
   api: {
      bodyParser: false,
   },
};
