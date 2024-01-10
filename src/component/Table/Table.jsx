import { Link } from "react-router-dom";

function Table({ goban, handleDelete }) {
	return (
		<table
			className="w-full text-left border border-separate rounded border-slate-200"
			cellSpacing="0">
			<tbody>
				<tr>
					<th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						No
					</th>
					<th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						Nama Tempat
					</th>
					<th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						Alamat
					</th>
					{/* <th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						URL Foto
					</th> */}
					<th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						Latitude
					</th>
					<th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						Longitude
					</th>
					<th
						scope="col"
						className="h-12 px-6 text-sm font-medium border-l first:border-l-0 stroke-slate-700 text-slate-700 bg-slate-100">
						Action
					</th>
				</tr>
				{goban.map((item, index) => (
					<tr
						className="transition-colors duration-300 hover:bg-slate-50"
						key={index}>
						<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							{index + 1}
						</td>
						<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							{item.name_location}
						</td>
						<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							{item.address}
						</td>
						{/* <td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							{item.foto}
						</td> */}
						<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							{item.latitude}
						</td>
						<td className="h-12 px-6 text-sm transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							{item.longitude}
						</td>
						<td className="h-12 px-6 text-sm flex items-center gap-2 transition duration-300 border-t border-l first:border-l-0 border-slate-200 stroke-slate-500 text-slate-500 ">
							<Link to={`/update-goban/${item.id}`}>
								<button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
									Update
								</button>
							</Link>
							<button
								className="bg-red-500 text-white py-2 px-4 rounded-lg"
								onClick={() => handleDelete(item.id)}>
								Delete
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}

export default Table;
