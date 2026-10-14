"use client";
import {
   smsConsentCheckedValue,
   smsConsentFieldName,
} from "@/lib/sms-consent";
import { Anchor, Checkbox, Stack, Text } from "@mantine/core";
import NextLink from "next/link";

const SmsConsentFields: React.FC = () => {
   return (
      <Stack gap="xs" my="md">
         <Checkbox
            name={smsConsentFieldName}
            id="sms-consent-input"
            value={smsConsentCheckedValue}
            defaultChecked={false}
            label="I agree to receive text messages from Superior Plumbing Service LLC."
         />
         <Stack gap={4} pl={36}>
            <Text size="xs" c="gray.7" lh={1.45}>
               By checking this box, you consent to receive service-related
               text messages from Superior Plumbing Service LLC at the mobile
               number provided. Messages may include appointment reminders,
               quotes, scheduling updates, and responses to service requests.
               This consent is for text messaging only and is not required to
               request service or submit this form.
            </Text>
            <Text size="xs" c="gray.7" lh={1.45}>
               Messaging and data rates may apply.
            </Text>
            <Text size="xs" c="gray.7" lh={1.45}>
               Message frequency may vary.
            </Text>
            <Text size="xs" c="gray.7" lh={1.45}>
               Reply STOP to opt out. Reply HELP for help. View our{" "}
               <Anchor component={NextLink} href="/privacy">
                  Privacy Policy
               </Anchor>{" "}
               and{" "}
               <Anchor component={NextLink} href="/terms">
                  SMS Terms
               </Anchor>
               .
            </Text>
         </Stack>
      </Stack>
   );
};

export default SmsConsentFields;
