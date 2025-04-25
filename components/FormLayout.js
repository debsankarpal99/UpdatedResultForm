// components/FormLayout.js
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../styles/Form.module.css';

export default function FormLayout({ children, title, step, totalSteps }) {
  const router = useRouter();
  const progress = (step / totalSteps) * 100;

  return (
    <div className={styles.formContainer}>
      <div className={styles.formHeader}>
        <h2>Results | Aswini Bajaj</h2>
      </div>
      <div className={styles.formContent}>
        <div className={styles.userInfo}>
          <p>debsankarpal74@gmail.com <Link href="#">Switch accounts</Link></p>
          <p>The name, email address and photo associated with your Google Account will be recorded when you upload files and submit this form</p>
          <p><span className={styles.requiredMark}>*</span> Indicates required question</p>
        </div>
        
        {title && (
          <div className={styles.sectionHeader}>
            <h3>{title}</h3>
          </div>
        )}
        
        {children}
        
        <div className={styles.progressBar}>
          <div 
            className={styles.progressFill} 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p>Page {step} of {totalSteps}</p>
        
        <p className={styles.disclaimer}>Never submit passwords through Google Forms.</p>
        <p className={styles.disclaimer}>
          This content is neither created nor endorsed by Google - 
          <Link href="#"> Terms of Service</Link> - 
          <Link href="#"> Privacy Policy</Link>
        </p>
        <p className={styles.disclaimer}>
          Does this form look suspicious? <Link href="#">Report</Link>
        </p>
      </div>
    </div>
  );
}
