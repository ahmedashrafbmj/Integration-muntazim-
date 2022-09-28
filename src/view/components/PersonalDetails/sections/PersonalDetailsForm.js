import React, { useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import FormUI from './FormUI'
import UploadImage from './UploadImage'
import UserInfo from './UserInfo'

const initialFormState = {
  firstName: "",
  lastName: "",
  number: "",
  email: "",
}
const ReducerFunction = (curVals, newVals) => ({ ...curVals, ...newVals })
const PersonalDetailsForm = () => {
  const [profilePicture, setProfilePicture] = useState();
  const [formValues, setFormValues] = useReducer(ReducerFunction, initialFormState)
  const [formNo, setFormNo] = useState(0);
  const navigate = useNavigate();
  const { firstName, lastName, number, email } = formValues;
  const HandleFormChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ [name]: value })
  }
  const formArray = [<UploadImage image={{ profilePicture, setProfilePicture }} />, <UserInfo formValues={formValues} HandleFunction={HandleFormChange} />]
  const onclickHandler = (event) => {
    console.log(profilePicture)
    if (formNo === 0) {
      if (profilePicture) {
        setFormNo(formNo + 1)
      }
      else {
        alert("Upload an Image");
      }
    }
    if (formNo === 1) {
      if (firstName !== "" && lastName !== "" && number !== "" && email !== "") {
        const userData = {
          firstName: firstName,
          lastName: lastName,
          number: number,
          email: email,
          ProfilePicture: profilePicture,
        }
        const fd = new FormData();
        fd.append('Name', userData.firstName);
        fd.append('PhoneNum', userData.lastName);
        fd.append('Domain', userData.number);
        fd.append('Address', userData.email);
        fd.append('image', userData.ProfilePicture, userData.ProfilePicture.name);
        const config = {
          headers: {
            'content-type': 'multipart/form-data',
          },
        };
        
        console.log(profilePicture)
        axios.post("http://localhost:5000/api/CreateStore/postCreateStore", fd, config)
          .then(response => {
            console.log(response)
            return alert("value has been inserted")
          }
          ).catch((e) => {
            console.log(e)
          })
        // POST(userData, "api/users/register", "Could not create Account.")
        navigate("/")
      }
      else {
        alert("Please Fill All the Fields")
      }
    }
  }
  return (
    <FormUI onClick={onclickHandler} heading={["Create", "Store"]} btnText={formNo < 1 ? "Next" : "Submit"}>
      {formArray[formNo]}
    </FormUI>
  )
}
export default PersonalDetailsForm