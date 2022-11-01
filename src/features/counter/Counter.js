import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, incrementByAmount } from "./counterSlice";

const Counter = () => {
  const [incrementAmount, setIncrementAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className='flex flex-col justify-center h-screen'>
      <div>
        <p className="text-7xl font-semibold text-center my-6">{count}</p>
        <div className="flex justify-center">
          <button
            className="px-4 py-2 border border-blue-300 bg-blue-100 mx-4"
            onClick={() => {
              dispatch(increment());
            }}
          >
            +
          </button>
          <button
            className="px-4 py-2 border border-blue-300 bg-blue-100 mx-4"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            -
          </button>
        </div>

        <input
          className="my-6 text-5xl h-20 text-center mx-auto flex justify-center focus:outline-0"
          type="number"
          value={incrementAmount}
          onChange={(e) => {
            setIncrementAmount(+e.target.value);
          }}
        />
        <div className="flex justify-center">
          <button
            className="px-4 py-2 border border-blue-300 bg-blue-100 mx-4"
            onClick={() => {
              dispatch(incrementByAmount(incrementAmount));
            }}
          >
            increment
          </button>
          <button
            className="px-4 py-2 border border-blue-300 bg-blue-100 mx-4"
            onClick={() => {
              dispatch(reset());
              setIncrementAmount(0);
            }}
          >
            reset
          </button>
        </div>
      </div>
    </section>
  );
};

export default Counter;
