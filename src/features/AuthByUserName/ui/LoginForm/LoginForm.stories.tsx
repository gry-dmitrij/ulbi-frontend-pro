import type { Meta, StoryObj } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import LoginForm from './LoginForm';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof LoginForm>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
const LoginFormPrimary: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '123',
      },
    }),
  ],
};

export { LoginFormPrimary as LoginForm };

export const LoginFormError: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '123',
        error: 'ERROR',
      },
    }),
  ],
};

export const LoginFormLoading: Story = {
  decorators: [
    ThemeDecorator(Theme.LIGHT),
    StoreDecorator({
      loginForm: {
        username: 'admin',
        password: '123',
        isLoading: true,
      },
    }),
  ],
};
