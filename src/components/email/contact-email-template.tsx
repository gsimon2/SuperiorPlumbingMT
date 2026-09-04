import * as React from "react";
import {
   DetailRow,
   EmailLayout,
   formatPhoneNumber,
   linkStyle,
} from "./email-layout";

export interface EmailTemplateProps {
   name: string;
   phoneNumber?: string;
   email: string;
   message: string;
   subject?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
   name,
   phoneNumber,
   email,
   message,
   subject,
}) => {
   return (
      <EmailLayout
         title="New website message"
         footerNote="Sent from the contact form on superiorplumbingmt.com."
      >
         <p
            style={{
               margin: "0 0 18px",
               fontSize: 14,
               lineHeight: "22px",
            }}
         >
            {name} submitted a message from the website.
         </p>

         <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            style={{ borderCollapse: "collapse", marginBottom: 18 }}
         >
            <tbody>
               <DetailRow label="From">{name}</DetailRow>
               {!!subject && <DetailRow label="Subject">{subject}</DetailRow>}
               <DetailRow label="Email">
                  <a href={`mailto:${email}`} style={linkStyle}>
                     {email}
                  </a>
               </DetailRow>
               {!!phoneNumber && (
                  <DetailRow label="Phone">
                     <a
                        href={`tel:${phoneNumber.replace(/\D+/g, "")}`}
                        style={linkStyle}
                     >
                        {formatPhoneNumber(phoneNumber)}
                     </a>
                  </DetailRow>
               )}
            </tbody>
         </table>

         <div
            style={{
               margin: "0 0 8px",
               padding: "14px 16px",
               backgroundColor: "#f6f7fb",
               borderLeft: "3px solid #c9a227",
            }}
         >
            <p
               style={{
                  margin: "0 0 8px",
                  fontSize: 12,
                  letterSpacing: "0.04em",
                  textTransform: "uppercase",
                  color: "#6b7280",
               }}
            >
               Message
            </p>
            <p
               style={{
                  margin: 0,
                  fontSize: 14,
                  lineHeight: "22px",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
               }}
            >
               {message}
            </p>
         </div>
      </EmailLayout>
   );
};
