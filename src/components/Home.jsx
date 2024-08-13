import React from 'react'
import home from '../assests/home.png'
import styles from './Home.module.css'
import { IoMdLock } from 'react-icons/io'

export default function Home() {
  return (
    <div className={styles.container}>
       <div>
       <img src={home} alt="home img" />
        <h2>Pocket Notes</h2>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
       </div>
      <div className={styles.end} >
      <IoMdLock  />
        <p>end-to-end encrypted</p>
      </div>
    </div>
  )
}
