import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/:slug", "routes/places.tsx"),
  route("/about", "routes/AboutUs.tsx"),
  route("/auth/login", "routes/login.tsx"),
  route("/auth/register", "routes/register.tsx"),
  route("/volunteer/register", "routes/volunteer-register.tsx"),
  route("/organization/register", "routes/organization-register.tsx"),
  route("cultural-heritage", "routes/cultural-heritage.tsx"),
  route("cultural-heritage/:siteId", "routes/cultural-heritage-detail.tsx"),
  route("/organization/profile/:id", "routes/organization-profile.tsx"),
  route("event_detail/:id", "routes/event_details.tsx"),
] satisfies RouteConfig;
