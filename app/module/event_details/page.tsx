import { Calendar, Clock, MapPin, Ticket } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { getEventDetail } from "~/services/api";
import type { EventDetail as EventDetailType } from "~/type";

const EventDetails = ({
	id
}: {
	id: string
}) => {
	const [eventDetail, setEventDetail] = useState<EventDetailType | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchEventDetail = async () => {
			try {
				const data = await getEventDetail(id);
				setEventDetail(data);
			} catch (err) {
				setError("Failed to fetch event details.");
			} finally {
				setLoading(false);
			}
		};

		fetchEventDetail();
	}, []);

	if (loading) {
		return <div className="flex justify-center items-center h-screen">Loading event details...</div>;
	}

	if (error) {
		return <div className="flex justify-center items-center h-screen text-red-500">{error}</div>;
	}

	if (!eventDetail) {
		return <div className="flex justify-center items-center h-screen">No event data available.</div>;
	}

	return (
		<div className="mx-auto min-h-screen max-w-4xl bg-white p-4 md:p-6">
			{/* Event Header */}
			<div className="mb-6">
				<h1 className="mb-2 text-3xl font-bold text-gray-900 md:text-4xl">
					{eventDetail.title}
				</h1>
			</div>

			{/* Event Image */}
			<div className="mb-6 overflow-hidden rounded-2xl h-40 md:h-52">
				<img
					src={eventDetail.coverPhoto}
					alt="Event Image"
					className="h-full w-full object-cover"
				/>
			</div>

			{/* Event Info */}
			<Card className="mb-6 border-gray-200 bg-gray-50">
				<CardContent className="p-6">
					<div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-gray-700">
						<div className="flex items-center gap-2">
							<Calendar size={20} className="text-red-500" />
							<span className="font-medium">{eventDetail.date}</span>
						</div>
						<div className="flex items-center gap-2">
							<Clock size={20} className="text-red-500" />
							<span className="font-medium">{eventDetail.time}</span>
						</div>
						<div className="flex items-center gap-2">
							<MapPin size={20} className="text-red-500" />
							<span className="font-medium">{eventDetail.location}</span>
						</div>
					</div>
				</CardContent>
			</Card>

			{/* Event Details */}
			<div className="grid grid-cols-1 gap-6 md:grid-cols-3">
				<div className="md:col-span-2">
					<Card className="border-gray-200 bg-gray-50">
						<CardContent className="p-6">
							<h2 className="mb-4 text-2xl font-bold text-gray-900">About the Event</h2>
							<p className="leading-relaxed text-gray-700" dangerouslySetInnerHTML={{ __html: eventDetail.description }} />
							{/* Additional Images */}
							<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
								{eventDetail.additionalImages.map((image, index) => (
									<div key={index} className="overflow-hidden rounded-lg">
										<img src={image} alt={`Additional Event Image ${index + 1}`} className="w-full h-32 object-cover" />
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Registration and Fees */}
				<div className="md:col-span-1">
					<Card className="border-gray-200 bg-gray-50">
						<CardContent className="p-6">
							<h2 className="mb-4 text-2xl font-bold text-gray-900">Registration</h2>
							<div className="mb-4 flex items-center gap-2">
								<Ticket size={20} className="text-red-500" />
								<span className="text-xl font-bold text-gray-900">
									{eventDetail.registrationFee > 0 ? `Rp ${eventDetail.registrationFee.toLocaleString()}` : "Free"}
								</span>
							</div>
							<p className="mb-4 text-sm text-gray-600">
								Includes all materials for the workshop, a guided tour, and a traditional lunch.
							</p>
							<Button className="w-full bg-red-500 text-white hover:bg-red-600">
								Register Now
							</Button>
						</CardContent>
					</Card>
				</div>
			</div>
		</div>
	);
};

export default EventDetails;
