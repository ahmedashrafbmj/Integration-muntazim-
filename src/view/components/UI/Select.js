import React from 'react'
import classes from './Select.module.css'

const Select = (props) => {
  return (
    <div className={`${classes["custom-select"]}`}>
        <select className={`${props.className} ${classes.classic}`} defaultValue={props.defaultValue} onBlur={props.onBlur} onChange={(e)=>(props.onChange(e.target.value))}>
            {
                props.options.map((item)=>(
                    <option key={Math.random()} value={item}>{item}</option>
                ))
            }
            {props.defaultValue && <option value={props.defaultValue} disabled hidden>{props.defaultText}</option>}
        </select>
    </div>
  )
}

export default Select;