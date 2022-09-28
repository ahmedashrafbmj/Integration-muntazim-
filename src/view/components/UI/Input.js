import { useState } from 'react';
import classes from './Input.module.css'


const Input = (props)=>{
    const [value, setValue] = useState(1);
    const type = props.type;
    // props.getValue(value)
    const typeNumber = (
        <div className={`${classes.inputGroup}  text-center align-items-center`}>  
        <span className={`${classes.increment}`}>
            <i className="fa-solid fa-plus"onClick={()=>(setValue(value+1))}></i>
        </span>
        <input style={{maxWidth:"150px"}} type={props.type}  value={value} className={props.className} id={props.id} placeholder={props.placeholder} onChange={(e)=>(setValue(+(e.target.value)))} onBlur={props.onBlur}/>
        <span className={classes.decrement}>
            <i className="fa-solid fa-minus" onClick={()=>(setValue(value-1))}></i>
        </span>
    </div>
    )
    const otherTypes=(
    <div className={`${classes.inputGroup}  align-items-center`}>  
        <span className={`${classes.icon}`}>
            {props.iconLeftClassName ? <i className={props.iconLeftClassName ? props.iconLeftClassName :'' }></i> :<div></div>}
        </span>
        <input type={props.type} className={props.className} id={props.id}  placeholder={props.placeholder} onChange={(e)=>(props.onChange(e.target.value))} onBlur={props.onBlur}/>
        <span className={classes.caret}>
            {props.iconRightClassName ? <i className={props.iconRightClassName ? props.iconRightClassName :'' }></i> : (props.type !=="date")? <div>{props.rightText}</div> :""}
        </span>
    </div>
    )
    return(
        
        
            ( type !== 'number' ? otherTypes :typeNumber)
        
 
    )
}

export default Input;