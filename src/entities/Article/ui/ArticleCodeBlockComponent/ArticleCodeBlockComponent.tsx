import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleCodeBlock } from 'entities/Article/model/types/article';
import Code from 'shared/ui/Code/Code';
import styles from './ArticleCodeBlockComponent.module.scss';

interface ArticleCodeBlockComponentProps {
  className?: string
  block: ArticleCodeBlock
}

const ArticleCodeBlockComponent = ({ className, block }: ArticleCodeBlockComponentProps) => (
  <div className={classNames(styles.box, {}, [className])}>
    <Code text={block.code} />
  </div>
);

export default memo(ArticleCodeBlockComponent);
