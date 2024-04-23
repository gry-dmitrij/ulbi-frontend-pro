import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import styles from './ThemeDecorator.module.scss';

export const ThemeDecorator = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme} ${styles.box}`}>
    <Story />
  </div>
);

export const ThemeWithInvertedBox = (theme: Theme): Decorator => (Story) => (
  <div className={`app ${theme} ${styles.box}`}>
    <div className={styles.invertedBox}>
      <Story />
    </div>
  </div>
);
