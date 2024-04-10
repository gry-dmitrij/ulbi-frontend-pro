import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import { Suspense } from 'react'
import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme'
import { classNames } from 'shared/lib/classNames/classNames'
import { AboutPage } from 'pages/AboutPage'
import { MainPage } from 'pages/MainPage'
import { AppRouter } from 'app/providers/router'
import { NavBar } from 'widgets/NavBar'

const App = () => {
  const {theme, toggleTheme} = useTheme()

  return <div className={classNames('app', {}, [theme])}>
    <NavBar />
    <AppRouter />
    <button onClick={toggleTheme}>Toggle theme</button>
  </div>
}

export default App
