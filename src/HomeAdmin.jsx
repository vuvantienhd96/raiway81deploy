import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MyApp from './App.jsx';
import { Menu } from './components/Menu.jsx';
import { Help } from './routes/help/Help.jsx';
import { ErrorPage } from './routes/errorPage/ErrorPage.jsx';
import Users from './components/Users.jsx';
import { DetailUser } from './components/DetailUser.jsx';
import { UpdateUser } from './components/UpdateUser.jsx';
import { UpdateUserFormMik } from './components/Formik/UpdateUserFormMik.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Menu />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/help', // đường dẫn đến component mong muốn
        element: <Help />, // nội dung hiển thị trên đường dẫn đó
      },
      {
        path: '/listUser',
        element: <Users />,
      },
      {
        path: '/listUser/:id',
        element: <DetailUser />,
      },
      {
        path: '/listUser/Edit/:id',
        element: <UpdateUser />,
      },
      {
        path: '/listUser/Add',
        element: <UpdateUser />,
      },
      {
        path: '/listUser/EditFormMik/:id',
        element: <UpdateUserFormMik />,
      },
    ],
  },
  {
    path: '/admin', // đường dẫn đến component mong muốn
    element: <MyApp />, // nội dung hiển thị trên đường dẫn đó
  },
]);

function HomePageAdmin() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default HomePageAdmin;
