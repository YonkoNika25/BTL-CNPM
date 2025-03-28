// src/components/AttendanceForm/AttendanceForm.js
import React, { useState } from 'react';
import styles from './AttendanceForm.module.css';

function AttendanceForm({ onSubmit }) {
  const [studentName, setStudentName] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (studentName.trim() !== '') {
      onSubmit(studentName);
      setStudentName(''); // Clear input
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
        placeholder="Enter student name"
        required
        className={styles.input}
      />
      <button type="submit" className={styles.button}>Attend</button>
    </form>
  );
}

export default AttendanceForm;