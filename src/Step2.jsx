import React from "react";

const Step2 = ({ data, setData, setStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    
    if (!data.contact.trim()) {
      alert("Please enter your contact number");
      return;
    }
    if (!data.country.trim()) {
      alert("Please enter your country");
      return;
    }

    setStep(3);
  };

  return (
    <div className="step-container">
      <h2>Step 2: Contact Details</h2>

      <div className="form-group">
        <label htmlFor="contact">Contact:</label>
        <input  id="contact"  type="text"  placeholder="0300-1234567"  value={data.contact}
          onChange={(e) => setData({ ...data, contact: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="country">Country:</label>
        <input  id="country"  type="text"  placeholder="Pakistan"  value={data.country}
          onChange={(e) => setData({ ...data, country: e.target.value })}
        />
      </div>

      <div className="btn-group">
        <button type="button" onClick={() => setStep(1)} className="btn-back">
          Back
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step2;