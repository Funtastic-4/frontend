import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("event_details", "routes/event_details.tsx"),
] satisfies RouteConfig;
