import {put, call, take, delay,takeLatest,throttle,debounce} from 'redux-saga/effects'

// const delay = (ms) => new Promise(res => setTimeout(() => {
//   res('');
// }, ms));

const callAPI = () => new Promise(res => {
  fetch("https://catfact.ninja/fact", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((data) => data.json())
    .then((result) => {
     res(result);
    });
});

const callAnotherAPI = async () =>{
const res = await fetch("https://catfact.ninja/fact");
const data = await res.json();
return data;
}

function* demoAAction2(){
  // yield delay(1000);
  yield callAnotherAPI();
  yield put({type:'counter/increment'})
}

function* demoAction(){
yield debounce(1000,'HAHA',demoAAction2);
//ascynrho ...
}
export default demoAction;