import React from "react";

const Others = ({ formData, setFormData }) => {
  // Validation Phone Number And Dont Allow To Type Other Keys

  const validateKeyPress = (event) => {
    const allowedKeys = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      // "ArrowLeft",
    ];
    const keyPressed = event.key;

    if (!allowedKeys.includes(keyPressed)) {
      event.preventDefault();
      return;
    }

    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^\d]/g, ""); // Remove non-numeric characters

    if (
      numericValue.length >= 10 &&
      keyPressed !== "Backspace" &&
      keyPressed !== "Delete"
    ) {
      event.preventDefault();
    }
  };

  // This Validation for Pincode Validation same as above Phone number section

  const validateKeyPress2 = (event) => {
    const allowedKeys2 = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "Backspace",
      "Delete",
      // "ArrowLeft",
    ];
    const keyPressed2 = event.key;

    if (!allowedKeys2.includes(keyPressed2)) {
      event.preventDefault();
      return;
    }

    const inputValue2 = event.target.value;
    const numericValue2 = inputValue2.replace(/[^\d]/g, ""); // Remove non-numeric characters

    if (
      numericValue2.length >= 6 &&
      keyPressed2 !== "Backspace" &&
      keyPressed2 !== "Delete"
    ) {
      event.preventDefault();
    }
  };

  return (
    <div>
      {/* Input Fields And Properties */}
      {/* Phone Number Details */}
      <input
        type="text"
        placeholder="Phone number"
        className="mb-3 form-control"
        required="required"
        onKeyDown={validateKeyPress}
        // pattern="[0-9]{10}"
        maxLength={10}
        value={formData.phone}
        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
      />
      {/* City Details */}
      <input
        type="text"
        placeholder="City"
        className="mb-3 form-control"
        required="required"
        value={formData.city.trim()}
        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
      />
      {/* Pincode Details */}
      <input
        type="text"
        placeholder="Pincode"
        className="mb-3 form-control"
        required="required"
        onKeyDown={validateKeyPress2}
        // pattern="[0-9]{10}"
        maxLength={6}
        value={formData.pincode}
        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
      />
    </div>
  );
};

export default Others;
