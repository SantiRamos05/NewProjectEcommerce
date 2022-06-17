import { applyMiddleware, legacy_createStore} from "redux";
import thunk from "redux-thunk";
import rootReducer from './redux/reducers';
import { composeWithDevTools } from "redux-devtools-extension";

const initialState = {}

const middleware = [thunk]

const store = legacy_createStore(
    rootReducer, initialState, composeWithDevTools(applyMiddleware(...middleware))
);

export default store; 