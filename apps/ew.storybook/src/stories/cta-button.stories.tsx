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
  },
};

export const Disabled: Story = {
  args: {
    children: <>Disabled Button</>,
    props: { disabled: true },
  },
};

export const Loading: Story = {
  args: {
    children: <>This is loading</>,
    isLoading: true,
  },
};

export const LoadingAndDisabled: Story = {
  args: {
    children: <>This is loading</>,
    props: { disabled: true },

    isLoading: true,
  },
};
