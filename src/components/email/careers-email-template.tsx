import { siteURL } from "@/content";

const brandNavy = "#2b3e8e";
import * as React from "react";

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
   const logoUrl = `https://${siteURL}/assets/dog_logo_no_background.png`;

   return (
      <div
         style={{
            margin: "0",
            padding: "1.25rem",
            fontFamily: "Arial, Helvetica, sans-serif",
            backgroundColor: "#f4f7fb",
            color: "#1a1a1a",
         }}
      >
         <div
            style={{
               maxWidth: "680px",
               margin: "0 auto",
               borderRadius: "12px",
               border: `1px solid ${brandNavy}`,
               backgroundColor: "#ffffff",
               overflow: "hidden",
            }}
         >
            <div
               style={{
                  padding: "1rem 1.25rem",
                  borderBottom: "1px solid #e9edf3",
                  textAlign: "center",
               }}
            >
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src={logoUrl}
                  alt="Superior Plumbing logo"
                  width={250}
                  height={200}
                  style={{ display: "inline-block", marginBottom: "0.5rem" }}
               />
               <h1
                  style={{
                     margin: "0",
                     fontSize: "1.6rem",
                     fontWeight: 700,
                     color: brandNavy,
                  }}
               >
                  New Careers Application
               </h1>
            </div>

            <div style={{ padding: "1.25rem" }}>
               <p style={{ margin: "0 0 0.75rem 0", fontSize: "1rem" }}>
                  Applicant: <strong>{name}</strong>
               </p>

               <div
                  style={{
                     marginBottom: "1rem",
                     border: "1px solid #e9edf3",
                     borderRadius: "8px",
                     padding: "0.85rem",
                     backgroundColor: "#fafcff",
                  }}
               >
                  <p style={{ margin: "0 0 0.35rem 0" }}>
                     Position: <strong>{position}</strong>
                  </p>
                  <p style={{ margin: "0" }}>
                     Years of Experience: <strong>{yearsExperience}</strong>
                  </p>
               </div>

               <div
                  style={{
                     borderTop: "1px solid #e9edf3",
                     paddingTop: "0.85rem",
                     fontSize: "0.95rem",
                  }}
               >
                  <p style={{ margin: "0 0 0.35rem 0" }}>
                     Name: <strong>{name}</strong>
                  </p>
                  <p style={{ margin: "0 0 0.35rem 0" }}>
                     Email: <a href={`mailto:${email}`}>{email}</a>
                  </p>
                  <p style={{ margin: "0 0 0.35rem 0" }}>
                     Phone:{" "}
                     <a href={`tel:${phoneNumber.replace(/\D+/g, "")}`}>{phoneNumber}</a>
                  </p>
                  <p style={{ margin: "0" }}>
                     Current Location: <strong>{currentCity}, {currentState}</strong>
                  </p>
               </div>
            </div>
         </div>
      </div>
   );
};
