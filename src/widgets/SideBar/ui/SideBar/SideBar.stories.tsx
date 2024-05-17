// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import SideBar from './SideBar';

const meta: Meta<typeof SideBar> = {
  title: 'widget/SideBar',
  component: SideBar,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof SideBar>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const SideBarLight: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const SideBarDark: Story = {
  decorators: [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
      user: {
        authData: {},
      },
    }),
  ],
};

export const SideBarNoAuth: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      user: {},
    }),
  ],
};
