import { Link } from "react-router";
import OrganizationProfile  from "../org_profile/OrganizationProfile"

export function meta() {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div>
      {/* Simple navigation for testing */}
      <nav className="bg-white shadow-sm p-3 sm:p-4 mb-6 sm:mb-8">
        <div className="max-w-6xl mx-auto flex gap-4">
          <Link 
            to="/cultural-heritage" 
            className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors text-sm sm:text-base"
          >
            Explore Heritage Sites
          </Link>
        </div>
      </nav>
      
      <OrganizationProfile />
    </div>
  );
}
