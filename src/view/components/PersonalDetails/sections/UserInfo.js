import React from 'react'

import classes from './UserInfo.module.css'

const UserInfo = (props) => {
    const {formValues } = props
    const {firstName,lastName,number,email}=formValues;
    const FormDetails = [
        {label:"Name", type:"text",placeholder:"Name", name:"firstName",value:firstName},
        {label:"Phone Number", type:"Number", placeholder:"Phone Number",name:"lastName",value:lastName},
        {label:"Domain", type:"text",placeholder:"Domain", name:"number",value:number},
        {label:"Address", type:"text",placeholder:"Address", name:"email",value:email},
    ]
  return (
        <div className={classes.width}>
            <div className='d-flex flex-wrap mx-2 align-items-center justify-content-center' style={{rowGap:"20px", columnGap:"15px"}}>
                {
                    FormDetails.map((item,indx)=>(
   
                        <div className={`${classes.inputGroup} `} key={indx}>
                            <label>{item.label}</label>
                            <input type={item.type} placeholder={item.placeholder} name={item.name} value={item.value} onChange={props.HandleFunction}/>
                        </div>
      
                    ))
                }
            </div>
        </div>
  )
}

export default UserInfo