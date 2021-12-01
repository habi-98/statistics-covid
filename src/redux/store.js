import {createStore} from "redux";
import statistics from './reducer'


const store = createStore(statistics, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store