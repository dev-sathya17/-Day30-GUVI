import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Home, { loader as homeLoader } from "./pages/Home";

// Setting a router to handle the different routes in this application.
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    loader: homeLoader,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
