import classes from './Heading.module.css';


export const H2Pink =(props)=>{
    return(
        <h2 className={`${classes.h2pink} ${props.className}`} style={props.style}>{props.children}</h2>
    )
}

