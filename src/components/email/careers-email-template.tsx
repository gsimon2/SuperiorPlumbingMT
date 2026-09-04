import * as React from "react";
import {
   DetailRow,
   EmailLayout,
   formatPhoneNumber,
   linkStyle,
} from "./email-layout";

export interface CareersEmailTemplateProps {
   name: string;
   phoneNumber: string;
   email: string;
   position: string;
   currentCity: string;
   currentState: string;
   yearsExperience: string;
}

export const CareersEmailTemplate: React.FC<
   Readonly<CareersEmailTemplateProps>
> = ({
   name,
   phoneNumber,
   email,
   position,
   currentCity,
   currentState,
   yearsExperience,
}) => {
   return (
      <EmailLayout
         title="New job application"
         footerNote="Sent from the careers form on superiorplumbingmt.com. The applicant's resume is attached."
      >
         <p
            style={{
               margin: "0 0 18px",
               fontSize: 14,
               lineHeight: "22px",
            }}
         >
            {name} applied for {position}.
         </p>

         <table
            role="presentation"
            width="100%"
            cellPadding={0}
            cellSpacing={0}
            style={{ borderCollapse: "collapse", marginBottom: 8 }}
         >
            <tbody>
               <DetailRow label="Applicant">{name}</DetailRow>
               <DetailRow label="Position">{position}</DetailRow>
               <DetailRow label="Experience">{yearsExperience}</DetailRow>
               <DetailRow label="Location">
                  {currentCity}, {currentState}
               </DetailRow>
               <DetailRow label="Email">
                  <a href={`mailto:${email}`} style={linkStyle}>
                     {email}
                  </a>
               </DetailRow>
               <DetailRow label="Phone">
                  <a
                     href={`tel:${phoneNumber.replace(/\D+/g, "")}`}
                     style={linkStyle}
                  >
                     {formatPhoneNumber(phoneNumber)}
                  </a>
               </DetailRow>
            </tbody>
         </table>
      </EmailLayout>
   );
};
