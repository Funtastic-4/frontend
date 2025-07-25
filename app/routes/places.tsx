import { redirect } from "react-router";
import type { Route } from "./+types/places";
import { ProvinceData } from "~/module/data/province";
import { CityData } from "~/module/data/city";

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

	if (parsedSlug.length !== 3 || parsedSlug[0] !== "budaya") {
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
	
	return (
		<div className="container mx-auto px-4 py-8">
			<div className="max-w-4xl mx-auto">
				<div className="mb-4">
					<span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full capitalize">
						{type}
					</span>
				</div>
				<h1 className="text-3xl font-bold text-gray-900 mb-6">
					Budaya {data.name}
				</h1>
				<div className="bg-white rounded-lg shadow-md p-6">
					<p className="text-gray-600">
						Informasi tentang budaya {data.name} akan ditampilkan di sini.
					</p>
				</div>
			</div>
		</div>
	);
}
