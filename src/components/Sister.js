import { useDispatch, useSelector } from "react-redux";
import { CREATE_CARBONARA } from "../redux/actions";

import { store } from "../redux/store";

const Sister = () => {
	const dispatch = useDispatch();
	const carbonara = useSelector((state) => state.carbonara);

	const ask = () => {
		dispatch(CREATE_CARBONARA);
	};

  console.log('all store', store.getState());

	return (
		<>
			<button onClick={ask}>Попросить сделать карбонару</button>
			{carbonara && <h3>{`я достала их холодильника ${carbonara}`}</h3>}
		</>
	);
};
export default Sister;
