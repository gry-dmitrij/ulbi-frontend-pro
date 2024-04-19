import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AppLink, { AppLinkTheme } from './AppLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: {
    theme: AppLinkTheme.PRIMARY,
    to: '/',
  },
  argTypes: {
    theme: {
      type: {
        name: 'enum',
        value: [AppLinkTheme.PRIMARY, AppLinkTheme.SECONDARY],
      },
      name: 'theme',
    },
  },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AppLinkLight: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const AppLinkDark: Story = {
  args: {
    children: 'Text',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
