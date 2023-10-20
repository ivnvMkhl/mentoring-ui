import { RouterProvider, redirect } from 'react-router-dom';
import { router } from './App.routing';
import { useEffect } from 'react';

const App: React.FC = () => {
  useEffect(() => {
    redirect('/menti-list');
  }, []);

  return <RouterProvider router={router} />;
};

export { App };
