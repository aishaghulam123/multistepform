import React, { useState } from "react";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Review from "./Review";
import "./App.css";

function App() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    name: "",
    email: "",
    contact: "",
    country: "",
    city: "",
    zip: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(data);

    alert("Form submitted successfully!");

    setData({
      name: "",
      email: "",
      contact: "",
      country: "",
      city: "",
      zip: "",
    });
    setStep(1);
  };

  return (
    <div className="app-container">
      <div className="form-card">
        <h1>Multi-Step Form</h1>
        <p className="step-indicator">
          {step === 4 ? "Final Step: Review" : `Step ${step} of 3`}
        </p>

        <form onSubmit={handleSubmit}>
          {step === 1 && <Step1 data={data} setData={setData} setStep={setStep} />}
          {step === 2 && <Step2 data={data} setData={setData} setStep={setStep} />}
          {step === 3 && <Step3 data={data} setData={setData} setStep={setStep} />}
          {step === 4 && <Review data={data} setStep={setStep} />}

          {step === 4 && (
            <div className="submit-box">
              <input type="submit" value="Submit Form" className="btn-submit" />
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default App;