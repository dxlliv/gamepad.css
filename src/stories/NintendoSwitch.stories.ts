import {configPlatforms} from "@/config/configPlatforms";
import GamepadButton from "@/components/GamepadButton.vue";

export default {
  title: 'Platform/Nintendo/Switch',
  component: GamepadButton,
  tags: ['autodocs'],
  args: {
    platform: 'nintendo',
    variant: 'switch',
    button: '',
  },
  argTypes: {
    button: {
      control: {
        type: 'select',
      },
      options: configPlatforms.nintendo.consoles.switch.buttons
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

export const X = {
  args: {
    button: 'x',
  },
};

export const Y = {
  args: {
    button: 'y',
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

export const ZL = {
  name: "ZL",
  args: {
    button: 'zl',
  },
};

export const ZR = {
  name: "ZR",
  args: {
    button: 'zr',
  },
};

export const L = {
  name: "L",
  args: {
    button: 'l',
  },
};

export const R = {
  name: "R",
  args: {
    button: 'r',
  },
};
