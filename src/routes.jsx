import AuthorsPage from "./pages/AuthorsPage";
import Index from "./pages/Index";
import BlogsPage from "./pages/BlogsPage";

const routes = [
  { path: "/", element: <Index /> },
  { path: "/authors/:slug", element: <AuthorsPage /> },
  { path: "/blogs/:slug", element: <BlogsPage /> },
];
export default routes;
