import { useSelector } from "react-redux";

const Counter = (props) => {
  const counter = useSelector((state) => state.counter.counter);
  return (
    <div>
      <p>counter: {counter}</p>
    </div>
  );
};

export default Counter;
