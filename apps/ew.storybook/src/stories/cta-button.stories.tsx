import type { Meta, StoryObj } from "@storybook/react";
import { CTA as CTAButton } from "@repo/ui/cta-button";

const meta = {
  title: "Example/CTAButton",
  component: CTAButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CTAButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>CTAButton</>,
    onClick: () => {},
  },
};
