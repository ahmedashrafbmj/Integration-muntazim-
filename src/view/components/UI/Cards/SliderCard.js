import classes from './SliderCard.module.css';

const SliderCard = (props)=>{
    const{label,distance,img} = props.Values;
    return(
    <>
            <div className='col-4-lg mb-3 me-2'>
                <div className={`pb-4 ${classes.card}`} style={{maxWidth: "20rem"}}>
                    <div className={classes.imageWrap}>
                        <img className="card-img-top" src={img} alt="Cardcap"/>
                        <div className={classes.CardTitle}>
                            <h2>{label}</h2>
                            <h5>{distance}</h5>
                        </div>
                    </div>
                   {props.children}
                </div>
            </div>
            

        </>
    )
}

export default SliderCard;