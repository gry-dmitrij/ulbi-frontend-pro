// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { NavBar } from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'widget/NavBar',
  component: NavBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof NavBar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const NavBarLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({}),
  ],
};

export const NavBarDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({}),
  ],
};

export const NavBarAuth: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: { authData: { id: 1, username: 'user' } },
    }),
  ],
};
