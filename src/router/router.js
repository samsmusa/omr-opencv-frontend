import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SuspenseLoader from "./SuspenseLoader";
import Analytics from "../pages/Analytics";
import FeatureAccordion from "../components/Accordions/FeatureAccordion";
import AnalyticsAccordion from "../components/Accordions/AnalyticsAccordion";

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
        element: <FeatureAccordion />,
      },
      {
        path: "analytics",
        element: <AnalyticsAccordion />,
      },
    ],
  },
]);

export default router;
