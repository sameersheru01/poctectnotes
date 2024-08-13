import React, { useContext, useEffect, useState, useCallback } from 'react';
import styles from './Chatview.module.css';
import { AppContext } from '../context/AppContext';
import Header from './Header';
import { IoSendSharp } from 'react-icons/io5';
import { getFormattedDateTime } from '../reuseables/reuseable_data';

export default function Chatview({ selectedgroup }) {
  const [notes, setNotes] = useState([]);
  const [newnote, setNewnote] = useState('');
  const { groupnames, setGroupNames } = useContext(AppContext);
  const { date, time } = getFormattedDateTime();

  // Handle adding a new note
  const handleAddNote = useCallback(() => {
    if (newnote.trim() === '') return; // Avoid adding empty notes

    const data = { newnote, date, time };

    setNotes(prevNotes => {
      const updatedNotes = [...prevNotes, data];
      return updatedNotes;
    });

    // Update context and local storage outside of render
    const updatedGroups = groupnames.map(group => {
      if (group.newgroupname === selectedgroup.newgroupname) {
        return { ...group, notes: [...notes, data] };
      }
      return group;
    });

    setGroupNames(updatedGroups);
    localStorage.setItem('groupnames', JSON.stringify(updatedGroups));

    setNewnote(''); // Clear the input field
  }, [newnote, date, time, groupnames, selectedgroup.newgroupname, setGroupNames, notes]);

  // Load notes when selected group changes
  useEffect(() => {
    const currentGroup = groupnames.find(group => group.newgroupname === selectedgroup.newgroupname);
    if (currentGroup) {
      setNotes(currentGroup.notes || []); // Ensure notes is always an array
    }
  }, [selectedgroup, groupnames]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Header groupname={selectedgroup.newgroupname} bgcolor={selectedgroup.selectedcolour} />
      </div>
      <div className={styles.content}>
        <div className={styles.notes}>
          {notes.map((note, index) => (
            <div key={index} className={styles.note}>
              <p>{note.newnote}</p>
              <p className={styles.meta}><i>{note.date} . {note.time}</i></p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.footer}>
        <textarea
          placeholder='Here’s the sample text for sample work'
          value={newnote}
          onChange={(e) => setNewnote(e.target.value)}
        ></textarea>
        <IoSendSharp onClick={handleAddNote} className={`${styles.svg} ${newnote.trim() === '' && styles.svg1}`} disabled={newnote.trim() === ''}/>
      </div>
    </div>
  );
}
