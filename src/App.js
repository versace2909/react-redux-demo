import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Counter from "./counter";
import Header from "./header";
import { counterAction } from "./store/index";
import demoAction from "./sagas";


function App() {
  const counter = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const incrementFromRedux = () => {
    dispatch({type:'HAHA'});
    // dispatch(counterAction.increment());
  };
  const [factCat, setFactCat] = useState("");
  useEffect(() => {
    fetch("https://catfact.ninja/fact", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => data.json())
      .then((result) => {
        setFactCat(result.fact);
        dispatch(counterAction.increment());
      });
  }, []);

  return (
    <div className="App">
      <Header />
      {factCat}
      <p>Counter : {counter}</p>
      <button onClick={incrementFromRedux}>Increment</button>
      <Counter />
    </div>
  );
}

export default App;
