import { createStore } from 'redux';
import reducer from './reducer';

export const store = createStore(reducer);


console.log('all store', store.getState())