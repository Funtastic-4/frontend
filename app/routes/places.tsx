import { Link, redirect } from "react-router";
import type { Route } from "./+types/places";
import { ProvinceData } from "~/module/data/province";
import { CityData } from "~/module/data/city";
import { mockEventDetail, mockProfile } from "~/services/api";

type PlaceData = {
	id: string;
	name: string;
	slug: string;
	province_id?: string;
};

export function loader({ params }: Route.LoaderArgs) {
	const slug = params.slug;

	if (!slug) {
		throw redirect("/");
	}

	const parsedSlug = slug.split("-");

	if (parsedSlug.length >= 3 && parsedSlug[0] === "event") {
		const eventData = mockEventDetail.slug === slug ? mockEventDetail : null;
		if (!eventData) {
			throw redirect("/");
		}
		throw redirect(`/event_detail/${eventData.id}`);
	}

	if (parsedSlug.length >= 3 && parsedSlug[0] === "organization") {
		const organizationData = mockProfile.find(org => org.slug === slug);
		if (!organizationData) {
			throw redirect("/");
		}
		throw redirect(`/organization/profile/${organizationData.id}`);
	}

	if (parsedSlug.length < 3 || parsedSlug[0] !== "budaya") {
		throw redirect("/");
	}

	const type = parsedSlug[1].toLowerCase();

	if (type !== "provinsi" && type !== "kota") {
		throw redirect("/");
	}

	const data: PlaceData | undefined = type === "provinsi"
		? ProvinceData.find((item) => item.slug === slug)
		: CityData.find((item) => item.slug === slug);

	if (!data) {
		throw redirect("/");
	}

	return {
		data,
		type
	};
}

export default function Places({ loaderData }: Route.ComponentProps) {
	const { data, type } = loaderData;

	const getProvince = () => {
		if (type === "kota" && 'province_id' in data && data.province_id) {
			const province = ProvinceData.find(p => p.id === data.province_id);
			return province;
		}
		return null;
	};

	const gradientClass = type === "provinsi"
		? "bg-gradient-to-b from-red-200 to-white"
		: "bg-gradient-to-b from-blue-200 to-white";

	const province = getProvince();

	return (
		<div className="relative w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
			<div className={`relative w-full ${gradientClass} h-[200px] sm:h-[400px] lg:h-[300x] rounded-xl`}>
				<div className="absolute inset-0 flex items-center justify-start px-4 sm:px-6 lg:px-8 pt-8">
					<div className="relative w-full max-w-2xl text-left">
						{province && (
							<div className="mb-3">
								<Link to={`/${province.slug}`} >
									<span className="inline-block px-3 py-1 text-sm font-medium bg-white/80 text-gray-700 rounded-full">
										{province.name}
									</span>
								</Link >
							</div>
						)}
						<h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
							Budaya {'name' in data ? data.name : ''}
						</h1>
					</div>
				</div>
			</div>

			<div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg w-full p-6">
				<p className="text-gray-700">
					Informasi tentang budaya {'name' in data ? data.name : ''} akan ditampilkan di sini.
				</p>
			</div>
		</div>
	);
}
