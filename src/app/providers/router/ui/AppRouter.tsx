import { Route, Routes } from 'react-router-dom';
import {
  memo, Suspense, useCallback,
} from 'react';
import { AppRouteProps, routeConfig } from 'shared/config/routeConfig/routeConfig';
import PageLoader from 'shared/ui/PageLoader/PageLoader';
import RequireAuth from 'app/providers/router/ui/RequireAuth';

const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const { path, element, authOnly } = route;
    const el = <div className="page-wrapper">{element}</div>;
    return (
      <Route
        key={path}
        path={path}
        element={authOnly ? <RequireAuth>{el}</RequireAuth> : el}
      />
    );
  }, []);

  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
};

export default memo(AppRouter);
