import './Slider.css';
import Carousel from "react-elastic-carousel";

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
];
  
const Slider = (props)=>{
    return(
        <Carousel breakPoints={breakPoints}>
            {props.children}
        </Carousel> 
    )
}
export default Slider;