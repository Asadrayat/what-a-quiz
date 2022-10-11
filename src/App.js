import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './Component/Blog/Blog';
import Root from './Component/Root/Root';
import Statistic from './Component/Statistic/Statistic';
import Home from './Component/Home/Home';
import Error from './Component/Error/Error';
import TopicDetails from './Component/TopicDetails/TopicDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> ,
      errorElement : <Error></Error>,
      children : [
        {
          path : "/",
          element : <Home></Home>,
          loader :() => fetch('https://openapi.programming-hero.com/api/quiz'),
        },
        {
          path : "/home",
          element : <Home></Home>,
        },
        {
          path : "/home/:homeId",
          loader : async({params}) =>{
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.homeId}`)
          } ,
          element : <TopicDetails></TopicDetails>,
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
