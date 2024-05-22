import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { memo } from 'react';
import { ArticleDetails } from 'entities/Article';
import { useParams } from 'react-router-dom';
import styles from './ArticleDetailsPage.module.scss';

interface ArticleDetailPageProps {
    className?: string
}

const ArticleDetailsPage = ({ className }: ArticleDetailPageProps) => {
  const { t } = useTranslation();
  const { id } = useParams<{id: string}>();
  const idx = Number(id);

  if (Number.isNaN(idx)) {
    return (
      <div className={classNames('', {}, [className])}>
        {t('article_not_found')}
      </div>
    );
  }
  return (
    <div
      className={classNames(styles.page, {}, [className])}
    >
      <ArticleDetails id={idx} />
    </div>
  );
};

export default memo(ArticleDetailsPage);
