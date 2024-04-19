import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import AboutPage from './AboutPage';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof AboutPage> = {
  title: 'pages/AboutPage',
  component: AboutPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AboutPage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const AboutPageLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const AboutPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
