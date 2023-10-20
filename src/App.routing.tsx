import { Navigate, RouteObject, createBrowserRouter } from 'react-router-dom';
import { Autorization } from './components/pages/Autorization/Autorization';
import { MentiList } from './components/pages/MentiList/MentiList';
import { LessonList } from './components/pages/LessonList/LessonList';
import { Analytics } from './components/pages/Analytics/Analytics';
import { MainLayout } from './components/complex/MainLayout/MainLayout';

const routes: RouteObject[] = [
  { path: '/', element: <Navigate to="/menti-list" /> },
  { path: 'auth/', Component: Autorization },
  {
    path: 'menti-list/',
    element: (
      <MainLayout>
        <MentiList />
      </MainLayout>
    ),
  },
  {
    path: 'lesson-list/',
    element: (
      <MainLayout>
        <LessonList />
      </MainLayout>
    ),
  },
  {
    path: 'analytics/',
    element: (
      <MainLayout>
        <Analytics />
      </MainLayout>
    ),
  },
];

const router = createBrowserRouter(routes);

export { router };
