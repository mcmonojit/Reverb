// import logo from './logo.svg';
import "./App.css";
// import { Routes } from "./routes/Routes";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import LeftSidebar from "./components/leftSidebar/LeftSidebar";
import RightSidebar from "./components/rightSidebar/RightSidebar";
import Profile from "./pages/profile/Profile";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <div className="container-main">
        <LeftSidebar />
        <div className="outlet-width">
          <Outlet />
        </div>
        <RightSidebar />
      </div>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/profile/:id",
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
      {/* <Routes /> */}
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
      {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
    </div>
  );
}

export default App;
