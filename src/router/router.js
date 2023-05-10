import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SuspenseLoader from "./SuspenseLoader";

const Loader = (Component) => (props) =>
  (
    <Suspense fallback={<SuspenseLoader />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loader(lazy(() => import("../pages/Home")));
// const Contact = Loader(lazy(() => import('../pages/contact/Contact')));

// Dashboards
const router = createBrowserRouter([
  // const router: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Not found</h1>,
    children: [
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

export default router;
