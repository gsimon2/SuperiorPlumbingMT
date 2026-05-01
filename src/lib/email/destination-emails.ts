import { ContactInfo } from "@/content";

interface DestinationEmailOptions {
   subject?: string;
}

export const getDestinationEmails = (
   options?: DestinationEmailOptions
): string[] => {
   const vercelEnv = (process.env.VERCEL_ENV ?? "").toLowerCase();
   const nodeEnv = (process.env.NODE_ENV ?? "").toLowerCase();
   const testerEmail = "glen.a.simon@gmail.com";
   const isLocal = !vercelEnv && (!nodeEnv || nodeEnv === "development");
   const hasTesterKeyword = options?.subject?.toUpperCase().includes("TEST-EMAIL");

   if (isLocal) {
      return [testerEmail];
   }

   if (hasTesterKeyword) {
      return [testerEmail];
   }

   return [ContactInfo.email.text];
};
