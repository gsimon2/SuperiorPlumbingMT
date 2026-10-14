import { ContactInfo } from "@/content";
import { getDestinationEmails } from "./destination-emails";

const testerEmail = "glen.a.simon@gmail.com";

describe("getDestinationEmails", () => {
   const originalEnv = process.env;

   function setEnv(env: { VERCEL_ENV?: string; NODE_ENV: NodeJS.ProcessEnv["NODE_ENV"] }) {
      process.env = { ...originalEnv, ...env };
      if (env.VERCEL_ENV === undefined) delete process.env.VERCEL_ENV;
   }

   afterEach(() => {
      process.env = originalEnv;
   });

   it("routes local development mail to the tester", () => {
      setEnv({ NODE_ENV: "development" });

      expect(getDestinationEmails({ email: "owner@example.com" })).toEqual([testerEmail]);
   });

   it("routes mail with the TEST-EMAIL keyword to the tester in production", () => {
      setEnv({ VERCEL_ENV: "production", NODE_ENV: "production" });

      expect(getDestinationEmails({ subject: "hello test-email" })).toEqual([testerEmail]);
   });

   it("uses the provided destination in production", () => {
      setEnv({ VERCEL_ENV: "production", NODE_ENV: "production" });

      expect(getDestinationEmails({ email: "owner@example.com" })).toEqual([
         "owner@example.com",
      ]);
   });

   it("falls back to the service inbox in production", () => {
      setEnv({ VERCEL_ENV: "production", NODE_ENV: "production" });

      expect(getDestinationEmails()).toEqual([ContactInfo.email.text]);
   });
});
