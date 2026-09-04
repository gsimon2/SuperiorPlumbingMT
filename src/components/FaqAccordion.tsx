"use client";
import { homeFaqs } from "@/content/services";
import { Accordion, Text } from "@mantine/core";

export function FaqAccordion() {
   return (
      <Accordion variant="separated" radius="md" chevronPosition="right">
         {homeFaqs.map((faq) => (
            <Accordion.Item key={faq.id} value={faq.id}>
               <Accordion.Control>
                  <Text fw={600} c="navy.9">
                     {faq.question}
                  </Text>
               </Accordion.Control>
               <Accordion.Panel>
                  <Text c="dark.6" lh={1.7}>
                     {faq.answer}
                  </Text>
               </Accordion.Panel>
            </Accordion.Item>
         ))}
      </Accordion>
   );
}
