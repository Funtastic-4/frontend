import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("cultural-heritage", "routes/cultural-heritage.tsx"),
  route("cultural-heritage/:siteId", "routes/cultural-heritage.$siteId.tsx"),
] satisfies RouteConfig;
