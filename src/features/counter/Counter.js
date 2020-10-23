import React from 'react';

import styles from './Counter.module.css';

export function Counter({handleIncrement,handleDecrement,count,isEnabled}) {
  // const count = useSelector(selectCount);
  // const dispatch = useDispatch();
 

  return (
    <div>
      <div className={styles.row}>
        <button style={{backgroundColor:"#03254c",color:"white"}}
          className={styles.button}
          aria-label="Increment value"
          onClick={handleIncrement}
        >
          +
        </button>
        <span className={styles.value}>{count}</span>
        <button disabled={!isEnabled}  style={{backgroundColor:"#ff6961",color:'white'}}
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
