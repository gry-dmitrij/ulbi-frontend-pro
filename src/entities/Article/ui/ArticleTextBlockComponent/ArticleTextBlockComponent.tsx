import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import Text from 'shared/ui/Text/Text';
import styles from './ArticleTextBlockComponent.module.scss';

interface ArticleTextBlockComponentProps {
  className?: string
  block: ArticleTextBlock
}

const ArticleTextBlockComponent = ({ className, block }: ArticleTextBlockComponentProps) => (
  <div className={classNames('', {}, [className])}>
    {block.title && (
      <Text title={block.title} className={styles.title} />
    )}
    {block.paragraphs.map((paragraph, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <Text key={index} text={paragraph} className={styles.paragraph} />))}
  </div>
);

export default memo(ArticleTextBlockComponent);
