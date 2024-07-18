import type { Preview } from "@storybook/react";
import "@repo/ui/styles.css";
import "react-loading-skeleton/dist/skeleton.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: "default",
      values: [
        {
          name: "default",
          value: "#212121",
        },
        {
          name: "light",
          value: "#ededed",
        },
      ],
    },
  },
};

export default preview;
