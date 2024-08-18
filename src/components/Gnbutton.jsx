import React from 'react';
import styles from './Gnbutton.module.css';
import { GetInitials } from '../reuseables/reuseable_data';

export default function Gnbutton({ profile, sendgp, isActive }) {

  const groupname = profile.newgroupname ;
  const bgcolor = profile.selectedcolour ;

  const trimmedGroupname = groupname.trim();
  const initials=GetInitials(trimmedGroupname);

  const buttonStyle = {
    backgroundColor: bgcolor,
  };



  return (
    <div className={`${styles.button} ${isActive ? styles.active : ''}`} onClick={()=>{sendgp(profile)}}>

      <div className={styles.initials} style={buttonStyle}>
        {initials}
      </div>
      <div>{trimmedGroupname}</div>
    </div>
  );
}
