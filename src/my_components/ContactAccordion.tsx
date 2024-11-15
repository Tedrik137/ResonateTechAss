import User from "@/entities/User";
import {
  AccordionItemIndicator,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@chakra-ui/react";
import ContactGrid from "./ContactGrid";
import { useColorMode } from "@/components/ui/color-mode";
import { LuChevronDown } from "react-icons/lu";

interface Props {
  filteredContacts: User[];
}

const ContactAccordion = ({ filteredContacts }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <AccordionRoot collapsible variant="outline">
      {filteredContacts.length > 0 ? (
        filteredContacts.map((contact) => (
          <AccordionItem
            key={contact.id}
            value={contact.id.toString()}
            aria-label={contact.name}
          >
            <AccordionItemTrigger
              color={colorMode == "light" ? "gray.700" : "gray.100"}
              aria-label="Expand"
            >
              {contact.name}
              <AccordionItemIndicator ml="auto" mr={4}>
                <LuChevronDown />
              </AccordionItemIndicator>
            </AccordionItemTrigger>
            <AccordionItemContent aria-label={`${contact.name} Information`}>
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
