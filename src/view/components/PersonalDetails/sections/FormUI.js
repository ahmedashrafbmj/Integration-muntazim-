import React from 'react'

import WrapperRadius from '../../UI/WrapperRadius'
import classes from './FormUI.module.css';

const FormUI = (props) => {
  return (

    <>
    <h2 className={`text-center py-2 ${classes.heading}`}>{props.heading[0]}<span> {props.heading[1]}</span></h2>
    <WrapperRadius className={`mx-md-2 ${classes.formContainer}`}>
          
          <div className='d-flex flex-wrap justify-content-center align-items-center' style={{rowGap:"10px"}}>
              {props.children}
          </div>
    </WrapperRadius>
    <div className='text-center'><button className={` ${classes.btn}`} onClick={props.onClick}>{props.btnText}</button></div>
    </>
  )
}

export default FormUI