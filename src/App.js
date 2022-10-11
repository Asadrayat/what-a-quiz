import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Root from './Component/Root/Root';
import Statistic from './Component/Statistic/Statistic';
import Home from './Component/Home/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      children : [
        {
          path : "/",
          loader :() => fetch('https://openapi.programming-hero.com/api/quiz'),
          element : <Home></Home>,
        },
        {
          path : "/home",
          element : <Home></Home>,
        },
        {
          path : "/blog",
          element : <Blog></Blog>,
        },
        {
          path : "/statistic",
          element : <Statistic></Statistic>,
        },
      ]
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
