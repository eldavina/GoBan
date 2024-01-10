import { Navbar } from "../../component";
import anna from "../../assets/anna.jpg";
import dio from "../../assets/dio.jpg";
import indra from "../../assets/indra.jpg";
import rokim from "../../assets/rokim.jpg";
import elda from "../../assets/elda.jpg";

function About() {
	return (
		<div>
			<Navbar />

			<section>
				<div className="container mx-auto px-[100px] text-center ">
					<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
						<div className="col-span-4 md:col-span-8 lg:col-span-12 flex justify-center mb-10">
							<p>
								<h1 className="text-xl font-medium text-slate-700">Tentang Aplikasi</h1>
								Aplikasi dirancang untuk dapat memperlihatkan tempat-tempat tambal ban,
								gambar lokasi, dan informasi mengenai alamat lokasi tambal ban. Team
								Pengembang Aplikasi
								<br />
								<br />
								<br />
								<h1 className="text-xl font-medium text-slate-700">Tim Pengembang</h1>
							</p>
						</div>
					</div>
				</div>
			</section>
			<div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem] ">
				<div>
					<section>
						<div className="container px-6 m-auto mb-3">
							<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={dio}
										alt="Dionicho Tri Huandito"
										title="Dionicho Tri Huandito"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Dionicho Tri Huandito
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												19104410036
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/fahmiahsan_/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													@dnchodion_
												</h4>
											</div>
										</div>
									</a>
								</div>
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={rokim}
										alt="Bahrur Rochim"
										title="Bahrur Rochim"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">Bahrur Rochim</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410013
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/dimas.andriano.h/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													@kim_2rr
												</h4>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div>
					<section>
						<div className="container px-6 m-auto mb-3">
							<div className="grid grid-cols-4 gap-6 md:grid-cols-8 lg:grid-cols-12">
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={indra}
										alt="Indra Prayoga"
										title="Indra Prayoga"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">Indra Prayoga</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410027
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/eldaav_/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													@1ndr4_pr4y0g4_362
												</h4>
											</div>
										</div>
									</a>
								</div>
								<div className="col-span-4 lg:col-span-3 flex justify-center">
									<img
										src={anna}
										alt="Nurliana Azizah"
										title="Nurliana Azizah"
										width="180"
										height="48"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-3">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Nurliana Azizah
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410031
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/indra.kurniawan656/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													@_aannaa.na
												</h4>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>

				<div>
					<section>
						<div className="container px-96 m-auto mb-3">
							<div className="grid grid-cols-4 gap-0 md:grid-cols-8 lg:grid-cols-12">
								<div className="col-span-4 lg:col-span-6 flex justify-center">
									<img
										src={elda}
										alt="Elda Vina F. R."
										title="Elda Vina F. R."
										width="180"
										height="180"
										className="max-w-full rounded-full"
									/>
								</div>

								<div className="col-span-4 lg:col-span-6">
									<div>
										<h3 className="text-xl font-medium text-slate-700">
											Elda Vina F. R.
										</h3>
									</div>
									<div className="flex items-center self-center text-emerald-500">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-file-text">
											<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
											<polyline points="14 2 14 8 20 8"></polyline>
											<line x1="16" y1="13" x2="8" y2="13"></line>
											<line x1="16" y1="17" x2="8" y2="17"></line>
											<polyline points="10 9 9 9 8 9"></polyline>
										</svg>
										<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
											<h4 className="w-full truncate text-base text-slate-700 px-1">
												20104410043
											</h4>
										</div>
									</div>

									<a
										href="https://www.instagram.com/donny_arifin01/"
										target="_blank"
										rel="noopener noreferrer"
										onClick={() => console.log("Link clicked!")}>
										<div className="flex items-center self-center text-emerald-500">
											<svg
												xmlns="http://www.w3.org/2000/svg"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth="2"
												strokeLinecap="round"
												strokeLinejoin="round"
												className="feather feather-instagram">
												<rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
												<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
												<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
											</svg>
											<div className="flex min-h-[2rem] flex-1 flex-col items-start justify-center gap-0 overflow-hidden">
												<h4 className="w-full truncate text-base text-slate-700 px-1">
													@eldaav_
												</h4>
											</div>
										</div>
									</a>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</div>
	);
}
export default About;
