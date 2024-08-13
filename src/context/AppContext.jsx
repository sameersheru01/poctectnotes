import React, { createContext, useEffect, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [groupnames, setGroupNames] = useState(
    JSON.parse(localStorage.getItem("groupnames")) || []
  );
  // const [notes, setNotes] = useState([]);
  const [mobileview, setMobileview] = useState(window.innerWidth <= 768);
  const [hide, setHide] = useState(false);
  const [selectedgp, setSelectedgp] = useState(null);

  useEffect(() => {
    localStorage.setItem("groupnames", JSON.stringify(groupnames));
  }, [groupnames]);

  useEffect(() => {
    const handleResize = () => {
      const bodyWidth = document.body.offsetWidth;
      // console.log('Body width:', bodyWidth);
      setMobileview(bodyWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    handleResize();
  
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  

  return (
    <AppContext.Provider value={{ groupnames, setGroupNames, mobileview, setMobileview, hide, setHide, selectedgp, setSelectedgp }}>
      {children}
    </AppContext.Provider>
  );
};
