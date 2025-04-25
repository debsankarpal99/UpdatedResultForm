import { useState } from 'react';
import { useFormContext } from '../../context/FormContext';
import styles from '../../styles/Form.module.css';

export default function Step3CourseSpecific({ course, onBack, onNext }) {
  const { formData, updateFormData } = useFormContext();
  const [data, setData] = useState(formData[course] || {});
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  
  const handlePercentileChange = (subject, value) => {
    setData({
      ...data,
      percentiles: {
        ...data.percentiles,
        [subject]: value
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(course, data);
    onNext();
  };
  
  // This is specifically for CFA Level 3 second page
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formSection}>
        <div className={styles.formField}>
          <label className={styles.label}>
            Please provide your Percentile <span className={styles.requiredMark}>*</span>
          </label>
          
          <table className={styles.percentileTable}>
            <thead>
              <tr>
                <th></th>
                <th>Below 50</th>
                <th>50 to 70</th>
                <th>Above 70</th>
              </tr>
            </thead>
            <tbody>
              {['corporateFinance', 'economics', 'equity', 'ethics', 'fixedIncome', 'fra', 'portfolio', 'quants', 'others'].map((subject) => {
                const displayName = {
                  corporateFinance: 'Corporate Finance',
                  economics: 'Economics',
                  equity: 'Equity',
                  ethics: 'Ethics',
                  fixedIncome: 'Fixed Income',
                  fra: 'FRA',
                  portfolio: 'Portfolio',
                  quants: 'Quants',
                  others: 'Others'
                }[subject];
                
                return (
                  <tr key={subject}>
                    <td>{displayName}</td>
                    {['Below 50', '50 to 70', 'Above 70'].map((range) => (
                      <td key={range}>
                        <input
                          type="radio"
                          name={`percentile-${subject}`}
                          value={range}
                          checked={(data.percentiles && data.percentiles[subject]) === range}
                          onChange={() => handlePercentileChange(subject, range)}
                          required
                        />
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className={styles.buttonsContainer}>
        <button 
          type="button" 
          onClick={onBack} 
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Back
        </button>
        <button 
          type="submit" 
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Next
        </button>
      </div>
    </form>
  );
}
