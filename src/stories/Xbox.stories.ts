import {configPlatforms} from "@/config/configPlatforms";
import GamepadButton from "@/components/GamepadButton.vue";

export default {
  title: 'Platform/Xbox',
  component: GamepadButton,
  tags: ['autodocs'],
  args: {
    platform: 'xbox',
    button: '',
  },
  argTypes: {
    button: {
      control: {
        type: 'select',
      },
      options: configPlatforms.xbox.buttons,
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

export const LB = {
  name: "LB",
  args: {
    button: 'lb',
  },
};

export const RB = {
  name: "RB",
  args: {
    button: 'rb',
  },
};

export const LT = {
  name: "LT",
  args: {
    button: 'lt',
  },
};

export const RT = {
  name: "RT",
  args: {
    button: 'rt',
  },
};

export const L3 = {
  name: "L3",
  args: {
    button: 'l3',
  },
};

export const R3 = {
  name: "R3",
  args: {
    button: 'r3',
  },
};