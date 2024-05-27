import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import Text from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import CommentCard from '../CommentCard/CommentCard';
import styles from './CommentList.module.scss';

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

const CommentList = (
  {
    className,
    comments,
    isLoading,
  }: CommentListProps,
) => {
  const { t } = useTranslation();
  return (
    <div
      className={classNames('', {}, [className])}
    >
      {comments?.length
        ? comments.map((comment) => (
          <CommentCard
            key={comment.id}
            className={styles.comment}
            comment={comment}
            isLoading={isLoading}
          />
        ))
        : <Text text={t('no_comments')} />}
    </div>
  );
};

export default CommentList;
