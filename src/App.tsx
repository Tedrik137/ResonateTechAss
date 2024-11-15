import { Spinner, Stack, Text } from "@chakra-ui/react";
import useUsers from "./hooks/useUsers";
import { Status } from "./components/ui/status";
import { useState } from "react";
import ContactAccordion from "./my_components/ContactAccordion";
import Navbar from "./my_components/Navbar";
import { useColorMode } from "./components/ui/color-mode";
import { compare } from "./entities/User";

const App = () => {
  const { data: contacts, isError, isPending } = useUsers();
  const [searchText, setSearchText] = useState("");
  const { colorMode } = useColorMode();

  if (isPending) {
    return (
      <Stack direction="column" m={{ base: 2, sm: 4 }}>
        <Navbar setSearchText={setSearchText} />
        <Spinner size="md" alignSelf="center" mt={4} />
      </Stack>
    );
  }

  if (isError) {
    return (
      <Stack direction="column" m={{ base: 2, sm: 4 }}>
        <Navbar setSearchText={setSearchText} />
        <Status
          fontSize="18px"
          value="error"
          alignSelf="center"
          mt={6}
          color={colorMode == "light" ? "gray.900" : "gray.100"}
        >
          <Text aria-label="Could not fetch contacts at this time. Please try again later.">
            Could not fetch contacts at this time. Please try again later.
          </Text>
        </Status>
      </Stack>
    );
  }

  let filteredContacts = contacts
    .filter((contact) =>
      contact.name.toLowerCase().startsWith(searchText.toLowerCase())
    )
    .sort(compare);

  return (
    <Stack direction="column" m={{ base: 2, sm: 4 }}>
      <Navbar setSearchText={setSearchText} />
      <ContactAccordion filteredContacts={filteredContacts} />
    </Stack>
  );
};

export default App;
