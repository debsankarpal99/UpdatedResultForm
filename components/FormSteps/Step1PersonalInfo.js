import { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import styles from '../../styles/Form.module.css';

export default function Step1PersonalInfo({ onNext }) {
  const { formData, updateFormData } = useFormContext();
  const [data, setData] = useState({
    name: formData.personalInfo.name || '',
    email: formData.personalInfo.email || '',
    userId: formData.personalInfo.userId || '',
    mobile: formData.personalInfo.mobile || '',
    course: formData.personalInfo.course || '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData('personalInfo', data);
    onNext();
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formSection}>
        <div className={styles.formField}>
          <label className={styles.label}>
            Email <span className={styles.requiredMark}>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formField}>
          <label className={styles.label}>
            Name <span className={styles.requiredMark}>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formField}>
          <label className={styles.label}>
            User ID <span className={styles.requiredMark}>*</span>
          </label>
          <input
            type="text"
            name="userId"
            value={data.userId}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formField}>
          <label className={styles.label}>
            Registered Mobile Number <span className={styles.requiredMark}>*</span>
          </label>
          <input
            type="tel"
            name="mobile"
            value={data.mobile}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>
        
        <div className={styles.formField}>
          <label className={styles.label}>
            Course <span className={styles.requiredMark}>*</span>
          </label>
          <div className={styles.radioGroup}>
            {['CFA - Level 1', 'CFA - Level 2', 'CFA - Level 3', 'FRM - Part 1', 'FRM - Part 2'].map((course) => (
              <div key={course} className={styles.radioOption}>
                <input
                  type="radio"
                  id={course}
                  name="course"
                  value={course}
                  checked={data.course === course}
                  onChange={handleChange}
                  required
                />
                <label htmlFor={course} className={styles.radioLabel}>{course}</label>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className={styles.buttonsContainer}>
        <div></div> {/* Empty div for spacing */}
        <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>
          Next
        </button>
      </div>
    </form>
  );
}
