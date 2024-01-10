import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
	updateDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const GobanSlice = (set, get) => ({
	goban: [],
	setGoban: async () => {
		// eslint-disable-next-line no-undef
		const data = await getDocs(collection(db, "goban"));
		set(() => ({
			goban: data.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
		}));
	},
	createGoban: async (data) => {
		await addDoc(collection(db, "goban"), data);
		get().setGoban();
	},
	deleteGoban: async (id) => {
		await deleteDoc(doc(db, "goban", id));
		get().setGoban();
	},
	updateGoban: async (id, data) => {
		await updateDoc(doc(db, "goban", id), data);
		get().setGoban();
	},
});
