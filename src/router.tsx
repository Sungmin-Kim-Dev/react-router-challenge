import {createBrowserRouter} from "react-router-dom";
import Root from "./Root";
import About from "./screens/About";
import Home from "./screens/Home";
import NotFound from "./components/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import Author from "./screens/Author";
import Book from "./screens/Book";
import Chapters from "./screens/Chapters";
import Characters from "./screens/Characters";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "author/:authorName",
        element: <Author />,
        children: [
          {
            path: ":book",
            element: <Book />,
            children: [
              {
                path: "chapters",
                element: <Chapters />,
              },
              {
                path: "characters",
                element: <Characters />,
              },
            ],
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
