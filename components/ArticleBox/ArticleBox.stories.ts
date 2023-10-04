import ArticleBox from "./index.vue";
import type { Meta, StoryObj } from '@storybook/vue3';

const meta: Meta<typeof ArticleBox> = {
  component: ArticleBox,
};

export default meta;
type Story = StoryObj<typeof ArticleBox>;

export const Primary: Story = {
  render: (args) => ({
    components: { ArticleBox },
    setup() {
      return { args };
    },
    template: '<ArticleBox v-bind="args" />',
  }),
  args: {
    spanRange: 2,
    article: {
      id: 1,
      title: 'This is a placeholder title',
      category: 'Category'
    }
  },
};