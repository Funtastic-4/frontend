import EventDetailsPage from "~/module/event_details/page";
import type { Route } from "./+types/event_details";

export function loader({ params }: Route.LoaderArgs) {
	const id = params.id
	return {
		id
	}
}

export default function EventDetails({ loaderData }: Route.ComponentProps) {
	return <EventDetailsPage id={loaderData.id} />
}
