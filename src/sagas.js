import { put, debounce, take, takeEvery, call } from "redux-saga/effects";

const callAnotherAPI = async () => {
  const res = await fetch("https://catfact.ninja/fact");
  const data = await res.json();
  return data;
};

function* callGetCatFact() {
  const data = yield callAnotherAPI();
  const { fact } = data;
  yield put({
    type: "counter/increment",
    payload: {
      catFact: fact,
    },
  });
}

function* getCatFact() {
  yield debounce(1000, "GET_CAT_FACT", callGetCatFact);
}

function* getCatFactWithoutDelay() {
  while (true) {
    yield take("GET_CAT_FACT_NO_DELAY");
    yield call(callGetCatFact);
  }
}

const actionCreator = {
  getCatFact,
  getCatFactWithoutDelay,
};

export default actionCreator;
