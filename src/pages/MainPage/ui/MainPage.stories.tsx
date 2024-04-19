import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import MainPage from './MainPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof MainPage> = {
  title: 'pages/MainPage',
  component: MainPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof MainPage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const MainPageLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const MainPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
