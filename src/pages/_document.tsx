import {
   DocumentHeadTags,
   DocumentHeadTagsProps,
   documentGetInitialProps,
} from "@mui/material-nextjs/v14-pagesRouter";
import {
   DocumentContext,
   DocumentProps,
   Head,
   Html,
   Main,
   NextScript,
} from "next/document";

export default function MyDocument(
   props: DocumentProps & DocumentHeadTagsProps
) {
   return (
      <Html lang="en">
         <Head>
            <DocumentHeadTags {...props} />
            <meta name="description" content="site description" />
            <link
               rel="icon"
               href="/assets/plumber.svg"
               type="image/<generated>"
               sizes="<generated>"
            />
         </Head>
         <body style={{ margin: 0 }}>
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}

MyDocument.getInitialProps = async (ctx: DocumentContext) => {
   const finalProps = await documentGetInitialProps(ctx);
   return finalProps;
};
