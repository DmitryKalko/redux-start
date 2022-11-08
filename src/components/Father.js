import { useDispatch, useSelector } from "react-redux";
import { CREATE_COTLETS } from "../redux/actions";

import { store } from "../redux/store";

const Father = () => {
	const dispatch = useDispatch();
	const cotlets = useSelector((state) => state.cotlets);

	// const { cotlets, borsh, carbonara } = useSelector((state) => state);

	const ask = () => {
		dispatch(CREATE_COTLETS);
	};

  console.log('all store', store.getState());

	return (
		<>
			<button onClick={ask}>Попросить сделать котлеты</button>
			{cotlets && <h3>{`я достал их холодильника ${cotlets}`}</h3>}

			{/* можем пользоваться здесь и другими состояниями */}
			{/* {borsh && <h3>{`я достал их холодильника ${borsh}`}</h3>}
			{carbonara && <h3>{`я достал их холодильника ${carbonara}`}</h3>} */}
		</>
	);
};
export default Father;
