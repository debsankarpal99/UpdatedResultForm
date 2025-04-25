import { useRouter } from 'next/router';
import { useFormContext } from '../../context/FormContext';
import styles from '../../styles/Form.module.css';

export default function FinalResultPage({ course, status, onBack }) {
  const router = useRouter();
  const { formData } = useFormContext();
  
  const handleNewSubmission = () => {
    router.push('/form/1');
  };
  
  // Different content based on pass/fail status
  const renderContent = () => {
    if (status === 'Pass') {
      return (
        <div className={styles.successMessage}>
          <h3>Congratulations on clearing the exam!</h3>
          <p>Your results have been recorded successfully.</p>
          
          {/* Display a summary of the form data */}
          <div className={styles.resultSummary}>
            <h4>Result Summary:</h4>
            <p><strong>Name:</strong> {formData.personalInfo.name}</p>
            <p><strong>Course:</strong> {formData.personalInfo.course}</p>
            <p><strong>Session:</strong> {formData[course].session}</p>
            <p><strong>Status:</strong> {formData[course].status}</p>
            
            {/* Add more details based on the course type */}
            {(course === 'cfaLevel1' || course === 'cfaLevel2' || course === 'cfaLevel3') && (
              <>
                <p><strong>Overall Score:</strong> {formData[course].overallScore}</p>
                <p><strong>Score:</strong> {formData[course].score}</p>
              </>
            )}
            
            {course === 'cfaLevel3' && (
              <p><strong>Pathway Chosen:</strong> {formData[course].pathwayChosen}</p>
            )}
          </div>
          
          <p>We will contact you shortly for your next steps.</p>
        </div>
      );
    } else {
      return (
        <div className={styles.failMessage}>
          <h3>We're sorry to hear about your result.</h3>
          <p>Your results have been recorded successfully.</p>
          
          {/* Display a summary of the form data */}
          <div className={styles.resultSummary}>
            <h4>Result Summary:</h4>
            <p><strong>Name:</strong> {formData.personalInfo.name}</p>
            <p><strong>Course:</strong> {formData.personalInfo.course}</p>
            <p><strong>Session:</strong> {formData[course].session}</p>
            <p><strong>Status:</strong> {formData[course].status}</p>
            
            {/* Add more details based on the course type */}
            {(course === 'cfaLevel1' || course === 'cfaLevel2' || course === 'cfaLevel3') && (
              <>
                <p><strong>Overall Score:</strong> {formData[course].overallScore}</p>
                <p><strong>Score:</strong> {formData[course].score}</p>
              </>
            )}
            
            {course === 'cfaLevel3' && (
              <p><strong>Pathway Chosen:</strong> {formData[course].pathwayChosen}</p>
            )}
          </div>
          
          <p>Don't worry, our team will reach out to help you prepare better for the next attempt.</p>
        </div>
      );
    }
  };
  
  return (
    <div>
      {renderContent()}
      
      <div className={styles.buttonsContainer}>
        <button 
          type="button" 
          onClick={onBack} 
          className={`${styles.button} ${styles.buttonSecondary}`}
        >
          Back
        </button>
        <button 
          type="button" 
          onClick={handleNewSubmission} 
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          New Submission
        </button>
      </div>
    </div>
  );
}
