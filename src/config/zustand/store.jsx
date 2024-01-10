import { create } from "zustand";
import { userSlice } from "./UserSlice/UserSlice";
import { GobanSlice } from "./GobanSlice/GobanSlice";
import { MapSlice } from "./MapSlice/MapSlice";

export const useStore = create((...a) => ({
	...userSlice(...a),
	...GobanSlice(...a),
	...MapSlice(...a),
}));
