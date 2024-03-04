import { useState } from "react";

import "./App.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import ClipBoardPage from "./Pages/clipBoardPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={"/clip-board"} />,
  },
  {
    path: "/clip-board",
    element: <ClipBoardPage />,
  },
]);
function App() {
  const [count, setCount] = useState(0);

  return <RouterProvider router={router} />;
}

export default App;
