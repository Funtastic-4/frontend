import { useState, useEffect } from "react"
import { Image } from "@unpic/react"
import { NavLink, useLocation } from "react-router"
import { Search, Menu, X } from "lucide-react"
import { navbarItem } from "./constant"
import { Input } from "~/components/ui/input"

export default function Navbar() {
	useEffect(() => {
		const style = document.createElement("style")
		style.textContent = `
      @keyframes citySlide {
        0% { transform: translateY(100%); opacity: 0; }
        20%, 80% { transform: translateY(0%); opacity: 1; }
        100% { transform: translateY(-100%); opacity: 0; }
      }
    `
		document.head.appendChild(style)
		return () => {
			if (document.head.contains(style)) {
				document.head.removeChild(style)
			}
		}
	}, [])

	const indonesianCities = [
		"Bali",
		"Jakarta",
		"Yogyakarta",
		"Bandung",
		"Surabaya",
		"Medan",
		"Semarang",
		"Makassar",
		"Palembang",
		"Batam",
	]

	const [currentCityIndex, setCurrentCityIndex] = useState(0)
	const [inputValue, setInputValue] = useState("")
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

	let location = useLocation()

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentCityIndex((i) => (i + 1) % indonesianCities.length)
		}, 3000)
		return () => clearInterval(timer)
	}, [indonesianCities.length])

	return (
		<nav className="fixed lg:px-10 w-full">
			<div className="bg-white/70 backdrop-blur-xl shadow-lg border border-gray-200/50 rounded-xl w-full">
				<div className="flex w-full justify-between items-center px-10">
					<div className="flex items-center gap-8">
						<NavLink to="/">
							<Image
								src="/icon/inago-png.png"
								layout="constrained"
								width={80}
								className="object-contain"
								height={70}
							/>
						</NavLink>

						<div className="relative w-48 hidden lg:block">
							<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
								<Search className="h-4 w-4 text-gray-400" />
							</div>
							<div className="relative">
								<Input
									value={inputValue}
									onChange={(e) => setInputValue(e.target.value)}
									className="pl-10 pr-3 py-1.5 w-full rounded-full border-2 border-gray-200/50 bg-white/20 backdrop-blur-sm text-gray-800 placeholder-gray-600 focus:border-gray-300/70 focus:bg-white/30"
								/>
								{inputValue === "" && (
									<div
										key={currentCityIndex}
										className="absolute inset-0 pl-10 pr-3 py-1.5 text-sm text-gray-400
                               pointer-events-none flex items-center"
										style={{ animation: "citySlide 3s infinite" }}
									>
										{indonesianCities[currentCityIndex]}
									</div>
								)}
							</div>
						</div>
					</div>

					<div className="hidden lg:flex flex-row gap-10 items-center">
						{navbarItem.map((item) => (
							<NavLink
								to={item.href}
								key={item.label}
								className="text-gray-700 hover:text-red-600 font-medium text-sm
                           transition-colors duration-200"
							>
								{item.label}
							</NavLink>
						))}
						{location.pathname !== "/auth/login" && <NavLink
							to="/auth/login"
							className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm
                       transition-colors duration-200"
						>
							Login
						</NavLink>}
					</div>

					<button
						onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
						className="lg:hidden p-2 text-gray-700 hover:text-red-600 transition-colors duration-200"
					>
						{isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
					</button>
				</div>

				{isMobileMenuOpen && (
					<div className="lg:hidden px-10 pb-6">
						<div className="pt-4 space-y-4">
							<div className="relative w-full">
								<div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
									<Search className="h-4 w-4 text-gray-400" />
								</div>
								<div className="relative">
									<Input
										value={inputValue}
										onChange={(e) => setInputValue(e.target.value)}
										className="pl-10 pr-3 py-1.5 w-full rounded-full border-2 border-gray-200/50 bg-white/20 backdrop-blur-sm text-gray-800 placeholder-gray-600 focus:border-gray-300/70 focus:bg-white/30"
									/>
									{inputValue === "" && (
										<div
											key={currentCityIndex}
											className="absolute inset-0 pl-10 pr-3 py-1.5 text-sm text-gray-400
	                                   pointer-events-none flex items-center"
											style={{ animation: "citySlide 3s infinite" }}
										>
											{indonesianCities[currentCityIndex]}
										</div>
									)}
								</div>
							</div>

							<div className="space-y-3 pt-2">
								{navbarItem.map((item) => (
									<NavLink
										to={item.href}
										key={item.label}
										onClick={() => setIsMobileMenuOpen(false)}
										className="block text-gray-700 hover:text-red-600 font-medium text-sm
	                               transition-colors duration-200 py-2"
									>
										{item.label}
									</NavLink>
								))}
								{location.pathname !== "/auth/login" && <NavLink
									to="/auth/login"
									onClick={() => setIsMobileMenuOpen(false)}
									className="block bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg font-medium text-sm
	                           transition-colors duration-200 text-center"
								>
									Login
								</NavLink>}
							</div>
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}
