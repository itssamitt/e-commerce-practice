import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import Earrings from "./pages/Earrings/Earrings";
import Bracelet from "./pages/Bracelet/Bracelet";
import Pendants from "./pages/Pendants/Pendants";
import Rings from "./pages/Rings/Rings";
import Anklets from "./pages/Anklets/Anklets";
import Necklaces from "./pages/Necklaces/Necklaces";
import AboutUs from "./pages/Aboutus/AboutUs";
import Cart from "./pages/Cart/Cart";
import ProductPage from "./pages/ProductPage/ProductPage";
import { store } from "./redux/Store";
import { Provider } from "react-redux";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about-us",
      element: <AboutUs />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/products/:productshort",
      element: <ProductPage />,
    },
    {
      path: "/collection/bracelets",
      element: <Bracelet />,
    },
    {
      path: "/collection/earrings",
      element: <Earrings />,
    },
    {
      path: "/collection/pendants",
      element: <Pendants />,
    },
    {
      path: "/collection/rings",
      element: <Rings />,
    },
    {
      path: "/collection/anklets",
      element: <Anklets />,
    },
    {
      path: "/collection/necklaces",
      element: <Necklaces />,
    },
  ],
  {
    basename: "/e-commerce-practice",
  }

);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={router}></RouterProvider>
      </Provider>
    </>
  );
}

export default App;
