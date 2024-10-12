import React from 'react';
import Home from './pages/Home';
import { RouterProvider } from 'react-router';
import { BrowserRouter, createBrowserRouter, useFetcher } from 'react-router-dom';
import PlaySync from './portfolio/PlaySync';
import Ordr from './portfolio/Ordr';
// import app css
import './App.css';
import Prio from './portfolio/Prio';

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
    {
      path: "/ordr",
      element: <Ordr/>,
    },
    {
      path: '/prio',
      element: <Prio/>
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
