import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Root from './Component/Root/Root';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root> 
    },
  ]);
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
