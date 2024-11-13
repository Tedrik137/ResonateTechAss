import { Heading, Stack, Table } from "@chakra-ui/react";
import ThemeToggle from "./my_components/ThemeToggle";
import useUsers from "./hooks/useUsers";

const App = () => {
  const { data: users, isLoading, isError, error } = useUsers();

  return (
    <>
      <ThemeToggle />
      <Stack width="full" gap="5">
        <Heading size="xl">Contacts</Heading>
        <Table.Root size="sm" variant="outline" striped>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>Name</Table.ColumnHeader>
              <Table.ColumnHeader>Email</Table.ColumnHeader>
              <Table.ColumnHeader>Number</Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {users?.map((user) => (
              <Table.Row key={user.id}>
                <Table.Cell>{user.name}</Table.Cell>
                <Table.Cell>{user.email}</Table.Cell>
                <Table.Cell>{user.phone}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table.Root>
      </Stack>
    </>
  );
};

export default App;
