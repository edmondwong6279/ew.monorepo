import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@repo/ui/button";

const meta = {
  title: "Example/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>Primary Story</>,
    appName: "Storybook",
  },
};

export const Secondary: Story = {
  args: {
    children: <>Secondary Story</>,
    appName: "Storybook",
  },
};
