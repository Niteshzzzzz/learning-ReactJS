import {createRoot} from 'react-dom/client';
import App from './app.jsx';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import Home from './Components/Home.jsx';
import CountryDetail from './Components/CountryDetail.jsx';
import { Error } from './Components/Error.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/:country",
          element: <CountryDetail />,
        },
      ]
    }
  ]);

let root = createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={router} />)