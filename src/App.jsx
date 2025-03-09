import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login";

export default function App() {
  const [isWindows, setIsWindows] = useState(false);
  const [securityCode, setSecurityCode] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const correctCode = "1234"; // Set your desired security code

  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    setIsWindows(platform.includes("win"));
  }, []);

  const handleVerification = () => {
    if (securityCode === correctCode) {
      setIsVerified(true);
    } else {
      alert("Incorrect security code. Access denied.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleVerification();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        {isWindows || isVerified ? (
          <Login />
        ) : (
          <div className="access-box">
            <h1>Access Denied</h1>
            <p>This page is only accessible on Windows.</p>
            <input
              type="password"
              className="access-input"
              placeholder="Enter Security Code"
              value={securityCode}
              onChange={(e) => setSecurityCode(e.target.value)}
              onKeyDown={handleKeyPress} // Detect Enter key press
            />
            <button className="access-btn" onClick={handleVerification}>
              Verify
            </button>
          </div>
        )}
      </header>

      <style>{`
        /* Styles scoped only to Access Denied UI */
        .access-box {
          width: 300px;
          padding: 20px;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          background: #191919;
          color: white;
          border-radius: 14px;
          box-shadow: 5px 5px 50px rgba(252, 5, 5, 0.7);
        }

        .access-box h1 {
          color: red;
          font-size: 24px;
          margin-bottom: 10px;
        }

        .access-box p {
          font-size: 16px;
          color: white;
        }

        .access-input {
          width: 90%;
          padding: 10px;
          margin: 10px 0;
          border: none;
          outline: none;
          border-radius: 5px;
          background: #333;
          color: white;
        }

        .access-btn {
          background: red;
          color: white;
          font-weight: bold;
          padding: 10px 15px;
          border: none;
          cursor: pointer;
          border-radius: 5px;
        }

        .access-btn:hover {
          background: darkred;
        }
      `}</style>
    </div>
  );
}
