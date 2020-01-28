import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { userReducer } from "./user/user.reducer";
import { themeReducer } from "./theme/theme.reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducers = combineReducers({
  data: userReducer,
  theme: themeReducer
});

const store = createStore(
  rootReducers,
  {},
  composeWithDevTools(applyMiddleware(ReduxThunk))
);

export { store };
