import React, { useContext } from 'react'
import Chatview from '../components/Chatview'
import styles from "./chatviewpage.module.css";
import { AppContext } from '../context/AppContext';
import Home from '../components/Home';

export default function Chatviewpage({ selectedgp }) {
  const {mobileview, hide, } = useContext(AppContext);
  return (
    <div className={`${styles.right} ${mobileview && !hide && styles.mobile}`}>
    {selectedgp ? (
      <Chatview selectedgroup={selectedgp}  />
    ) : (
      <Home/>
    )}
  </div>
  )
}
