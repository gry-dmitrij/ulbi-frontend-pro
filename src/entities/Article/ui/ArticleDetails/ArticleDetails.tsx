import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { memo, useCallback, useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hook/useAppDispatch/useAppDispatch';
import { useSelector } from 'react-redux';
import Text, { TextAlign, TextSize } from 'shared/ui/Text/Text';
import Skeleton from 'shared/ui/Skeleton/Skeleton';
import Avatar from 'shared/ui/Avatar/Avatar';
import EyeIcon from 'shared/assets/icons/eye.svg';
import CalendarIcon from 'shared/assets/icons/calendar.svg';
import Icon from 'shared/ui/Icon/Icon';
import ArticleCodeBlockComponent from 'entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent';
import ArticleImageBlockComponent from 'entities/Article/ui/ArticleImageBlockComponent/ArticleImageBlockComponent';
import ArticleTextBlockComponent from 'entities/Article/ui/ArticleTextBlockComponent/ArticleTextBlockComponent';
import styles from './ArticleDetails.module.scss';
import articleDetailsReducer from '../../model/slice/articleDetailsSlice';
import { fetchArticleById } from '../../model/services/fetchArticlById/fetchArticleById';
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from '../../model/selectors/articleDetails';
import { ArticleBlock, ArticleBlockType } from '../../model/types/article';

interface ArticleDetailsProps {
  className?: string
  id: number
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
};

const ArticleDetails = (
  {
    className,
    id,
  }: ArticleDetailsProps,
) => {
  const dispatch = useAppDispatch();
  const { t } = useTranslation();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
    case ArticleBlockType.CODE:
      return (
        <ArticleCodeBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      );
    case ArticleBlockType.IMAGE:
      return (
        <ArticleImageBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      );
    case ArticleBlockType.TEXT:
      return (
        <ArticleTextBlockComponent
          key={block.id}
          className={styles.block}
          block={block}
        />
      );
    default:
      return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== 'storybook') {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton className={styles.avatar} width={200} height={200} border="50%" />
        <Skeleton className={styles.title} width={300} height={24} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        title={t('error_occurred_article')}
        align={TextAlign.CENTER}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </div>
        <Text
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
          size={TextSize.L}
        />
        <div className={styles.articleInfo}>
          <Icon Svg={EyeIcon} className={styles.icon} />
          <Text text={`${article?.views}`} />
        </div>
        <div className={styles.articleInfo}>
          <Icon Svg={CalendarIcon} className={styles.icon} />
          <Text text={article?.created} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.articleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>

  );
};

export default memo(ArticleDetails);
