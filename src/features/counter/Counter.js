import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <section className="flex justify-center items-center h-screen">
      <div>
        <p className="text-4xl font-semibold text-center">{count}</p>

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
        <button
          className="px-4 py-2 border border-blue-300 bg-blue-100 mx-4"
          onClick={() => {
            dispatch(reset());
          }}
        >
          reset
        </button>
      </div>
    </section>
  );
};

export default Counter;
