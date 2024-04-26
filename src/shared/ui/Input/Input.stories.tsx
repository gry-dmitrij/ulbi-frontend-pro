import type { Meta, StoryObj } from '@storybook/react';
import { useArgs } from '@storybook/preview-api';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Input from './Input';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const InputPrimary: Story = {
  args: {
    placeholder: 'Type text',
    value: '123',
    autoFocus: true,
  },
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();
    const onChange = (val: string) => {
      updateArgs({ value: val });
    };
    return <Input {...args} value={value} onChange={onChange} />;
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export { InputPrimary as Input };
