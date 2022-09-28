import React from 'react'

import bgImage from '../../images/bImage.jpg'

import HeroSection from "../Herosection/HeroSection";
import BlurCard from '../UI/Cards/CardBlur';

import classes from './PersonalDetails.module.css';
import PersonalDetailsForm from './sections/PersonalDetailsForm';

const PersonalDetails = () => {
  return (
    <HeroSection bgUrl={bgImage} className={`justify-content-center ${classes.bgImage}`} >
    <BlurCard style={{paddingBottom:"0.5rem"}}>
        <PersonalDetailsForm/>
    </BlurCard>
    </HeroSection>
  )
}

export default PersonalDetails