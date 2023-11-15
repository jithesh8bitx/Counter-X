import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, reset } from "./redux/counterSlice";
import { useState } from "react";

function App() {
  const [range, setRange] = useState("");

  //hook to dispatch a function in action
  const dispatch = useDispatch();

  //component can access the state by using useSelector Hook
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="wrapper-div">
      <h1>Counter Application</h1>
      <p className="count">{count}</p>
      <div className="btn-div">
        <button
          onClick={() => dispatch(increment(Number(range)))}
          className="btn-increment"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement(Number(range)))}
          className="btn-decrement"
        >
          Decrement
        </button>
        <button onClick={() => dispatch(reset())} className="btn-reset">
          Reset
        </button>
      </div>
      <div className="form-group" onChange={(e) => setRange(e.target.value)}>
        <input type="text" name="range" placeholder="Enter the Range" />
      </div>
    </div>
  );
}

export default App;
