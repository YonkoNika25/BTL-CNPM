// src/components/StudentList/StudentList.js
import React from 'react';
import styles from './StudentList.module.css';

function StudentList({ students, onEdit, onDelete }) {
  return (
    <ul className={styles.list}>
      {students.map((student) => (
        <li key={student.id} className={styles.item}>
          {student.name} - {student.id}
          <button className={styles.editButton} onClick={() => onEdit(student)}>Edit</button>
          <button className={styles.deleteButton} onClick={() => onDelete(student.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default StudentList;