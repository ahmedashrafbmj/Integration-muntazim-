import React from "react";
import classes from "./UploadImage.module.css";


const UploadImage = (props) => {

  const {profilePicture, setProfilePicture}=props.image;
  return (
    <div className={`${classes.container} d-flex flex-column align-items-center justify-content-center`}>
        <div className={classes.image}>
          <div className={classes.overlay}>
          <label htmlFor="file-upload" className={classes["btn-upload"]}>
            <i className="fa-solid fa-plus"></i>
          </label>
          <input type="file" name="myImage" id="file-upload" onChange={(event) => (setProfilePicture(event.target.files[0]))} accept="image/*" />
          </div>
          
          {profilePicture ? (<img alt="not found"  src={URL.createObjectURL(profilePicture)}/>):
          <div className={classes.noImage}></div> }
        </div>
      
      <div>
        <label htmlFor="file-upload" className={classes["btn-transparent"]}>
          <i className="fa fa-cloud-upload"></i> Upload
        </label>
        <input type="file" name="myImage" id="file-upload" onChange={(event) => (setProfilePicture(event.target.files[0]))} accept="image/*" />
      </div>
    </div>
  );
};

export default UploadImage;
