import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
  // incrementAsync,
  // selectCount,
} from "../../redux/counter/counterSlice";
import { incrementAsync } from "../../redux/counter/incrementAsync";
import { selectCount } from "../../redux/counter/selectCount";

import styles from "./Counter.module.css";

export function Counter() {
  const count = useSelector((state) => state.counter.value);
  const countValue = useSelector((state) => state.counter.testValue);
  const countF = useSelector(selectCount);

  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState("2");

  useEffect(() => {
    console.log("🚀 ~ file: Counter.js ~ line 14 ~ Counter ~ count", count);
    console.log(
      "🚀 ~ file: Counter.js ~ line 15 ~ Counter ~ countValue",
      countValue
    );
    console.log("🚀 ~ file: Counter.js ~ line 18 ~ Counter ~ countF", countF);
  }, []);

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}>
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() =>
            dispatch(incrementByAmount(Number(incrementAmount) || 0))
          }>
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() =>
            dispatch(incrementAsync(Number(incrementAmount) || 0))
          }>
          Add Async
        </button>
      </div>
    </div>
  );
}
