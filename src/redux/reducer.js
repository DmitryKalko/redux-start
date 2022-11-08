import { CREATE_COTLETS, CREATE_BORSH, CREATE_CARBONARA } from "./actions";

const defaultState = {
	cotlets: '',
	borsh: '',
	carbonara: '',
};

const reducer = (state = defaultState, action) => {
	switch (action.type) {
		case "CREATE_COTLETS":
			// поскольку reducer это чистая функция
			// тут нельзя изменять наш state
			// можно сделать только новый state

			// создаем новый объект
			// в него спредом разворачиваем старое состояние
			// в зависимости от type меняем нужное нам поле
			return { ...state, cotlets: CREATE_COTLETS.payload };
		case "CREATE_BORSH":
			return { ...state, borsh: CREATE_BORSH.payload };
		case "CREATE_CARBONARA":
			return { ...state, carbonara: CREATE_CARBONARA.payload };
		default:
			return state;
	}
};
export default reducer;
