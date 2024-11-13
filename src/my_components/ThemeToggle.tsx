import { Icon } from "@chakra-ui/react";
import { Switch } from "@/components/ui/switch";
import { FaMoon, FaSun } from "react-icons/fa";
import { useColorMode } from "@/components/ui/color-mode";

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
      onChange={toggleColorMode}
    />
  );
};

export default ThemeToggle;
