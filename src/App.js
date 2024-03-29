import "./App.css";
import About from "./Pages/About";
import BlogPage from "./Pages/BlogPage";
import Fungicides from "./Pages/Fungicides";
import Insecticides from "./Pages/Insecticides";
import Herbicides from "./Pages/Herbicides";
import Machinery from "./Pages/Machinery";
import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import SignUp from "./Pages/SignUp";
import SignIn from "./Pages/SignIn";
import Profile from "./Pages/Profile";
import { Provider } from "react-redux";
import store from "./shared/store";
import Cart from "./Pages/Cart";
import Error from "./Pages/Error";
import Privacy from "./Pages/Privacy";
import TandCs from "./Pages/TandCs";
import BlogCart from "./Pages/BlogCart";

function AppLayout() {
  return (
    <Provider store={store}>
      <Header />
      <Outlet />
      <Footer />
    </Provider>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/insecticides",
        element: <Insecticides />,
      },
      {
        path: "/fungicides",
        element: <Fungicides />,
      },
      {
        path: "/herbicides",
        element: <Herbicides />,
      },
      {
        path: "/machinery",
        element: <Machinery />,
      },
      {
        path: "/blogs",
        element: <BlogPage />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/blog-cart",
        element: <BlogCart />,
      },
      {
        path: "/privacy",
        element: <Privacy />,
      },
      {
        path: "/tandcs",
        element: <TandCs />,
      },
      // {
      //   path: "restaurant/:resId",
      //   element: <RestaurantMenu />,
      // },
    ],
  },
]);

function App(props) {
  return (
    <div className="App">
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
