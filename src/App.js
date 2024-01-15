import React from 'react';
import './App.css';
import Home from './pages/Home';
import Loginpage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Cart from './features/cart/cart';
import CartPage from './pages/CartPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    
  },
  {
    path:"/login",
    element:<Loginpage></Loginpage>
  },
  {
    path:"/signup",
    element:<SignupPage/>
  },
  {
    path:"/cart",
    element:<CartPage/>
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}>

      </RouterProvider>
      
    </div>
  );
}

export default App;
