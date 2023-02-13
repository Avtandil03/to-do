import { createBrowserRouter } from "react-router-dom";
import MyDay from "../pages/MyDay";
import Importand from "../pages/importand";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyDay/>,
  },
  {
    path: "/importand",
    element: <Importand/>,
  },
]);