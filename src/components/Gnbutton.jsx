import React, { useContext } from 'react';
import { IoArrowBack } from "react-icons/io5";
import styles from './Gnbutton.module.css';
import { AppContext } from '../context/AppContext';
import { GetInitials } from '../reuseables/reuseable_data';

export default function Gnbutton({ profile, sendgp }) {


  const groupname = profile.newgroupname ;
  const bgcolor = profile.selectedcolour ;

  const trimmedGroupname = groupname.trim();
  const initials=GetInitials(trimmedGroupname);

  const buttonStyle = {
    backgroundColor: bgcolor,
  };



  return (
    <div className={styles.button} onClick={()=>sendgp(profile)}>

      <div className={styles.initials} style={buttonStyle}>
        {initials}
      </div>
      <div>{trimmedGroupname}</div>
    </div>
  );
}
