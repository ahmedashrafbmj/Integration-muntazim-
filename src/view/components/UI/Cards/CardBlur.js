import classes from './CardBlur.module.css'
import WrapperRadius from '../WrapperRadius';


const BlurCard = (props)=>{
    return(
    <WrapperRadius className={`container ${classes.backgroundCard} ${props.className} `} style={props.style}>
        {props.children}
    </WrapperRadius>
    )
}

export default BlurCard;