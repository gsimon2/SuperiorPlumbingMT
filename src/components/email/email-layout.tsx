import * as React from "react";

export const brandNavy = "#2b3e8e";
export const brandGold = "#c9a227";
export const emailLogoUrl =
   "https://www.superiorplumbingmt.com/assets/email-logo.png";

const page: React.CSSProperties = {
   margin: 0,
   padding: "24px 12px",
   backgroundColor: "#eef1f6",
   fontFamily: "Arial, Helvetica, sans-serif",
   color: "#1c2434",
};

const card: React.CSSProperties = {
   maxWidth: 600,
   margin: "0 auto",
   backgroundColor: "#ffffff",
   border: "1px solid #d5dbed",
};

const header: React.CSSProperties = {
   padding: "20px 28px 16px",
   textAlign: "center",
   borderBottom: `3px solid ${brandGold}`,
};

const titleStyle: React.CSSProperties = {
   margin: "8px 0 0",
   fontSize: 20,
   lineHeight: "26px",
   fontWeight: 700,
   color: brandNavy,
};

const body: React.CSSProperties = {
   padding: "22px 28px 8px",
};

const footer: React.CSSProperties = {
   padding: "16px 28px 22px",
   fontSize: 12,
   lineHeight: "18px",
   color: "#6b7280",
   borderTop: "1px solid #e6e9f0",
};

export const labelStyle: React.CSSProperties = {
   width: 120,
   padding: "7px 12px 7px 0",
   fontSize: 12,
   lineHeight: "18px",
   color: "#6b7280",
   verticalAlign: "top",
};

export const valueStyle: React.CSSProperties = {
   padding: "7px 0",
   fontSize: 14,
   lineHeight: "20px",
   color: "#1c2434",
   verticalAlign: "top",
};

export const linkStyle: React.CSSProperties = {
   color: brandNavy,
   textDecoration: "underline",
};

export const formatPhoneNumber = (phone: string) => {
   const digits = phone.replace(/\D/g, "");
   if (digits.length === 10) {
      return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
   }
   if (digits.length === 11 && digits.startsWith("1")) {
      return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
   }
   return phone;
};

export const EmailLayout: React.FC<{
   title: string;
   children: React.ReactNode;
   footerNote: string;
}> = ({ title, children, footerNote }) => {
   return (
      <div style={page}>
         <div style={card}>
            <div style={header}>
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img
                  src={emailLogoUrl}
                  alt="Superior Plumbing Service"
                  width={320}
                  height={213}
                  style={{
                     display: "block",
                     margin: "0 auto",
                     width: 160,
                     height: "auto",
                     border: 0,
                     outline: "none",
                  }}
               />
               <h1 style={titleStyle}>{title}</h1>
            </div>
            <div style={body}>{children}</div>
            <div style={footer}>
               {footerNote}
               <br />
               Superior Plumbing Service · Mineral, Sanders &amp; Missoula County
            </div>
         </div>
      </div>
   );
};

export const DetailRow: React.FC<{
   label: string;
   children: React.ReactNode;
}> = ({ label, children }) => (
   <tr>
      <td style={labelStyle}>{label}</td>
      <td style={valueStyle}>{children}</td>
   </tr>
);
