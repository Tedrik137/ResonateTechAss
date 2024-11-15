import { useColorMode } from "@/components/ui/color-mode";
import User from "@/entities/User";
import extractAddress from "@/utilities/extractAddress";
import { Flex, GridItem, Icon, SimpleGrid } from "@chakra-ui/react";
import { BiSolidUser } from "react-icons/bi";
import { FaGlobe, FaHouse } from "react-icons/fa6";
import { HiBuildingOffice } from "react-icons/hi2";
import { MdEmail, MdLocalPhone } from "react-icons/md";

interface Props {
  contact: User;
}

const ContactGrid = ({ contact }: Props) => {
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid
      templateColumns={{
        md: "repeat(2, max-content)",
        lg: "repeat(3, max-content)",
        xl: "repeat(6, max-content)",
      }}
      gapX={{ md: 10, lg: 10, xl: 5 }}
      gapY={{ base: 3, md: 5, lg: 3 }}
      mb={2}
      color={colorMode == "light" ? "gray.700" : "gray.100"}
    >
      <GridItem>
        <Flex alignItems="center" gapX={{ base: 3, xl: 2 }}>
          <Icon fontSize="lg" color="green.600">
            <MdLocalPhone />
          </Icon>
          {contact.phone}
        </Flex>
      </GridItem>
      <GridItem>
        <Flex alignItems="center" gapX={{ base: 3, xl: 2 }}>
          <Icon fontSize="lg" color="yellow.600">
            <BiSolidUser />
          </Icon>
          {contact.username}
        </Flex>
      </GridItem>
      <GridItem>
        <Flex alignItems="center" gapX={{ base: 3, xl: 2 }}>
          <Icon fontSize="lg" color="cyan.600">
            <MdEmail />
          </Icon>
          {contact.email}
        </Flex>
      </GridItem>
      <GridItem>
        <Flex alignItems="center" gapX={{ base: 3, xl: 2 }}>
          <Icon fontSize="lg" color="red.400">
            <FaHouse />
          </Icon>
          {extractAddress(contact.address)}
        </Flex>
      </GridItem>
      <GridItem>
        <Flex alignItems="center" gapX={{ base: 3, xl: 2 }}>
          <Icon fontSize="lg" color="purple.600">
            <FaGlobe />
          </Icon>
          {contact.website}
        </Flex>
      </GridItem>
      <GridItem>
        <Flex alignItems="center" gapX={{ base: 3, xl: 2 }}>
          <Icon fontSize="lg" color="orange.800">
            <HiBuildingOffice />
          </Icon>
          {contact.company.name}
        </Flex>
      </GridItem>
    </SimpleGrid>
  );
};

export default ContactGrid;
