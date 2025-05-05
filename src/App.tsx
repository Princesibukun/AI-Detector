// src/App.tsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./screen/Index";
import Layout from "./component/Layout";
import SignUp from "./component/SignUp";
import Login from "./component/Login";
import Reset from "./forgotpassword/Reset";
import Verify from "./forgotpassword/Verify";
import Password from "./forgotpassword/Password";


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
