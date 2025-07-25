import type { Route } from "./+types/home";
import OrganizationProfile  from "../org_profile/OrganizationProfile"
import AboutUs from "./AboutUs";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return <AboutUs />;
}
