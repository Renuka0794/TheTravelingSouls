import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

export default function PlanStepper({steps=[]}) {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label}>
            <StepLabel
            >
             {step.label}
            </StepLabel>
            <StepContent>
              <p className='text-lg-left-sm-center'>{step.description}</p>
                <div className='pt-2 text-right'>
                  {index === steps.length - 1 ? <KeyboardDoubleArrowUpIcon className='icon-sm' onClick={handleReset} />: 
                    <ExpandMoreIcon className='icon-sm' onClick={handleNext}/>
                  }
                  <ExpandLessIcon className='icon-sm' onClick={handleBack}/>      
                </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
}
