import { useForm } from "react-hook-form";
import { useStore } from "../../config/zustand/store";
import { toast } from "react-hot-toast";
import { Link, useParams } from "react-router-dom";
import { Navbar } from "../../component";

function EditGoban() {
	const { id } = useParams();
	const updateGoban = useStore((state) => state.updateGoban);
	const goban = useStore((state) => state.goban);
	const gobanById = goban.filter((item) => item.id === id);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();
	const onSubmit = async (data) => {
		try {
			await updateGoban(gobanById[0].id, data);
			toast.success("Berhasil mengedit data");
		} catch (error) {
			toast.error("Gagal mengedit data");
		}
	};

	return (
		<div>
			<Navbar />
			<div className="mx-auto w-full px-6 lg:max-w-5xl xl:max-w-7xl">
				<Link to="/dashboard">
					<button className="py-2 px-4 text-white bg-emerald-500 rounded-lg mb-3">
						Kembali
					</button>
				</Link>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="relative my-6">
						<input
							id="name_location"
							type="text"
							placeholder="your name"
							defaultValue={gobanById[0].name_location}
							{...register("name_location", { required: true })}
							className="peer relative h-10 w-full rounded border border-slate-200 px-4 text-sm text-slate-500 placeholder-transparent outline-none transition-all autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
						/>
						<label
							htmlFor="id-b03"
							className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent">
							Nama Tempat
						</label>
						{errors.name_location && (
							<small className="absolute flex w-full justify-between px-4 py-1 text-xs text-red-400 transition peer-invalid:text-pink-500">
								<span>Text field with helper text</span>
							</small>
						)}
					</div>
					<div className="relative my-3">
						<input
							id="address"
							type="string"
							placeholder="address"
							defaultValue={gobanById[0].address}
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
							defaultValue={gobanById[0].image}
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
							defaultValue={gobanById[0].longitude}
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
							defaultValue={gobanById[0].latitude}
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
						Update
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditGoban;
