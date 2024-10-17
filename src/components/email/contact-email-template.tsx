import * as React from "react";

export interface EmailTemplateProps {
   name: string;
   phoneNumber?: string;
   email: string;
   message?: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
   name,
}) => (
   <div>
      <h1>Welcome, {name}!</h1>
   </div>
);
