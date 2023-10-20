import { RouterProvider } from 'react-router-dom';
import { router } from './App.routing';

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export { App };
