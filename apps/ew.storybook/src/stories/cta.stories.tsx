import type { Meta, StoryObj } from "@storybook/react";
import { CTA } from "@repo/ui/cta";

const meta = {
  title: "Example/CTA",
  component: CTA,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CTA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: <>CTA</>,
    href: "#",
    props: {
      target: "_blank",
    },
  },
};
