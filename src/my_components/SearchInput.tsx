import { HStack, Input } from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";
import { BsSearch } from "react-icons/bs";
import { useRef } from "react";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchInput = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  return (
    <HStack gap="10" width="full">
      <InputGroup flex="1" startElement={<BsSearch />}>
        <Input
          ref={ref}
          placeholder="Search contacts..."
          onChange={(e) => {
            if (e.target) {
              onSearch(e.target.value);
            }
          }}
          aria-label="Search Contacts..."
        />
      </InputGroup>
    </HStack>
  );
};

export default SearchInput;
