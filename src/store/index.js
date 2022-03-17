import { createSlice, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import actionCreator from "../sagas";

const initialCounterState = {
  counter: 0,
  catFact: "",
};

const initialLoginState = {
  isLogin: false,
  user: "",
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state, action) {
      state.counter++;
      state.catFact = action.payload.catFact;
    },
  },
});

const loginSlice = createSlice({
  name: "login",
  initialState: initialLoginState,
  reducers: {
    login(state, action) {
      state.isLogin = true;
      state.user = action.payload;
    },
    logout(state) {
      state.isLogin = false;
      state.user = "";
    },
  },
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: { counter: counterSlice.reducer, login: loginSlice.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(actionCreator.getCatFact);
sagaMiddleware.run(actionCreator.getCatFactWithoutDelay);

export const counterAction = counterSlice.actions;
export const loginAction = loginSlice.actions;
export default store;
