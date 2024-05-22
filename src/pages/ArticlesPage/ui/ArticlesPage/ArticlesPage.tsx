import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import styles from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}

const ArticlesPage = ({ className }: ArticlesPageProps) => (
  <div
    className={classNames(styles.page, {}, [className])}
  />
);

export default memo(ArticlesPage);
