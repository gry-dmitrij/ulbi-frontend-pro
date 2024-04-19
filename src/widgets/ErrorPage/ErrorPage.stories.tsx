// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
import { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import ErrorPage from 'widgets/ErrorPage/ErrorPage';
import { Theme } from 'app/providers/ThemeProvider';

const meta: Meta<typeof ErrorPage> = {
  title: 'widget/ErrorPage',
  component: ErrorPage,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ErrorPage>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ErrorPageLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ErrorPageDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};
