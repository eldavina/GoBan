import { useEffect, useState } from "react";
import { Map, Navbar } from "../../component";
import { useStore } from "../../config/zustand/store";

function Home() {
	const setGoban = useStore((state) => state.setGoban);
	const goban = useStore((state) => state.goban);
	const setTransitionMarker = useStore((state) => state.setTransitionMarker);
	const [mapStyleIndex, setMapStyleIndex] = useState(0);
	const [nameLocation, setNameLocation] = useState("");
	useEffect(() => {
		setGoban();
	}, []);
	const filteredGoban = goban?.filter((gbn) =>
		gbn.name_location.toLowerCase().includes(nameLocation.toLowerCase())
	);
	const handleChangeStyle = () => {
		if (mapStyleIndex === 7) {
			setMapStyleIndex(0);
		} else {
			setMapStyleIndex(mapStyleIndex + 1);
		}
	};

	return (
		<div>
			<Navbar />
			<div className="container px-6 m-auto">
				<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
					<div className="col-span-4 rounded-lg">
						<div className="text-center">
							<h1 className="text-2xl font-semibold">Daftar Tambal Ban Kota Blitar</h1>
						</div>
						<div className="md:flex justify-between">
							<input
								type="text"
								placeholder="Cari..."
								value={nameLocation}
								onChange={(e) => setNameLocation(e.target.value)}
								className="block w-full mb-3 px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
							/>
						</div>
						<table
							className="w-full text-left border border-separate rounded border-slate-200 "
							cellSpacing="0">
							<tbody>
								{filteredGoban?.map((gbn) => (
									<tr
										key={gbn.id}
										className="transition-colors duration-300 hover:bg-slate-50 cursor-pointer">
										<td
											onClick={() => setTransitionMarker(gbn.latitude, gbn.longitude)}
											className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
											{gbn.name_location}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
					<div className="col-span-4 lg:col-span-8">
						<Map goban={goban} mapStyleIndex={mapStyleIndex} />
						<button
							onClick={handleChangeStyle}
							className="py-2 px-4 bg-emerald-500 text-white my-3 rounded-lg">
							Change Style Map
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
