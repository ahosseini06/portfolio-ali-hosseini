import React from 'react';
import Home from './pages/Home';
import { RouterProvider } from 'react-router';
import { BrowserRouter, createBrowserRouter, useFetcher } from 'react-router-dom';
import PlaySync from './portfolio/PlaySync';

function App() {
  const router = createBrowserRouter  ([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/PlaySync",
      element: <PlaySync/>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
