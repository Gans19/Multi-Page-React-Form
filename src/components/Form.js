import React, { useState } from "react";
import "./Form.css";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./UserDetails";
import ContactDetails from "./ContactDetails";
import Others from "./Others";
import TableSection from "./TableSection";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
// import { BsEyeFill } from "react-icons/bs";

//End of Import Section

const Form = () => {
  // State Properties
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [diaplayModal, setDisplayModal] = useState(false);
  const [page, setPage] = useState(0);
  const [tableData, setTableData] = useState([]);
  const initialState = {
    userName: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    nationality: "",
    phone: "",
    city: "",
    pincode: "",
  };
  const [formData, setFormData] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    email: "",
    nationality: "",
    phone: "",
    city: "",
    pincode: "",
  });
  // console.log(formData);

  // Page Header

  const FormTitle = ["Sign Up", "Contact Details", "Others"];

  // Page Body with the form data

  const PageInput = () => {
    // e.preventDefault();
    if (page === 0)
      return <UserDetails formData={formData} setFormData={setFormData} />;
    if (page === 1)
      return <ContactDetails formData={formData} setFormData={setFormData} />;
    else if (page === 2)
      return <Others formData={formData} setFormData={setFormData} />;
  };

  // Define validation functions for each page
  const validatePage1 = () => {
    const { userName, password, confirmPassword } = formData;
    const errors = [];
    // Validate User Name
    if (!userName) {
      errors.push("Please Enter a Username!!!");
    } else if (userName.length < 6) {
      errors.push("User Name Length Must Be Atleast 6 Characters!!!");
    }
    // Validate User Password
    if (!password) {
      errors.push("Please Enter a Password...");
    } else if (password.length < 6) {
      errors.push("Password Length Must Be Atleast 6 Characters!!!");
    }
    // Validate User Confirm Password
    if (!confirmPassword) {
      errors.push("Please Enter a Confirm Password!!!");
    } else if (password !== confirmPassword) {
      return "Passwords Did Not Match!!!";
    }
    return errors.join("\n"); // No validation error
  };

  /// Validation for 2 nd Page

  const validatePage2 = () => {
    const errors = [];
    const { fullName, email, nationality } = formData;
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // Validate User Full Name
    if (!fullName) {
      errors.push("Please Enter Your Full Name!!!");
    } else if (fullName.length < 5) {
      errors.push("Full Name Length Must Be Atleast 5 Characters!!!");
    }
    // Validate User Email
    if (!email) {
      errors.push("Please Enter a Email Address!!!");
    } else if (!mailformat.test(email)) {
      errors.push("Please Enter a Valid Email Address!!!");
    }
    // Validate User Nationality
    if (!nationality) {
      errors.push("Please Enter a Nationality!!!");
    }
    return errors.join("\n"); // No validation error
  };

  /// Validation For 3Rd Page

  const validatePage3 = () => {
    const { phone, city, pincode } = formData;
    const phoneno = /^\d{10}$/;
    const pin = /^\d{6}$/;

    const errors = [];
    // Validate User Phone Number
    if (!phone) {
      errors.push("Please Enter Your Phone Number!!!");
    } else if (!phoneno.test(phone)) {
      errors.push("Not a valid Phone Number!!!");
    }
    // Validate User City
    if (!city) {
      errors.push("Please Enter a City!!!");
    }
    // Validate User Pincode
    if (!pincode) {
      errors.push("Please Enter a Pincode!!!");
    } else if (!pin.test(pincode)) {
      errors.push("Please Enter a Valid Pincode!!!");
    }
    return errors.join("\n"); // No validation error
  };

  // Validation error messages for each page

  const [page1Error, setPage1Error] = useState("");
  const [page2Error, setPage2Error] = useState("");
  const [page3Error, setPage3Error] = useState("");

  // validation functions for each page

  const validateAndSubmit = (e) => {
    e.preventDefault();
    let validationError = "";
    if (page === 0) {
      validationError = validatePage1();
      setPage1Error(validationError);
    }
    if (page === 1) {
      validationError = validatePage2();
      setPage2Error(validationError);
    } else if (page === 2) {
      validationError = validatePage3();
      setPage3Error(validationError);
    }

    if (validationError) {
      setDisplayModal(true); // Show the error modal
      return; // Do not proceed to the next page
    }

    if (page === FormTitle.length - 1) {
      // If it's the last page, submit the form
      setTableData([...tableData, formData]);
      setPage(0); // Reset the form to the first page
      setFormData(initialState); // Reset the form data
      setPage1Error(""); // Clear any existing error messages
      setPage2Error("");
      setPage3Error("");
      setFormSubmitted(true); // Submit the form

      // Display a success message in the modal
      setDisplayModal(true);
      return; // Do not proceed to the next step if facing any errors
    } else {
      // Move to the next page
      setPage((current) => current + 1);
    }
  };

  // Previous button
  const handlePrev = (e) => {
    e.preventDefault();
    setPage((prev) => prev - 1);
  };

  // const [show, setShow] = useState(false);

  const handleCloseModal = () => {
    setDisplayModal(false); // Close the error modal
  };

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <div className="form">
      {/* <div className="error-message">
        {page === 0 && <div className="text-danger">{page1Error}</div>}
        {page === 1 && <div className="text-danger">{page2Error}</div>}
        {/* Add similar sections for other pages if needed */}
      {/* </div> */}

      {/* Progress Bar Section */}

      <div className="progress-bar">
        <div
          style={{
            width:
              page === 0
                ? "0%"
                : page === 1
                ? "33.33%"
                : page === 2
                ? "66.66%"
                : "100%",
            backgroundColor: "orange",
          }}
        ></div>
      </div>

      {/* Form Container */}

      <div className="form-container">
        {/* <BsEyeFill /> */}

        {/* Page Title Section */}

        <div className="form-header">{FormTitle[page]}</div>
        <form>
          {/* Page Body And Input Section */}

          <div className="form-body">{PageInput()}</div>
          {/* <input type="text" className="form-control" value={formData.userName} /> */}
          <div className="form-footer">
            {/* Page Footer and Button Section */}

            <button
              className="btn btn-primary ml-auto"
              disabled={page === 0}
              onClick={handlePrev}
            >
              Prev
            </button>
            <button
              className="btn btn-primary ml-2"
              // type={buttonType}
              // onClick={handleNext}
              // onSubmit={HandleSubmit}
              onClick={validateAndSubmit}
              // onClick={handleShow}
            >
              {page === FormTitle.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </form>
      </div>

      <div>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}

        {/* Page Modal Section */}

        <Modal show={diaplayModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton>
            <Modal.Title className="text-center">Alert Messages</Modal.Title>
          </Modal.Header>
          <Modal.Body className="text-center font-weight-bold text-danger">
            {formSubmitted ? (
              <p>Form submitted successfully!</p>
            ) : (
              <>
                {page === 0 && page1Error && (
                  <p>
                    {page1Error.split("\n").map((error, index) => (
                      <span key={index}>
                        {error}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
                {page === 1 && page2Error && (
                  <p>
                    {page2Error.split("\n").map((error, index) => (
                      <span key={index}>
                        {error}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
                {page === 2 && page3Error && (
                  <p>
                    {page3Error.split("\n").map((error, index) => (
                      <span key={index}>
                        {error}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
              </>
            )}
            {/* 
            {page === 0 && page1Error}
            {page === 1 && page2Error}
            {page === 2 && page3Error} */}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>

      {/* Modal Section End */}

      <div>
        {/* Page Table Section */}

        <TableSection tableData={tableData} />
      </div>
    </div>
  );
};

export default Form;
