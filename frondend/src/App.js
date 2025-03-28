// src/App.js
import React, { useState } from 'react';
import AttendanceForm from './components/AttendanceForm/AttendanceForm';
import StudentList from './components/StudentList/StudentList';
import StudentForm from './components/StudentForm/StudentForm';
import styles from './App.module.css';

function App() {
  const [students, setStudents] = useState([]);
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [showStudentForm, setShowStudentForm] = useState(false);  // Thêm/sửa sinh viên
  const [editingStudent, setEditingStudent] = useState(null); // Sinh viên đang được sửa

  const handleAttendanceSubmit = (studentName) => {
    const newRecord = {
      id: Date.now(), // ID tạm thời (dùng timestamp)
      name: studentName,
      time: new Date().toLocaleString(),
    };
    setAttendanceRecords([...attendanceRecords, newRecord]);
  };

  const addStudent = (student) => {
      if(editingStudent) { //Sửa
        setStudents(students.map(s => s.id === editingStudent.id ? {...s, ...student}: s));
        setEditingStudent(null);

      }
      else{ //Thêm
        setStudents([...students, { ...student, id: Date.now() }]);
      }

    setShowStudentForm(false);
  };
    const editStudent = (student) => {
        setEditingStudent(student);
        setShowStudentForm(true);
    }
    const deleteStudent = (studentId) => {
        setStudents(students.filter(student => student.id !== studentId));
    }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Attendance App</h1>

      <AttendanceForm onSubmit={handleAttendanceSubmit} />

      <h2>Attendance Records</h2>
      <ul>
        {attendanceRecords.map((record) => (
          <li key={record.id}>
            {record.name} - {record.time}
          </li>
        ))}
      </ul>

        <h2>Students</h2>
          <button className={styles.addButton} onClick={() => {setShowStudentForm(true); setEditingStudent(null);}}>Add Student</button>
          <StudentList students={students} onEdit={editStudent} onDelete={deleteStudent} />

          {showStudentForm && (
            <StudentForm
                onSave={addStudent}
                onCancel={() => setShowStudentForm(false)}
                initialData = {editingStudent}
            />
        )}

    </div>
  );
}

export default App;