import { classNames } from 'shared/lib/classNames/classNames';
import { useCallback } from 'react';
import Button, { ButtonTheme } from 'shared/ui/Button/Button';
import CopyIcon from 'shared/assets/icons/copy.svg';
import styles from './Code.module.scss';

interface CodeProps {
  className?: string
  text: string
}

const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);
  return (
    <pre className={classNames(styles.code, {}, [className])}>
      <Button
        className={styles.copyBtn}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <CopyIcon className={styles.copyIcon} />
      </Button>
      <code>
        {text}
      </code>
    </pre>
  );
};

export default Code;
