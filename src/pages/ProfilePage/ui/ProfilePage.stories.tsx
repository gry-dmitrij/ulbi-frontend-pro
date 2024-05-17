import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { Country } from 'entities/Country';
import { Currency } from 'entities/Currency';
import ProfilePage from './ProfilePage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof ProfilePage> = {
  title: 'pages/ProfilePage',
  component: ProfilePage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ProfilePage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ProfilePageLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator(
      {
        profile: {
          form: {
            username: 'admin',
            age: 22,
            country: Country.Russia,
            lastname: 'user',
            first: 'user',
            city: 'Moscow',
            currency: Currency.RUB,
          },
        },
      },
    ),
  ],
};

export const ProfilePageDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator(
      {},
    ),
  ],
};
