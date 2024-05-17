import type { Meta, StoryObj } from '@storybook/react';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import avatar from 'shared/assets/tests/images/storybook.jpg';
import { ProfileCard } from './ProfileCard';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfileCard>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const ProfileCardPrimary: Story = {
  args: {
    data: {
      username: 'admin',
      age: 22,
      country: Country.Russia,
      lastname: 'user',
      first: 'user',
      city: 'Moscow',
      currency: Currency.RUB,
      avatar,
    },
  },
};

export { ProfileCardPrimary as ProfileCard };

export const ProfileCardError: Story = {
  args: {
    error: 'error',
  },
};

export const ProfileCardLoading: Story = {
  args: {
    isLoading: true,
  },
};
