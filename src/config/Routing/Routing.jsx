import { createBrowserRouter } from "react-router-dom";
import { About, Dashboard, EditGoban, Home, Login } from "../../pages";
import { UserContactUs } from "../../pages/ContactUs/ContactUs";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/login",
		element: <Login />,
	},
	{
		path: "/about",
		element: <About />,
	},
	{
		path: "/contactus",
		element: <UserContactUs />,
	},
	{
		path: "/dashboard",
		element: (
			<PrivateRoute>
				<Dashboard />
			</PrivateRoute>
		),
	},
	{
		path: "/update-goban/:id",
		element: (
			<PrivateRoute>
				<EditGoban />
			</PrivateRoute>
		),
	},
]);
