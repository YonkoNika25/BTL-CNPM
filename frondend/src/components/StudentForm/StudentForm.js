// src/components/StudentForm/StudentForm.js
import React, { useState, useEffect } from 'react';
import styles from './StudentForm.module.css'
function StudentForm({ onSave, onCancel, initialData }) {
    const [name, setName] = useState('');

    useEffect(() => {
        if (initialData) {
            setName(initialData.name);
        }
    }, [initialData]);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSave({ name });
        // Reset form (if creating a new student)
        if (!initialData) {
            setName('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className={styles.input}
                />
            </label>
            <button type="submit" className={styles.saveButton}>{initialData ? 'Save Changes' : 'Add Student'}</button>
            <button type="button" onClick={onCancel} className={styles.cancelButton}>Cancel</button>
        </form>
    );
}

export default StudentForm;