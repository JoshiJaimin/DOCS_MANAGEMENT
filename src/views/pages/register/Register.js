import React, { useState } from "react";
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CFormLabel,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilLockLocked, cilUser } from "@coreui/icons";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import { AppFooter, AppHeader, AppSidebar, DocsExample } from "src/components";

const Register = () => {
  const [first_name , setfirst_name] = useState("");
  const [last_name , setlast_name] = useState("");
  const [email , setemail] = useState("");
  const [mobile_number , setmobile_number] = useState("");
  const [ password, setpassword] = useState("");
  const [ degree, setdegree] = useState("");
  const [speciality , setspeciality] = useState("");
  const [education_College	 , seteducation_College	] = useState("");
  const [ experience, setexperience] = useState("");
  const [ shift_start, setshift_start] = useState("");
  const [ shift_end, setshift_end] = useState("");

  async function registers(){
    console.log(first_name , last_name , email , mobile_number, password ,degree, speciality,education_College,shift_start, shift_end,experience);
    const item = {first_name , last_name , email , mobile_number, password,degree, speciality,education_College,shift_start, shift_end,experience}
    let result = await fetch("http://localhost:8080/user/create_doctor",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      },  
      body:JSON.stringify(item)
    })
    result = await result.json();
    console.log(result);
    if(result.status == 'success'){
      localStorage.setItem("users" , JSON.stringify(result));
      Swal.fire(
        'Registered successfully',
        'You clicked the button!',
        result.status
      )
    }  
  }
  return (
    <div>
      <AppSidebar />
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
        {/* <DocsExample href="components/accordion"> */}
              <CRow className="mb-3">
                <CFormLabel htmlFor="First Name" className="col-sm-2 offset-2 col-form-label">
                  First Name
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="First Name" name="first_name" onChange={(e)=>setfirst_name(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="First Name" className="col-sm-2 offset-2 col-form-label">
                  Last Name
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="First Name" name="last_name" onChange={(e)=>setlast_name(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="Mobile Number" className="col-sm-2 offset-2 col-form-label">
                  Mobile Number
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="Mobile Number" name="mobile_number" onChange={(e)=>setmobile_number(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="Email" className="col-sm-2 offset-2 col-form-label">
                  Email
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="Email" name="email" onChange={(e)=>setemail(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="inputPassword" className="col-sm-2 offset-2 col-form-label">
                  Password
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="password" id="inputPassword"  name="password" onChange={(e)=>setpassword(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="degree" className="col-sm-2 offset-2 col-form-label">
                  Degree
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="degree"  onChange={(e)=>setdegree(e.target.value)} name="degree"/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="education_College" className="col-sm-2 offset-2 col-form-label">
                  Education College
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="education_College" name="education_College" onChange={(e)=>seteducation_College(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="education_College" className="col-sm-2 offset-2 col-form-label">
                  Speciality
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="education_College" name="speciality" onChange={(e)=>setspeciality(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="education_College" className="col-sm-2 offset-2 col-form-label">
                  Experience
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="education_College" name="experience"  onChange={(e)=>setexperience(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="shift_start" className="col-sm-2 offset-2 col-form-label">
                Shift Start
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="shift_start" name="shift_start" onChange={(e)=>setshift_start(e.target.value)}/>
                </div>
              </CRow>
              <CRow className="mb-3">
                <CFormLabel htmlFor="shift_end" className="col-sm-2 offset-2 col-form-label">
                  Shift End   
                </CFormLabel>
                <div className="col-sm-5">
                  <CFormInput type="Text" id="shift_end" name="shift_end"  onChange={(e)=>setshift_end(e.target.value)} />
                </div>
              </CRow>
              <div className="d-grid offset-4 col-md-5 ">
                    <CButton  color="success" onClick={registers}>Register Doctor</CButton>
                  </div>
            {/* </DocsExample> */}
        </div>
        <AppFooter />
      </div>
       
    </div>
  );
};

export default Register;
