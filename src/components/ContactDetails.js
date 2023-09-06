import React from "react";

const ContactDetails = ({ formData, setFormData }) => {
  return (
    <div>
      {/* Input Fields And Properties */}
      {/* FullName Field */}
      <input
        type="text"
        placeholder="Full Name"
        className="mb-4 form-control"
        required="required"
        value={formData.fullName.trim()}
        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
      />
      {/* EmailField */}
      <input
        type="email"
        placeholder="Email Address"
        className="mb-4 form-control"
        required="required"
        value={formData.email.trim()}
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}"
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      {/* Nationality Information */}
      <input
        type="text"
        placeholder="Nationality"
        className="mb-4 form-control"
        required="required"
        value={formData.nationality.trim()}
        onChange={(e) =>
          setFormData({ ...formData, nationality: e.target.value })
        }
      />
    </div>
  );
};

export default ContactDetails;
