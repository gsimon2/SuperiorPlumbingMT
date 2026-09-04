"use client";
import { Carousel } from "@mantine/carousel";
import { SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { LinkedService } from "@/components/Service";
import { plumbingServices } from "@/content/services";

export function ServicesShowcase() {
   const isBelowMd = useMediaQuery("(max-width: 61.99em)");

   if (isBelowMd) {
      return (
         <Carousel
            slideSize={{ base: "100%", sm: "50%" }}
            slideGap={0}
            slidesToScroll={1}
            withIndicators
            withControls
            controlSize={42}
            controlsOffset={4}
            loop
            align="start"
            className="services-carousel"
            styles={{
               control: {
                  background: "var(--mantine-color-gold-5)",
                  color: "var(--mantine-color-navy-9)",
                  border: "none",
               },
               indicator: {
                  background: "rgba(255, 255, 255, 0.45)",
                  width: 10,
                  height: 10,
               },
            }}
         >
            {plumbingServices.map((service) => (
               <Carousel.Slide key={service.slug}>
                  <LinkedService service={service} />
               </Carousel.Slide>
            ))}
         </Carousel>
      );
   }

   return (
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
         {plumbingServices.map((service) => (
            <LinkedService key={service.slug} service={service} />
         ))}
      </SimpleGrid>
   );
}
