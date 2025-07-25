import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/about", "routes/AboutUs.tsx"),
  route("/auth/login", "routes/login.tsx"),
  route("/auth/register", "routes/register.tsx"),
] satisfies RouteConfig;
