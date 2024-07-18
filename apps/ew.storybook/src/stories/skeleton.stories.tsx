import type { Meta, StoryObj } from "@storybook/react";
import { CardSkeleton } from "@repo/ui/card-skeleton";
import { SkeletonTheme } from "react-loading-skeleton";

const meta = {
  title: "Components/Skeleton",
  component: CardSkeleton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardSkeleton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
  render: () => (
    <SkeletonTheme baseColor="#212121" highlightColor="#ededed">
      <div style={{ width: "100%", minWidth: "500px" }}>
        <CardSkeleton />
      </div>
    </SkeletonTheme>
  ),
};

export const WithImage: Story = {
  args: { withImage: true },
  render: ({ withImage }) => (
    <SkeletonTheme baseColor="#212121" highlightColor="#ededed">
      <div style={{ width: "100%", minWidth: "500px" }}>
        <CardSkeleton withImage={withImage} />
      </div>
    </SkeletonTheme>
  ),
};
