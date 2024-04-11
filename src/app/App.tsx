import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

const App = () => {
  const { theme } = useTheme()

  return <div className={classNames('app', {}, [theme])}>
    <NavBar />
    <AppRouter />
  </div>
}

export default App
