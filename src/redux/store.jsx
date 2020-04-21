import { createStore, applyMiddleware } from "redux";
import { combineReducers } from "redux";
import numberCounter from "./number-counter.reducer";
import contentSetter from "./content-setter.reducer";
import paginator from "./paginator.reducer";
import userSetter from "./user-setter.reducer";
import createSagaMiddleware from "redux-saga";
import mySaga from "../sagas/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({ numberCounter, contentSetter, userSetter, paginator }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;
