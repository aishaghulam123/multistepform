import React from "react";

const Step1 = ({ data, setData, setStep }) => {
  const handleNext = (e) => {
    e.preventDefault();
    
    if (!data.name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!data.email.trim()) {
      alert("Please enter your email");
      return;
    }

    setStep(2);
  };

  return (
    <div className="step-container">
      <h2>Step 1: Personal Info</h2>

      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input id="name" type="text" placeholder="John Doe" value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input  id="email"  type="email"  placeholder="ruhama@gmail.com"  value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />
      </div>

      <div className="btn-group">
        <button type="button" onClick={handleNext}>  Next </button>
      </div>
    </div>
  );
};

export default Step1;