import OrganizationProfilePage from "~/module/organization/profile/page";
import type { Route } from "./+types/organization-profile";

export function loader({
	params
}: Route.LoaderArgs) {
	return {
		id: params.id
	}

}

export default function OrganizationProfile({ loaderData }: Route.ComponentProps) {
	return <OrganizationProfilePage id={loaderData.id} />;
}
