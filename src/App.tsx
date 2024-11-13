import { Flex, Heading, Spinner, Stack, Table, Text } from "@chakra-ui/react";
import useUsers from "./hooks/useUsers";
import { Status } from "./components/ui/status";
import SearchInput from "./my_components/SearchInput";
import { useState } from "react";
import ThemeToggle from "./my_components/ThemeToggle";
import extractAddress from "./utilities/extractAddress";

const App = () => {
  const { data: contacts, isError, error, isPending } = useUsers();
  const [searchText, setSearchText] = useState("");
  const filteredContacts = contacts?.filter((contact) =>
    contact.name.toLowerCase().startsWith(searchText.toLowerCase())
  );

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
      <Stack direction={{ base: "column" }} m={{ base: 2, sm: 4 }}>
        <Flex
          justify={"space-between"}
          alignItems={"center"}
          gapX={{ base: 2, sm: 7 }}
          mb={{ base: 2, sm: 4 }}
        >
          <Heading size="xl">Contacts</Heading>
          <SearchInput onSearch={(text) => setSearchText(text)} />
          <ThemeToggle />
        </Flex>

        <Table.Root size={{ base: "sm", sm: "lg" }} variant="outline" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Username</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Address</Table.ColumnHeader>
              <Table.ColumnHeader>Phone</Table.ColumnHeader>
              <Table.ColumnHeader>Website</Table.ColumnHeader>
              <Table.ColumnHeader>Company</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {filteredContacts && filteredContacts.length > 0 ? (
              filteredContacts?.map((contact) => (
                <Table.Row key={contact.id}>
                  <Table.Cell>{contact.name}</Table.Cell>
                  <Table.Cell>{contact.username}</Table.Cell>
                  <Table.Cell>{contact.email}</Table.Cell>
                  <Table.Cell>{extractAddress(contact.address)}</Table.Cell>
                  <Table.Cell>{contact.phone}</Table.Cell>
                  <Table.Cell>{contact.website}</Table.Cell>
                  <Table.Cell>{contact.company.name}</Table.Cell>
                </Table.Row>
              ))
            ) : (
              <Table.Row>
                <Table.Cell>No Result</Table.Cell>
                <Table.Cell>No Result</Table.Cell>
                <Table.Cell>No Result</Table.Cell>
                <Table.Cell>No Result</Table.Cell>
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
