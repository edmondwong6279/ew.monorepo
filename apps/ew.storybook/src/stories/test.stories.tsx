import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@repo/ui/card";

const meta = {
  title: "Example/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>Primary Story</>,
    title: "Storybook",
    href: "#",
  },
};

export const Secondary: Story = {
  args: {
    children: <>Secondary Story</>,
    title: "Storybook",
    href: "#",
  },
};
