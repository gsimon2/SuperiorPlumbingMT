import formidable, { File as FormidableFile } from "formidable";
import fs from "fs";
import type { NextApiRequest } from "next";

export interface ParsedFormData {
   fields: Record<string, string>;
   files: Record<string, FormidableFile[]>;
}

export interface UploadedAttachment {
   content: Buffer;
   filename: string;
   type: string;
   filepath: string;
}

const toArray = <T>(value: T | T[] | undefined): T[] => {
   if (!value) return [];
   return Array.isArray(value) ? value : [value];
};

export const parseMultipartForm = async (
   req: NextApiRequest
): Promise<ParsedFormData> => {
   const form = formidable({ allowEmptyFiles: false, minFileSize: 1 });
   const [rawFields, rawFiles] = await form.parse(req);

   const fields = Object.fromEntries(
      Object.entries(rawFields).map(([key, value]) => [key, value?.[0] ?? ""])
   );

   const files = Object.fromEntries(
      Object.entries(rawFiles).map(([key, value]) => [key, toArray(value)])
   );

   return { fields, files };
};

export const getAttachmentsFromFiles = (
   files: FormidableFile[] | undefined
): UploadedAttachment[] => {
   return toArray(files)
      .filter((file) => file.size > 0)
      .map((file) => ({
         content: fs.readFileSync(file.filepath),
         filename: file.originalFilename ?? "attachment",
         type: file.mimetype ?? "application/octet-stream",
         filepath: file.filepath,
      }));
};

export const cleanupUploadedFiles = (
   attachments: Pick<UploadedAttachment, "filepath">[]
) => {
   for (const file of attachments) {
      if (fs.existsSync(file.filepath)) {
         fs.unlinkSync(file.filepath);
      }
   }
};
