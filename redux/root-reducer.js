import { combineReducers } from "redux";

import appReducer from "./app/app.reducer";
import playerReducer from "./player/player.reducer";

const rootReducer = combineReducers({
  app: appReducer,
  player: playerReducer,
});

export default rootReducer;
