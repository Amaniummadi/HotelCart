import React from 'react';

import styles from './Counter.module.css';

export function Counter({handleIncrement,handleDecrement,count,isEnabled}) {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
 

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button disabled={!isEnabled}
          className={styles.button}
          aria-label="Decrement value"
          onClick={handleDecrement}
        >
          -
        </button>
      </div>
     
    </div>
  );
}
