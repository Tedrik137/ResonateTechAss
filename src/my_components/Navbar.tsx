import { Box, Flex, Icon } from "@chakra-ui/react";
import SearchInput from "./SearchInput";
import ThemeToggle from "./ThemeToggle";
import { RiContactsBook3Fill } from "react-icons/ri";
import { useColorMode } from "@/components/ui/color-mode";

interface Props {
  setSearchText: (text: string) => void;
}

const Navbar = ({ setSearchText }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <Flex
      justify={"space-between"}
      alignItems={"center"}
      gapX={{ base: 2, sm: 4 }}
      mb={{ base: 2, sm: 3 }}
    >
      <Box display="flex" alignItems="center">
        <Icon
          fontSize="50px"
          color={colorMode == "light" ? "gray.700" : "gray.100"}
          aria-label="Contacts"
        >
          <RiContactsBook3Fill />
        </Icon>
      </Box>
      <SearchInput onSearch={(text) => setSearchText(text)} />
      <ThemeToggle />
    </Flex>
  );
};

export default Navbar;
