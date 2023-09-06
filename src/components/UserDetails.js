import React, { useEffect, useState } from "react";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import "./UserDetails.css";

const UserDetails = ({ formData, setFormData }) => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  const toggle2 = () => {
    setOpen2(!open2);
  };
  // const [err, setErr] = useState("");

  // useEffect(() => {
  //   // Check if passwords match when either password or confirmPassword changes
  //   if (formData.password !== formData.confirmPassword) {
  //     setErr("Passwords do not match.");
  //   } else {
  //     setErr(""); // Reset the error message when passwords match
  //   }
  // }, [formData.password, formData.confirmPassword]);

  return (
    <div>
      <div>
        {/* Input Fields And Properties */}
        {/* User Name Details */}
        <input
          type="text"
          placeholder="User Name"
          className="mb-4 form-control"
          required="required"
          value={formData.userName.trim()}
          onChange={(e) =>
            setFormData({ ...formData, userName: e.target.value })
          }
        />
      </div>
      <div className="input">
        {/* Password Section */}
        <div className="icons">
          {open === false ? (
            <BsEyeFill onClick={toggle} />
          ) : (
            <BsEyeSlashFill onClick={toggle} />
          )}
        </div>
        <input
          type={open === false ? "password" : "text"}
          placeholder="Password"
          className="mb-4 form-control"
          required="required"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
          value={formData.password.trim()}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />
      </div>
      <div className="input">
        {/* Confirm Password Section */}
        <div className="icons">
          {open2 === false ? (
            <BsEyeFill onClick={toggle2} />
          ) : (
            <BsEyeSlashFill onClick={toggle2} />
          )}
        </div>

        <input
          type={open2 === false ? "password" : "text"}
          placeholder="Confirm Password"
          className="mb-4 form-control"
          required="required"
          value={formData.confirmPassword.trim()}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />
      </div>
      {/* {err && <div className="text-danger">{err}</div>} */}
    </div>
  );
};

export default UserDetails;
