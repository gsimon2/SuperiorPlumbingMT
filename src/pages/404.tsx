import Content from "@/components/Content";
import MainContentWrapper from "@/components/MainContentWrapper";
import SeoHead from "@/components/SeoHead";
import { siteTitle } from "@/content";
import { Button, Text, Title } from "@mantine/core";
import NextLink from "next/link";

export default function NotFoundPage() {
   return (
      <>
         <SeoHead
            title={`Page Not Found | ${siteTitle}`}
            description="That page is not on the Superior Plumbing Service website. Head home or contact us for plumbing help in Western Montana."
            path="/404"
            noIndex
         />
         <MainContentWrapper>
            <Content>
               <Title order={1} mb="sm">
                  Page not found
               </Title>
               <Text mb="lg" maw={560}>
                  The page you requested does not exist. You can return home or
                  contact us for plumbing service in Mineral, Sanders, and
                  Missoula Counties.
               </Text>
               <Button component={NextLink} href="/" mr="sm">
                  Back home
               </Button>
               <Button component={NextLink} href="/contact" variant="outline">
                  Contact us
               </Button>
            </Content>
         </MainContentWrapper>
      </>
   );
}
