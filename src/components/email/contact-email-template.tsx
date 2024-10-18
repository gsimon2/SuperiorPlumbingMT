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
}) => (
   <div
      style={{
         padding: "1rem",
         borderRadius: "0.5rem",
         outline: "1px solid",
         outlineColor: "primary.main",
      }}
   >
      <h1
         style={{
            fontWeight: "bold",
            fontSize: "2rem",
            marginBottom: "0.5rem",
         }}
      >
         New website message from {name}.
      </h1>
      {!!subject && (
         <h2 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
            Subject: {subject}
         </h2>
      )}
      <p style={{ fontSize: "1.25rem", marginTop: "0.5rem" }}>Message:</p>
      <p
         style={{
            padding: "1rem",
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
            <p style={{ fontSize: "1rem" }}>Phone Number: {phoneNumber}</p>
         )}
      </div>
   </div>
);
