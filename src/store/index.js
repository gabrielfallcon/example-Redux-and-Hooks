import { createStore } from 'redux';

import courseReducer from './reducers/courses';

const store = createStore(courseReducer);

export default store;