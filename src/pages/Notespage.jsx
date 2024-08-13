import React, { useContext } from 'react';
import styles from "./Notespage.module.css";
import { AppContext } from '../context/AppContext';
import Chatviewpage from './Chatviewpage';
import Groupssection from '../components/Groupssection';

export default function Notespage() {
  const { mobileview,  hide,  selectedgp, } = useContext(AppContext);
 
  return (
    <div className={styles.container}>
      <div className={`${styles.left} ${mobileview && hide && styles.mobile}`}>
        <Groupssection />
      </div>
      <div className={`${styles.right} ${mobileview && !hide && styles.mobile}`}>
        <Chatviewpage selectedgp={selectedgp} />
      </div>
    </div>
  );
}
