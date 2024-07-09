import type { Meta, StoryObj } from "@storybook/react";
import { Loading } from "@repo/ui/loading";

const meta = {
  title: "Example/Loading",
  component: Loading,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Loading>;

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
