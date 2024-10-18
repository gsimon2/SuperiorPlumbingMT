import theme from "@/app/theme";
import * as React from "react";
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
      <div
         style={{
            padding: "1rem",
            borderRadius: "0.5rem",
            outline: "1px solid",
            outlineColor: theme.palette.primary.main,
            backgroundColor: theme.palette.background.paper,
            margin: "0.25rem",
         }}
      >
         <h1
            style={{
               fontWeight: "bold",
               fontSize: "2rem",
               marginBottom: "0.5rem",
               marginTop: "0",
            }}
         >
            New website message from {name}.
         </h1>
         {!!subject && (
            <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
               Subject: {subject}
            </h2>
         )}
         <h3
            style={{
               fontSize: "1.25rem",
               marginTop: "0.5rem",
               marginBottom: "0",
            }}
         >
            Message:
         </h3>
         <p
            style={{
               padding: "1rem",
               wordBreak: "break-word",
               margin: "0",
            }}
         >
            {message}
         </p>
         <div>
            <h3
               style={{
                  fontWeight: "bold",
                  fontSize: "1.25rem",
                  marginTop: "0.5rem",
               }}
            >
               Contact Info:
            </h3>
            <p style={{ fontSize: "1rem" }}>Name: {name}</p>
            <p style={{ fontSize: "1rem" }}>Email: {email}</p>
            {!!phoneNumber && (
               <p style={{ fontSize: "1rem" }}>
                  Phone Number:
                  <a href={`tel:${phoneNumber.replace(/\D+/g, "")}`}>
                     {phoneNumber}
                  </a>
               </p>
            )}
         </div>
      </div>
   );
};
