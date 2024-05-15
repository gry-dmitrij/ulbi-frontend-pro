import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Select>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const SelectPrimary: Story = {
  args: {
    label: 'Label',
    options: [
      { value: '1', content: 'Первый пункт' },
      { value: '2', content: 'Второй пункт' },
    ],
  },
};

export { SelectPrimary as Select };
