import {configPlatforms} from "@/config/configPlatforms";
import GamepadButton from "@/components/GamepadButton.vue";

export default {
  title: 'Platform/Nintendo/Game Boy Color',
  component: GamepadButton,
  tags: ['autodocs'],
  args: {
    platform: 'nintendo',
    variant: 'gbc',
    button: '',
  },
  argTypes: {
    button: {
      control: {
        type: 'select',
      },
        options: configPlatforms.nintendo.consoles.gbc.buttons
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const A = {
  args: {
    button: 'a',
  },
};

export const B = {
  args: {
    button: 'b',
  },
};

export const Up = {
  args: {
    button: 'arrow-up',
  },
};

export const Down = {
  args: {
    button: 'arrow-down',
  },
};

export const Left = {
  args: {
    button: 'arrow-left',
  },
};

export const Right = {
  args: {
    button: 'arrow-right',
  },
};

export const Select = {
  args: {
    button: 'select',
    variant: 'gbc'
  },
};

export const Start = {
  args: {
    button: 'start',
    variant: 'gbc'
  },
};
