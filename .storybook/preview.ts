import { themes } from '@storybook/theming';
import DocumentationTemplate from './DocumentationTemplate.mdx';
import "../src/assets/gamepad.scss"

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    docs: {
      theme: themes.dark,
      page: DocumentationTemplate,
    },
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
