import styles from './LangSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import Button, { ThemeButton } from 'shared/ui/Button/Button'

interface LangSwitcherProps {
  className?: string
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
  const { t, i18n } = useTranslation()

  const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return <Button
    className={classNames(styles.langSwitcher, {}, [className])}
    theme={ThemeButton.CLEAR}
    onClick={toggle}
  >
    {t('language')}
  </Button>
}

export default LangSwitcher
