import React, { useState } from "react";
import { sendOtp, login } from "../api/Api";
import OtpInput from "react-otp-input";

function Login() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
    setErrorMessage("");
  };

  const handleSendOtp = async () => {
    const response = await sendOtp(phoneNumber);
    if (response.status === 200) {
      setOtpSent(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Failed to send OTP. Please try again.");
    }
  };

  const handleLogin = async () => {
    const response = await login(phoneNumber, otp);
    if (response.status === 200) {
      setErrorMessage("");
      alert("Logged in successfully!");
    } else {
      setErrorMessage("Invalid OTP. Please try again.");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{marginTop: "8rem"}}>
      {otpSent ? (
        <div className="card text-center" style={{ width: "30rem" }}>
          <div class="card-body">
            <h5>LOGIN</h5>
            <p>Please enter your phone number to Login</p>
            <input
              className="form-control form-outline mb-4"
              type="tel"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
            />
            <button
              className="btn btn-primary btn-block mb-4"
              onClick={handleSendOtp}
              disabled={!phoneNumber}
            >
              Send OTP
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      ) : (
        <div className="card text-center" style={{ width: "30rem" }}>
          <div class="card-body">
            <h2>Enter OTP</h2>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              separator={<span className="mx-2">-</span>}
              renderInput={(props) => <input {...props} className="otp-input"/>}
              containerStyle="otp-container"
              focusStyle="otp-focus"
            />
            <button
              className="btn btn-primary btn-block mb-4"
              style={{marginTop: "15px"}}
              onClick={handleLogin}
              disabled={otp.length !== 6}
            >
              Login
            </button>
            {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
