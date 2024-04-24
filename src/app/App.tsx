import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useState } from 'react';
import Modal from 'shared/ui/Modal/Modal';
import Button from 'shared/ui/Button/Button';

function App() {
  const [opened, setOpened] = useState(false);
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, ['mainBox', theme])}>
      <Suspense fallback="">
        <NavBar />
        <Button onClick={() => setOpened(true)}>toggle</Button>
        <div className="content-page">
          <SideBar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
}

export default App;
