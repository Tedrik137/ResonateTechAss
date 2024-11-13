import { Flex, Heading, Spinner, Stack, Table, Text } from "@chakra-ui/react";
import useUsers from "./hooks/useUsers";
import { Status } from "./components/ui/status";
import SearchInput from "./my_components/SearchInput";
import { useState } from "react";
import ThemeToggle from "./my_components/ThemeToggle";

const App = () => {
  const { data: contacts, isError, error, isPending } = useUsers();
  const [searchText, setSearchText] = useState("");
  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().startsWith(searchText.toLowerCase())
  );
  console.log(filteredContacts);

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

  return (
    <>
      <Stack direction={{ base: "column" }}>
        <Flex justify={"space-between"}>
          <Heading size="xl">Contacts</Heading>
          <ThemeToggle />
        </Flex>

        <SearchInput onSearch={(text) => setSearchText(text)} />
        <Table.Root size="sm" variant="outline" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Number</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredContacts && filteredContacts.length > 0 ? (
              filteredContacts?.map((contact) => (
                <Table.Row key={contact.id}>
                  <Table.Cell>{contact.name}</Table.Cell>
                  <Table.Cell>{contact.email}</Table.Cell>
                  <Table.Cell>{contact.phone}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell>No Result</Table.Cell>
                <Table.Cell>No Result</Table.Cell>
                <Table.Cell>No Result</Table.Cell>
              </Table.Row>
            )}
          </Table.Body>
        </Table.Root>
      </Stack>
    </>
  );
};

export default App;
