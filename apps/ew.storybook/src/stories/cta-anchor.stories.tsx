import type { Meta, StoryObj } from "@storybook/react";
import { CTA as CTAAnchor } from "@repo/ui/cta-anchor";

const meta = {
  title: "Components/CTAAnchor",
  component: CTAAnchor,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CTAAnchor>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>CTAAnchor</>,
    href: "#",
    props: {
      target: "_blank",
    },
  },
};

export const Newtab: Story = {
  args: {
    children: <>CTAAnchor</>,
    href: "#",
    props: {
      target: "_blank",
    },
    newTab: true,
  },
};
