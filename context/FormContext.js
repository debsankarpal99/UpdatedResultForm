import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    personalInfo: {
      name: 'Debsankar',
      email: 'debsankarpal.lg@gmail.com',
      userId: '111111',
      mobile: '8697515856',
      course: '',
    },
    cfaLevel1: {
      session: 'Feb 25',
      overallScore: '> Minimum Passing Score',
      score: '1650',
      percentiles: {
        corporateFinance: '50 to 70',
        economics: 'Above 70',
        equity: 'Above 70',
        ethics: 'Above 70',
        fixedIncome: '50 to 70',
        fra: 'Above 70',
        portfolio: 'Above 70',
        quants: '50 to 70',
        others: 'Above 70',
      },
      status: 'Pass',
    },
    cfaLevel2: {
      session: 'May 25',
      overallScore: '> Minimum Passing Score',
      score: '1668',
      percentiles: {
        corporateFinance: 'Above 70',
        economics: '50 to 70',
        equity: 'Above 70',
        ethics: 'Above 70',
        fixedIncome: 'Above 70',
        fra: 'Above 70',
        portfolio: 'Above 70',
        quants: 'Above 70',
        others: 'Above 70',
      },
      status: 'Fail',
    },
    cfaLevel3: {
      session: 'Feb 25',
      overallScore: '',
      score: '',
      percentiles: {},
      pathwayChosen: '',
      pathwayPercentile: '',
      status: '',
    },
    frmPart1: {
      session: 'May 25',
      quartiles: {
        foundationsOfRiskManagement: '51% - 75%',
        quantitativeAnalysis: '> 75%',
        financialMarketsAndProducts: '51% - 75%',
        valuationAndRiskManagement: '> 75%',
      },
      status: 'Pass',
    },
    frmPart2: {
      session: 'May 25',
      quartiles: {
        marketRisk: '26% - 50%',
        creditRisk: '26% - 50%',
        operationalRisk: '26% - 50%',
        riskManagementInvestmentManagement: '26% - 50%',
        currentIssues: '26% - 50%',
        liquidityRisk: '26% - 50%',
      },
      status: 'Fail',
    },
  });

  const updateFormData = (section, data) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        ...data,
      },
    });
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
}

export function useFormContext() {
  return useContext(FormContext);
}
