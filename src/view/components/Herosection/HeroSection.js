import classes from "./HeroSection.module.css";


const HeroSection = (props) => {
  const {bgUrl, children, className} = props;
  return (
    <>
      <section>
        <div style={{backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.632), rgba(255,255,255,0.5)),url(${bgUrl})`}} className={`${classes.HeroSection}  d-flex flex-column   align-items-center ${className}`}>
            {children}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
