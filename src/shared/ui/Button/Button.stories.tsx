import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ThemeDecorator, ThemeWithInvertedBox } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import Button, { ButtonSize, ButtonTheme } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
  args: {
    children: 'Text',
    // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
    onClick: fn(),
    theme: ButtonTheme.OUTLINE,
    square: false,
    size: ButtonSize.M,
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const ButtonOutlineLight: Story = {
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonOutlineDark: Story = {
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ButtonOutlineL: Story = {
  args: {
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonOutlineXL: Story = {
  args: {
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonClearLight: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeWithInvertedBox(Theme.LIGHT)],
};

export const ButtonClearDark: Story = {
  args: {
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeWithInvertedBox(Theme.DARK)],
};

export const ButtonBackgroundLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonBackgroundDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ButtonBackgroundInvertedLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonBackgroundInvertedDark: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const ButtonSquareMLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonSquareLLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};

export const ButtonSquareXLLight: Story = {
  args: {
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    children: '>',
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(Theme.LIGHT)],
};
