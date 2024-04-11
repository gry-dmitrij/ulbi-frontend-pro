import styles from './SideBar.module.scss'
import { useState } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

interface SideBarProps {
    className?: string
}

const SideBar = ({className}: SideBarProps) => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = () => {
    setCollapsed(prev => !prev)
  }

  return <div
    className={classNames(styles.sideBar, {[styles.collapsed]: collapsed}, [className])}
  >
    <button onClick={onToggle}>toggle</button>
    <div className={styles.switchers}>
      <ThemeSwitcher />

    </div>
  </div>
}

export default SideBar
