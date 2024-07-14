import type { Meta, StoryObj } from "@storybook/react";
import { CTA as CTAAnchor } from "@repo/ui/cta-anchor";

const meta = {
  title: "Example/CTAAnchor",
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
  render: ({ children, href, props }) => (
    <div style={{ width: "100%" }}>
      <CTAAnchor href={href} {...props}>
        {children}
      </CTAAnchor>
    </div>
  ),
};
