import { useRouter } from 'next/router';
import { useFormContext } from '../../context/FormContext';
import FormLayout from '../../components/FormLayout';
import Step1PersonalInfo from '../../components/FormSteps/Step1PersonalInfo';
import Step2CourseSpecific from '../../components/FormSteps/Step2CourseSpecific';
import Step3CourseSpecific from '../../components/FormSteps/Step3CourseSpecific';
import Step4CourseSpecific from '../../components/FormSteps/Step4CourseSpecific';
import FinalResultPage from '../../components/FormSteps/FinalResultPage';
import styles from '../../styles/Form.module.css';

export default function FormStep() {
  const router = useRouter();
  const { step } = router.query;
  const { formData } = useFormContext();
  
  const currentStep = parseInt(step) || 1;
  const totalSteps = 10; // Total possible steps
  
  const handleBack = () => {
    router.push(`/form/${currentStep - 1}`);
  };
  
  const handleNext = () => {
    router.push(`/form/${currentStep + 1}`);
  };
  
  const renderStep = () => {
    // First step is always personal info
    if (currentStep === 1) {
      return <Step1PersonalInfo onNext={handleNext} />;
    }
    
    // Based on the course selection from step 1, show the appropriate forms
    const selectedCourse = formData.personalInfo.course;
    
    if (selectedCourse === 'CFA - Level 1') {
      if (currentStep === 2) {
        return <Step2CourseSpecific course="cfaLevel1" onBack={handleBack} onNext={handleNext} />;
      } else if (currentStep === 3) {
        // Show final page based on pass or fail status
        return <FinalResultPage course="cfaLevel1" status={formData.cfaLevel1.status} onBack={handleBack} />;
      }
    } 
    else if (selectedCourse === 'CFA - Level 2') {
      if (currentStep === 2) {
        return <Step2CourseSpecific course="cfaLevel2" onBack={handleBack} onNext={handleNext} />;
      } else if (currentStep === 3) {
        return <FinalResultPage course="cfaLevel2" status={formData.cfaLevel2.status} onBack={handleBack} />;
      }
    }
    else if (selectedCourse === 'CFA - Level 3') {
      if (currentStep === 2) {
        return <Step2CourseSpecific course="cfaLevel3" onBack={handleBack} onNext={handleNext} />;
      } else if (currentStep === 3) {
        return <Step3CourseSpecific course="cfaLevel3" onBack={handleBack} onNext={handleNext} />;
      } else if (currentStep === 4) {
        return <FinalResultPage course="cfaLevel3" status={formData.cfaLevel3.status} onBack={handleBack} />;
      }
    }
    else if (selectedCourse === 'FRM - Part 1') {
      if (currentStep === 2) {
        return <Step2CourseSpecific course="frmPart1" onBack={handleBack} onNext={handleNext} />;
      } else if (currentStep === 3) {
        return <FinalResultPage course="frmPart1" status={formData.frmPart1.status} onBack={handleBack} />;
      }
    }
    else if (selectedCourse === 'FRM - Part 2') {
      if (currentStep === 2) {
        return <Step2CourseSpecific course="frmPart2" onBack={handleBack} onNext={handleNext} />;
      } else if (currentStep === 3) {
        return <FinalResultPage course="frmPart2" status={formData.frmPart2.status} onBack={handleBack} />;
      }
    }
    
    // Default page or error state
    return (
      <div>
        <p>Invalid step or course selection.</p>
        <button className={styles.button} onClick={() => router.push('/form/1')}>
          Back to Start
        </button>
      </div>
    );
  };
  
  let title = "Form";
  if (currentStep === 1) title = "Personal Information";
  else if (formData.personalInfo.course) {
    title = formData.personalInfo.course;
  }
  
  return (
    <FormLayout title={title} step={currentStep} totalSteps={totalSteps}>
      {renderStep()}
    </FormLayout>
  );
}
