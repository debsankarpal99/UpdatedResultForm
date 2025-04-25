import { useState, useEffect } from 'react';
import { useFormContext } from '../../context/FormContext';
import styles from '../../styles/Form.module.css';

export default function Step2CourseSpecific({ course, onBack, onNext }) {
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
  
  const handleQuartileChange = (subject, value) => {
    setData({
      ...data,
      quartiles: {
        ...data.quartiles,
        [subject]: value
      }
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    updateFormData(course, data);
    onNext();
  };
  
  // Render different form fields based on course
  const renderCourseFields = () => {
    // CFA Level 1 & 2 forms are similar
    if (course === 'cfaLevel1' || course === 'cfaLevel2') {
      return (
        <>
          <div className={styles.formField}>
            <label className={styles.label}>
              Session <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Feb 25', 'May 25', 'Aug 25', 'Nov 25'].map((session) => (
                <div key={session} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`session-${session}`}
                    name="session"
                    value={session}
                    checked={data.session === session}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`session-${session}`} className={styles.radioLabel}>{session}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please provide your overall Score <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['< Minimum Passing Score', '= Minimum Passing Score', '> Minimum Passing Score'].map((score) => (
                <div key={score} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`overallScore-${score}`}
                    name="overallScore"
                    value={score}
                    checked={data.overallScore === score}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`overallScore-${score}`} className={styles.radioLabel}>{score}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Your Score <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="text"
              name="score"
              value={data.score || ''}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          
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
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please Select <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Pass', 'Fail'].map((status) => (
                <div key={status} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`status-${status}`}
                    name="status"
                    value={status}
                    checked={data.status === status}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`status-${status}`} className={styles.radioLabel}>{status}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    // CFA Level 3 first page
    else if (course === 'cfaLevel3') {
      return (
        <>
          <div className={styles.formField}>
            <label className={styles.label}>
              Session <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Feb 25', 'May 25', 'Aug 25', 'Nov 25'].map((session) => (
                <div key={session} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`session-${session}`}
                    name="session"
                    value={session}
                    checked={data.session === session}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`session-${session}`} className={styles.radioLabel}>{session}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please provide your overall Score <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['< Minimum Passing Score', '= Minimum Passing Score', '> Minimum Passing Score'].map((score) => (
                <div key={score} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`overallScore-${score}`}
                    name="overallScore"
                    value={score}
                    checked={data.overallScore === score}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`overallScore-${score}`} className={styles.radioLabel}>{score}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Your Score <span className={styles.requiredMark}>*</span>
            </label>
            <input
              type="text"
              name="score"
              value={data.score || ''}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Which Pathway you chose? <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Portfolio Management', 'Private Market', 'Private Wealth'].map((pathway) => (
                <div key={pathway} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`pathway-${pathway}`}
                    name="pathwayChosen"
                    value={pathway}
                    checked={data.pathwayChosen === pathway}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`pathway-${pathway}`} className={styles.radioLabel}>{pathway}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please provide your percentile for the Pathway you chosen <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Below 50', '50 to 70', 'Above 70'].map((percentile) => (
                <div key={percentile} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`pathwayPercentile-${percentile}`}
                    name="pathwayPercentile"
                    value={percentile}
                    checked={data.pathwayPercentile === percentile}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`pathwayPercentile-${percentile}`} className={styles.radioLabel}>{percentile}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please Select <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Pass', 'Fail'].map((status) => (
                <div key={status} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`status-${status}`}
                    name="status"
                    value={status}
                    checked={data.status === status}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`status-${status}`} className={styles.radioLabel}>{status}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    // FRM Part 1
    else if (course === 'frmPart1') {
      return (
        <>
          <div className={styles.formField}>
            <label className={styles.label}>
              Session <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Feb 25', 'May 25', 'Aug 25', 'Nov 25'].map((session) => (
                <div key={session} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`session-${session}`}
                    name="session"
                    value={session}
                    checked={data.session === session}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`session-${session}`} className={styles.radioLabel}>{session}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please provide your quartiles: (Please fill this, it enables me to analysis your score better)
            </label>
            
            <table className={styles.quartileTable}>
              <thead>
                <tr>
                  <th></th>
                  <th> <= 25%</th>
                  <th>26% - 50%</th>
                  <th>51% - 75%</th>
                  <th>> 75%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'foundationsOfRiskManagement', name: 'Foundations of Risk Management' },
                  { id: 'quantitativeAnalysis', name: 'Quantitative Analysis' },
                  { id: 'financialMarketsAndProducts', name: 'Financial Markets and Products' },
                  { id: 'valuationAndRiskManagement', name: 'Valuation and Risk Management' }
                ].map((subject) => (
                  <tr key={subject.id}>
                    <td>{subject.name}</td>
                    {['<= 25%', '26% - 50%', '51% - 75%', '> 75%'].map((range) => (
                      <td key={range}>
                        <input
                          type="radio"
                          name={`quartile-${subject.id}`}
                          value={range}
                          checked={(data.quartiles && data.quartiles[subject.id]) === range}
                          onChange={() => handleQuartileChange(subject.id, range)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please Select <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Pass', 'Fail'].map((status) => (
                <div key={status} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`status-${status}`}
                    name="status"
                    value={status}
                    checked={data.status === status}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`status-${status}`} className={styles.radioLabel}>{status}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    // FRM Part 2
    else if (course === 'frmPart2') {
      return (
        <>
          <div className={styles.formField}>
            <label className={styles.label}>
              Session <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Feb 25', 'May 25', 'Aug 25', 'Nov 25'].map((session) => (
                <div key={session} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`session-${session}`}
                    name="session"
                    value={session}
                    checked={data.session === session}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`session-${session}`} className={styles.radioLabel}>{session}</label>
                </div>
              ))}
            </div>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please provide your quartiles: (Please fill this, it enables me to analysis your score better)
            </label>
            
            <table className={styles.quartileTable}>
              <thead>
                <tr>
                  <th></th>
                  <th> <= 25%</th>
                  <th>26% - 50%</th>
                  <th>51% - 75%</th>
                  <th>> 75%</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'marketRisk', name: 'Market Risk' },
                  { id: 'creditRisk', name: 'Credit Risk' },
                  { id: 'operationalRisk', name: 'Operational Risk' },
                  { id: 'riskManagementInvestmentManagement', name: 'Risk Management & Investment Management' },
                  { id: 'currentIssues', name: 'Current Issues' },
                  { id: 'liquidityRisk', name: 'Liquidity Risk' }
                ].map((subject) => (
                  <tr key={subject.id}>
                    <td>{subject.name}</td>
                    {['<= 25%', '26% - 50%', '51% - 75%', '> 75%'].map((range) => (
                      <td key={range}>
                        <input
                          type="radio"
                          name={`quartile-${subject.id}`}
                          value={range}
                          checked={(data.quartiles && data.quartiles[subject.id]) === range}
                          onChange={() => handleQuartileChange(subject.id, range)}
                        />
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className={styles.formField}>
            <label className={styles.label}>
              Please Select <span className={styles.requiredMark}>*</span>
            </label>
            <div className={styles.radioGroup}>
              {['Pass', 'Fail'].map((status) => (
                <div key={status} className={styles.radioOption}>
                  <input
                    type="radio"
                    id={`status-${status}`}
                    name="status"
                    value={status}
                    checked={data.status === status}
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor={`status-${status}`} className={styles.radioLabel}>{status}</label>
                </div>
              ))}
            </div>
          </div>
        </>
      );
    }
    
    return <p>Unknown course type</p>;
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.formSection}>
        {renderCourseFields()}
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
