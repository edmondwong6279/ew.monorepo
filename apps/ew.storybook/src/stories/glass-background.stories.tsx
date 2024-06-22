import type { Meta, StoryObj } from "@storybook/react";
import { GlassBackground } from "@repo/ui/glass-background";

const meta = {
  title: "Example/GlassBackground",
  component: GlassBackground,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof GlassBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#212121",
        position: "relative",
      }}
    >
      <GlassBackground />
    </div>
  ),
};

export const Secondary: Story = {
  args: {
    children: <>Secondary Story</>,
    title: "Storybook",
    href: "#",
  },
};
