// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./screen/homePage/Index";
import Layout from "./component/Layout";
import SignUp from "./screen/SignUp";
import Login from "./screen/Login";
import Reset from "./screen/forgotpassword/Reset";
import Verify from "./screen/forgotpassword/Verify";
import Password from "./screen/forgotpassword/Password";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, 
    children: [
      { index: true, element: <Index /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <Login /> },
      { path: "reset", element: <Reset/> },
      { path: "verify", element: <Verify/> },
      { path: "password", element: <Password/> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
