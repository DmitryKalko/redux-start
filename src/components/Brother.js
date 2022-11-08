import { useDispatch, useSelector } from "react-redux";
import { CREATE_BORSH } from "../redux/actions";

import { store } from "../redux/store";

const Brother = () => {
  const dispatch = useDispatch();
  const borsh = useSelector((state) => state.borsh);

	const ask = () => {
    dispatch(CREATE_BORSH);
  };

  console.log('all store', store.getState());

	return (
		<>
			<button onClick={ask}>Попросить сделать борщ</button>
      {borsh && <h3>{`я достал их холодильника ${borsh}`}</h3>}
		</>
	);
};
export default Brother;
