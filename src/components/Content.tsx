import { Paper, PaperProps } from "@mantine/core";
import React from "react";

const Content: React.FC<IContentProps> = ({
   children,
   bold = false,
   style,
   className,
   ...props
}) => {
   return (
      <Paper
         p="xl"
         withBorder={!bold}
         bg={bold ? "navy.6" : "#e3f2fd"}
         c={bold ? "white" : undefined}
         shadow="sm"
         className={className}
         style={{
            position: "relative",
            overflow: "visible",
            ...(bold
               ? { border: "2px solid var(--mantine-color-gold-5)" }
               : {}),
            ...style,
         }}
         {...props}
      >
         {children}
      </Paper>
   );
};

export interface IContentProps extends Omit<PaperProps, "children"> {
   bold?: boolean;
   children?: React.ReactNode;
}

export default Content;
