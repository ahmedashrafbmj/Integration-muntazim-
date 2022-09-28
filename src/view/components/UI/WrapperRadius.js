import classes from './WrapperRadius.module.css';

const WrapperRadius = props =>{
    return <div className={`${classes.card} ${props.className}`} style={props.style}>
        {props.children}
    </div>
}

export default WrapperRadius;