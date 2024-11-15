import User from "@/entities/User";
import {
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
import ContactGrid from "./ContactGrid";
import { useColorMode } from "@/components/ui/color-mode";

interface Props {
  filteredContacts: User[];
}

const ContactAccordion = ({ filteredContacts }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <AccordionRoot collapsible>
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <AccordionItem key={contact.id} value={contact.id.toString()}>
            <AccordionItemTrigger
              color={colorMode == "light" ? "gray.700" : "gray.100"}
            >
              {contact.name}
            </AccordionItemTrigger>
            <AccordionItemContent>
              <ContactGrid contact={contact} />
            </AccordionItemContent>
          </AccordionItem>
        ))
      ) : (
        <AccordionItem key={0} value={"0"}>
          <AccordionItemTrigger
            justifyContent="center"
            color={colorMode == "light" ? "gray.700" : "gray.100"}
            fontWeight="semibold"
          >
            No Contacts Found
          </AccordionItemTrigger>
        </AccordionItem>
      )}
    </AccordionRoot>
  );
};

export default ContactAccordion;
