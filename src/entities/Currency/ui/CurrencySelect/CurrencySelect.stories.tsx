import type { Meta, StoryObj } from '@storybook/react';
import CurrencySelect from './CurrencySelect';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof CurrencySelect> = {
  title: 'entities/CurrencySelect',
  component: CurrencySelect,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof CurrencySelect>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const CurrencySelectPrimary: Story = {

};

export { CurrencySelectPrimary as CurrencySelect };
