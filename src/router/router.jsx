import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
    },
  ]);

  export default router;