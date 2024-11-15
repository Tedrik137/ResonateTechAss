import { Spinner, Stack, Text } from "@chakra-ui/react";
import useUsers from "./hooks/useUsers";
import { Status } from "./components/ui/status";
import { useState } from "react";
import ContactAccordion from "./my_components/ContactAccordion";
import Navbar from "./my_components/Navbar";

const App = () => {
  const { data: contacts, isError, error, isPending } = useUsers();
  const [searchText, setSearchText] = useState("");

  if (isPending) {
    return <Spinner></Spinner>;
  }
  if (isError) {
    return (
      <Status value="error">
        <Text>{error.message}</Text>
      </Status>
    );
  }

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

  return (
    <Stack direction="column" m={{ base: 2, sm: 4 }}>
      <Navbar setSearchText={setSearchText} />
      <ContactAccordion filteredContacts={filteredContacts} />
    </Stack>
  );
};

export default App;
