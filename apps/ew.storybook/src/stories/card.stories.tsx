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
    children: (
      <>
        <h1>Some stuff goes here</h1>
        <aside>Maybe some more stuff here</aside>
        <p>And finally some more stuff here</p>
      </>
    ),
  },
};
