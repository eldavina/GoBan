import { useState } from "react";
import { Navbar } from "../../component";

export const UserContactUs = () => {
	const [nameLocation, setNameLocation] = useState("");
	const [address, setAdress] = useState("");
	const [image, setImage] = useState("");
	const [longitude, setLongitude] = useState("");
	const [latitude, setLatitude] = useState("");
	function handleSubmit() {
		const pesanWa = `https://api.whatsapp.com/send?phone=628813345505&text=Halo%20Goban!%20Ada%20data%20baru%20nih!%0ANama%20Lokasi:%20${encodeURIComponent(
			nameLocation
		)}%0AAlamat%20:%20${encodeURIComponent(
			address
		)}%0ALink Gambar%20:%20${encodeURIComponent(
			image
		)}%0ALongitude%20:%20${encodeURIComponent(
			longitude
		)}%0ALatitude%20:%20${encodeURIComponent(latitude)}`;
		window.open(pesanWa, "_blank");
		console.log("link", pesanWa);
	}
	return (
		<div>
			<Navbar />
			<div id="contact-us" className="container mx-auto">
				<div className="flex w-full justify-center">
					<form className="max-w-1/2" id="form" onSubmit={handleSubmit}>
						<div className="mb-5 text-center " style={{ lineHeight: 1.5 }}>
							Halo! yuk bantu kami dengan melengkapi informasi mengenai tambal ban di
							Kota Blitar! <br />
							Kamu tahu lokasi tambal ban lainnya? Ada lokasi tambal ban yang belum
							terdaftar? <br />
							Yuk isi form berikut ini! Terimakasih telah membantu <br />
							<br />
						</div>
						<div className="relative my-6">
							<input
								id="name_location"
								type="text"
								placeholder="Nama Tempat"
								value={nameLocation}
								onChange={(e) => setNameLocation(e.target.value)}
								className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							/>
							<label
								htmlFor="id-b03"
								className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
								Nama Tempat
							</label>
						</div>
						<div className="relative my-6">
							<input
								id="address"
								type="text"
								placeholder="Alamat"
								value={address}
								onChange={(e) => setAdress(e.target.value)}
								className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							/>
							<label
								htmlFor="id-b03"
								className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
								Alamat
							</label>
						</div>
						<div className="relative my-6">
							<input
								id="image"
								type="text"
								placeholder="Link Gambar"
								value={image}
								onChange={(e) => setImage(e.target.value)}
								className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							/>
							<label
								htmlFor="id-b03"
								className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
								Link Gambar
							</label>
						</div>
						<div className="relative my-6">
							<input
								id="longitude"
								type="text"
								placeholder="Titik Longitude"
								value={longitude}
								onChange={(e) => setLongitude(e.target.value)}
								className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							/>
							<label
								htmlFor="id-b03"
								className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
								Titik Longitude
							</label>
						</div>
						<div className="relative my-6">
							<input
								id="latitude"
								type="text"
								placeholder="Titik Latitude"
								value={latitude}
								onChange={(e) => setLatitude(e.target.value)}
								className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
							/>
							<label
								htmlFor="id-b03"
								className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
								Titik Latitude
							</label>
						</div>
						<div>
							<button
								type="submit"
								className="py-2 px-4 w-full bg-green-500 text-white rounded-lg"
								id="btn-submit">
								Submit
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
