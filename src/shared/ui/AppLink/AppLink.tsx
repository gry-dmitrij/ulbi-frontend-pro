import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (
  {
    className,
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...props
  }) => {
  return <Link
    to={to}
    className={classNames(styles.appLink, {}, [className, styles[theme]])}
    {...props}
  >
    {children}
  </Link>
}

export default AppLink
