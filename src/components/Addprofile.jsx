import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Addprofile.module.css'


const Addprofile = ({ onClose }) => {
  const [newgroupname, setNewGroupName] = useState('');
  const [selectedcolour, setSelectedcolour] = useState('');
  const [error,setError] = useState(false);
  const pop =useRef(null);
  const data={newgroupname: newgroupname,
    selectedcolour: selectedcolour,
    notes: [],
  }
  function handle(){
    if(!newgroupname || !selectedcolour){
      setError(true);
    }else{
      setError(false);
      onClose(data);
    }
  }
  const handleClickOutside = useCallback((e) => {
    if (pop.current && !pop.current.contains(e.target)) {
      onClose();
    }
  }, [onClose]);

  
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);
    const BtnBg =['#B38BFA','#FF79F2','#43E6FC','#F19576','#0047FF','#6691FF']
    return (
      <div className={styles.popup}>
        <div className={styles.inner} ref={pop}> 
          <h2>Create New group</h2>
          <div className={styles.content}><label>Group Name</label><input type="text" placeholder= 'Enter group name' value={newgroupname} onChange={(e)=>{setNewGroupName(e.target.value)}}/></div>
          <div className={styles.content}><label>Choose colour</label>
          <div className={styles.contents}>{BtnBg.map((color,index)=>(<div key={index} className={`${styles.clr} ${selectedcolour === color ? styles.selected : ''}`} onClick={()=>setSelectedcolour(color)} style={{backgroundColor:color}}></div>))}</div>
          </div>
          {error && <p className={styles.error}>Fill the every field</p>}
          <button onClick={()=>{handle()}}>Create</button>
        </div>
      </div>
    );
  };

export default Addprofile
