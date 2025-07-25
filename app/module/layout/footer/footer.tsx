import { Link } from "react-router"

export function Footer() {
	return (
		<footer className="w-full text-black bg-red-50 py-1 rounded-t-xl">
			<div className="flex flex-col sm:flex-row items-center gap-4 justify-between">
				<div className="flex flex-col gap-5 items-start justify-end px-4">
					<Link to="/">
						<img
							src="/icon/inago-png.png"
							alt="inago-logo"
							width={150}
							height={150}
							className="hidden md:block object-contain"
						/>
					</Link>
				</div>
			</div>
		</footer>
	)
}
