import React, { useContext } from 'react'
import styles from './header.module.css';
import { AppContext } from '../context/AppContext';
import { IoArrowBack } from 'react-icons/io5';
import { GetInitials } from '../reuseables/reuseable_data';

export default function Header({groupname,bgcolor}) {
    const { mobileview, hide, setHide, setActiveIndex } = useContext(AppContext);
    const initials = GetInitials(groupname)
    const buttonStyle = {
        backgroundColor: bgcolor,
      };
  return (
    <div className={styles.button}>
      {mobileview && hide && (
        <div onClick={(e)=>{setHide(false);setActiveIndex(null)}}>
          <IoArrowBack />
        </div>
      )}
      <div className={styles.initials} style={buttonStyle}>
        {initials}
      </div>
      <div>{groupname}</div>
    </div>
  )
}
