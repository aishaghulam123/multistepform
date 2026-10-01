import React from "react";

const Review = ({ data, setStep }) => {
  return (
    <div className="step-container">
      <h2>Step 4: Review Your Details</h2>

      <div className="review-box">
        <p><strong>Name:</strong> {data.name}</p>
        <p><strong>Email:</strong> {data.email}</p>
        <p><strong>Contact:</strong> {data.contact}</p>
        <p><strong>Country:</strong> {data.country}</p>
        <p><strong>City:</strong> {data.city}</p>
        <p><strong>Zip Code:</strong> {data.zip}</p>
      </div>

      <div className="btn-group">
        <button type="button" onClick={() => setStep(3)} className="btn-back">
          Back
        </button>
      </div>
    </div>
  );
};

export default Review;