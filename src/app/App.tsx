import { useTheme } from 'app/providers/ThemeProvider/lib/useTheme';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { NavBar } from 'widgets/NavBar';
import { SideBar } from 'widgets/SideBar';
import { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserInit, userActions } from 'entities/User';

function App() {
  const dispatch = useDispatch();
  const init = useSelector(getUserInit);
  useTheme();

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <div className={classNames('app', {}, ['mainBox'])}>
      <Suspense fallback="">
        <NavBar />
        <div className="content-page">
          <SideBar />
          {init && <AppRouter />}
        </div>
      </Suspense>
    </div>
  );
}

export default App;
