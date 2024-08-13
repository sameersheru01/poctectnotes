import React, { useContext, useState } from 'react';
import Gnbutton from '../components/Gnbutton';
import styles from "./Groupssection.module.css";
import PopupMessage from '../components/Addprofile';
import { AppContext } from '../context/AppContext';

export default function Groupssection() {
  const { groupnames, setGroupNames, mobileview, hide, setHide, setSelectedgp } = useContext(AppContext);
  const [showPopup, setShowPopup] = useState(false);
  

  const handleClosePopup = (data) => {
    if (data && data.newgroupname && data.newgroupname.trim() !== '') {
      setGroupNames([...groupnames, data]);
    }
    setShowPopup(false);
  };

  function newprofile() {
    setShowPopup(true);
  }

  function btnname(profile) {
    setSelectedgp(profile); 
    setHide(true);
  }



  return (
    <div className={`${styles.left} ${mobileview && hide && styles.mobile}`} >
      <h2 className={styles.heading}>Pocket Notes</h2>
      <div className={styles.list}>
        {groupnames.map((profile, index) => (
          <Gnbutton key={index} sendgp={btnname} profile={profile} />
        ))}
      </div>
      <button className={styles.add} onClick={newprofile}>+</button>
      {showPopup && (
        <div className={styles.popupContainer} >
          <PopupMessage onClose={handleClosePopup} />
        </div>
      )}
    </div>
  );
}
