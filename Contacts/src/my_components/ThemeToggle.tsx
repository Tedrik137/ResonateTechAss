import { Switch } from "@/components/ui/switch";
import { useColorMode } from "../components/ui/color-mode";
import { Icon } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <Switch
      colorPalette="blue"
      size="lg"
      trackLabel={{
        on: (
          <Icon color="yellow.400">
            <FaSun />
          </Icon>
        ),
        off: (
          <Icon color="gray.400">
            <FaMoon />
          </Icon>
        ),
      }}
      onCheckedChange={() => {
        toggleColorMode();
      }}
    />
  );
};

export default ThemeToggle;
