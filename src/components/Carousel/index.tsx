import { useState } from 'react';

import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';

import { Typography, Box, Button } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import { Category } from '../../types/category';

import * as S from './styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type CategoryProps = {
  categories: Category[];
};
const Carousel = ({ categories }: CategoryProps) => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = categories?.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <>
      <Box mt={5}>
        <AutoPlaySwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {categories?.map((step: Category, index: number) => (
            <div key={step.name}>
              {Math.abs(activeStep - index) <= 2 ? (
                <>
                  <Box
                    borderRadius={3}
                    component="img"
                    sx={{
                      height: 300,
                      display: 'block',
                      overflow: 'hidden',
                      width: '100%',
                    }}
                    src={step.image}
                    alt={step.name}
                  />
                  <S.BoxText m={2} width={'40%'}>
                    <Typography variant="h4" color="#213058">
                      {categories[activeStep].name}
                    </Typography>
                  </S.BoxText>
                </>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          style={{ backgroundColor: '#28696a' }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
              style={{ color: '#213058' }}
            >
              Next
              {theme.direction === 'rtl' ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
              style={{ color: '#213058' }}
            >
              {theme.direction === 'rtl' ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
              Back
            </Button>
          }
        />
      </Box>
    </>
  );
};

export default Carousel;
