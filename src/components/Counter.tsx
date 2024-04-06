import { useState } from 'react'
import styles from './Counter.module.scss'

export const Counter = () => {
  const [count, setCount] = useState(0)
  const increment = () => {
    setCount(count + 1)
  }

  return <div>
    <p>{count}</p>
    <button className={styles.btn} onClick={increment}>increment</button>
  </div>
}
