"use client";
import { Carousel } from "@mantine/carousel";
import { SimpleGrid } from "@mantine/core";
import Service from "@/components/Service";
import { plumbingServices } from "@/content/services";

export function ServicesShowcase() {
   return (
      <>
         <Carousel
            hiddenFrom="md"
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

         <SimpleGrid visibleFrom="md" cols={3} spacing="lg">
            {plumbingServices.map((service) => (
               <Service key={service.title} {...service} />
            ))}
         </SimpleGrid>
      </>
   );
}
