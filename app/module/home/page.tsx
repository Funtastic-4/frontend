import { Image } from "@unpic/react";
import { Input } from "~/components/ui/input";
import { useState, useEffect } from "react";
import { ProvinceData } from "~/module/data/province";
import { CityData } from "~/module/data/city";

export function HomePage() {
	const [searchValue, setSearchValue] = useState("");
	const [showResults, setShowResults] = useState(false);
	const [currentItemIndex, setCurrentItemIndex] = useState(0);

	const allLocations = [
		...ProvinceData.map(p => ({ ...p, type: 'provinsi' as const })),
		...CityData.map(c => ({ ...c, type: 'kota' as const }))
	];

	useEffect(() => {
		const style = document.createElement("style");
		style.textContent = `
			@keyframes locationSlide {
				0% { transform: translateY(100%); opacity: 0; }
				20%, 80% { transform: translateY(0%); opacity: 1; }
				100% { transform: translateY(-100%); opacity: 0; }
			}
		`;
		document.head.appendChild(style);
		return () => {
			if (document.head.contains(style)) {
				document.head.removeChild(style);
			}
		};
	}, []);

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentItemIndex((i: number) => (i + 1) % allLocations.length);
		}, 3000);
		return () => clearInterval(timer);
	}, [allLocations.length]);

	const filteredLocations = allLocations.filter(location =>
		location.name.toLowerCase().includes(searchValue.toLowerCase())
	).slice(0, 5);

	const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchValue(e.target.value);
		setShowResults(e.target.value.length > 0);
	};

	return (
		<div className="relative w-full max-w-screen-2xl mx-auto px-10 flex flex-col items-center">
			<div className="relative w-full bg-gradient-to-b from-red-200 to-white h-[550px] rounded-xl">
				<div className="absolute inset-0 flex items-center p-0">
					<Image
						src="/icon/indonesia-map.png"
						alt="Indonesia Map"
						className="max-w-full max-h-full object-contain opacity-50 grayscale select-none"
						layout="fullWidth"
					/>
				</div>
				<div className="absolute inset-0 flex items-center justify-center">
					<div className="relative w-full max-w-2xl text-center">
						<h1 className="text-4xl font-bold text-gray-800 mb-4">Temukan dan Pahami Budaya Indonesia</h1>
						<h2 className="text-xl text-black font-bold mb-8">Cerita, tradisi, dan warisan dari Sabang sampai Merauke</h2>
						<div className="relative">
							<Input
								type="text"
								value={searchValue}
								onChange={handleSearchChange}
								className="py-4 text-lg rounded-full border-2 border-white/50 bg-white/80 backdrop-blur-md text-gray-900 focus:border-white/70 focus:bg-white/90 shadow-lg"
							/>
							{searchValue === "" && (
								<div
									key={currentItemIndex}
									className="absolute inset-0 flex items-center justify-center text-lg text-gray-500 pointer-events-none"
									style={{ animation: "locationSlide 3s infinite" }}
								>
									Mau mengetahui budaya {allLocations[currentItemIndex].name}?
								</div>
							)}
						</div>
						{showResults && filteredLocations.length > 0 && (
							<div className="absolute top-full left-0 right-0 mt-2 bg-white/90 backdrop-blur-md rounded-lg border-2 border-white/50 shadow-lg overflow-hidden z-20">
								{filteredLocations.map((location) => (
									<div
										key={location.id}
										className="px-6 py-4 hover:bg-white/95 cursor-pointer transition-colors duration-200 border-b border-gray-200/30 last:border-b-0"
										onClick={() => {
											setSearchValue(location.name);
											setShowResults(false);
										}}
									>
										<div className="flex justify-between items-center">
											<div className="text-gray-900 font-medium text-lg">
												{location.name}
											</div>
											<div className="text-gray-600 text-sm capitalize">
												{location.type}
											</div>
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
