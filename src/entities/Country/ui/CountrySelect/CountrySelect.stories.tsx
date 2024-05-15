import type { Meta, StoryObj } from '@storybook/react';
import CountrySelect from './CountrySelect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CountrySelect> = {
  title: 'entities/CountrySelect',
  component: CountrySelect,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CountrySelect>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const CountrySelectPrimary: Story = {

};

export { CountrySelectPrimary as CountrySelect };
