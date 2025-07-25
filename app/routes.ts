import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/:slug", "routes/places.tsx"),
  route("/auth/login", "routes/login.tsx"),
  route("/auth/register", "routes/register.tsx"),
  route("/volunteer/register", "routes/volunteer-register.tsx"),
  route("/organization/register", "routes/organization-register.tsx"),
] satisfies RouteConfig;
