
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import { useState } from 'react';
import ShowUser from './components/ShowUser';
import { UserProvider } from './components/UserContext';
import { RouterProvider } from 'react-router-dom'; // שיניתי ל-import מ-react-router-dom
import { router } from './routers';
import { Link } from 'react-router-dom'; // הוספתי את ייבוא ה-Link
import UserUser from './components/UserUser'
function App() {

  return (
    <UserProvider>
      <UserUser/>
      <RouterProvider router={router} />
    </UserProvider>
  );
}


export default App
