import { createStore,applyMiddleware} from "redux";
import { rootReducer } from "./RootReducer";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware =[thunk];

export const Store=createStore(
    rootReducer,composeWithDevTools(applyMiddleware(...middleware))
)
