import { useEffect, useState } from "react";
import { useStore } from "../../config/zustand/store";
import { Modal, Navbar, Table } from "../../component";
import { toast } from "react-hot-toast";
import { useForm } from "react-hook-form";

function Dashboard() {
	const setGoban = useStore((state) => state.setGoban);
	const goban = useStore((state) => state.goban);
	const deleteGoban = useStore((state) => state.deleteGoban);
	const createGoban = useStore((state) => state.createGoban);
	const [nameLocation, setNameLocation] = useState("");
	const { register, handleSubmit, reset } = useForm();
	const onSubmit = async (data) => {
		try {
			await createGoban(data);
			toast.success("Berhasil menambahkan data");
			reset();
		} catch (error) {
			toast.error("Gagal menambahkan data");
		}
	};
	// const logout = useStore((state) => state.logout);
	useEffect(() => {
		setGoban();
	}, []);
	const handleDelete = async (id) => {
		try {
			await deleteGoban(id);
			toast.success("Berhasil menghapus data");
		} catch (error) {
			toast.error("Gagal menghapus data");
		}
	};
	const filteredGoban = goban?.filter((gbn) =>
		gbn.name_location.toLowerCase().includes(nameLocation.toLowerCase())
	);
	return (
		<div>
			<Navbar />
			<div className="mx-auto w-full px-6 lg:max-w-5xl xl:max-w-7xl">
				<div className="flex justify-between">
					<Modal text="Tambah Data" judul="Tambah Data">
						{" "}
						<form action="" onSubmit={handleSubmit(onSubmit)}>
							<div className="relative my-3">
								<input
									id="name_location"
									type="text"
									placeholder="Nama Tempat"
									{...register("name_location", { required: true })}
									className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="name_location"
									className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Nama Tempat
								</label>
							</div>
							<div className="relative my-3">
								<input
									id="address"
									type="text"
									placeholder="Alamat"
									{...register("address", { required: true })}
									className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="address"
									className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Alamat
								</label>
							</div>
							<div className="relative my-3">
								<input
									id="image"
									type="text"
									placeholder="Link Foto Lokasi"
									{...register("image", { required: true })}
									className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="image"
									className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Link Foto Lokasi
								</label>
							</div>
							<div className="relative my-3">
								<input
									id="longitude"
									type="text"
									placeholder="longitude"
									{...register("longitude", { required: true })}
									className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="longitude"
									className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Longitude
								</label>
							</div>
							<div className="relative my-3">
								<input
									id="latitude"
									type="text"
									placeholder="latitude"
									{...register("latitude", { required: true })}
									className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
								/>
								<label
									htmlFor="latitude"
									className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
									Latitude
								</label>
							</div>
							<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg">
								Submit
							</button>
						</form>
					</Modal>

					{/* <button
						className="py-2 px-4 text-white bg-emerald-500 rounded-lg mb-3"
						onClick={() => setShowModal()}>
						Tambah
					</button> */}
					{/* <div className="flex gap-2">
						<Link to="/">
							<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg mb-3">
								Home
							</button>
						</Link>
						<button
							onClick={logout}
							className="py-2 px-4 text-white bg-red-500 rounded-lg mb-3">
							Logout
						</button>
					</div> */}
					<div>
						<input
							type="text"
							placeholder="Cari..."
							value={nameLocation}
							onChange={(e) => setNameLocation(e.target.value)}
							className="block w-full mb-3 px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-emerald-400  focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-emerald-300"
						/>
					</div>
				</div>
				<div className="w-full overflow-x-auto">
					<Table goban={filteredGoban} handleDelete={handleDelete} />
				</div>
			</div>
		</div>
	);
}

export default Dashboard;
