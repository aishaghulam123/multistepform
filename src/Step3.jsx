import React from "react";

const Step3 = ({ data, setData, setStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    
    if (!data.city.trim()) {
      alert("Please enter your city");
      return;
    }
    if (!data.zip.trim()) {
      alert("Please enter your zip code");
      return;
    }

    setStep(4); 
  };

  return (
    <div className="step-container">
      <h2>Step 3: Address Info</h2>

      <div className="form-group">
        <label htmlFor="city">City:</label>
        <input  id="city"  type="text"  placeholder="Karachi"  value={data.city}
          onChange={(e) => setData({ ...data, city: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="zip">Zip Code:</label>
        <input  id="zip"  type="text"  placeholder="75500"  value={data.zip}
          onChange={(e) => setData({ ...data, zip: e.target.value })}
        />
      </div>

      <div className="btn-group">
        <button type="button" onClick={() => setStep(2)} className="btn-back">
          Back
        </button>
        <button type="button" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Step3;