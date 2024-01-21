import {configPlatforms} from "@/config/configPlatforms";
import GamepadButton from "@/components/GamepadButton.vue";

export default {
  title: 'Platform/PlayStation/PS1',
  component: GamepadButton,
  tags: ['autodocs'],
  args: {
    platform: 'playstation',
    button: '',
  },
  argTypes: {
    button: {
      control: {
        type: 'select',
      },
      options: configPlatforms.playstation.buttons,
    },
    size: {
      control: {
        type: 'select',
      },
      options: ['small', 'medium', 'large'],
    },
  },
};

export const Cross = {
  args: {
    button: 'cross',
  },
};

export const Circle = {
  args: {
    button: 'circle',
  },
};

export const Square = {
  args: {
    button: 'square',
  },
};

export const Triangle = {
  args: {
    button: 'triangle',
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

export const L1 = {
  name: "L1",
  args: {
    button: 'l1',
  },
};

export const R1 = {
  name: "R1",
  args: {
    button: 'r1',
  },
};

export const L2 = {
  name: "L2",
  args: {
    button: 'l2',
  },
};

export const R2 = {
  name: "R2",
  args: {
    button: 'r2',
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

export const Select = {
    args: {
        button: 'select',
    },
};

export const Start = {
    args: {
        button: 'start',
    },
};


export const PS = {
    args: {
        button: 'ps',
    },
};
