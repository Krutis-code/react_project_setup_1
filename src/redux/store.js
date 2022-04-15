import { createStore , applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, /* preloaded state */{},composeEnhancers(applyMiddleware(thunk)))
  
export default store;

// {
//     "email": "krutipatel@gmail.com",
//     "password": "Admin@123",
//     "id": "994",
//     "createdAt": "2022-04-15T14:02:10.159Z"
// } 