"use client";
import { Carousel } from "@mantine/carousel";
import { SimpleGrid } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Service from "@/components/Service";
import { plumbingServices } from "@/content/services";

const serviceCards = plumbingServices.map((service) => (
   <Service key={service.title} {...service} />
));

export function ServicesShowcase() {
   const isBelowMd = useMediaQuery("(max-width: 61.99em)");

   if (isBelowMd) {
      return (
         <Carousel
            slideSize={{ base: "100%", sm: "50%" }}
            slideGap="md"
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
               <Carousel.Slide key={service.title}>
                  <Service {...service} />
               </Carousel.Slide>
            ))}
         </Carousel>
      );
   }

   return (
      <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
         {serviceCards}
      </SimpleGrid>
   );
}
