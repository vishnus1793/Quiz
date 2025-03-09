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

  return (
    <div className="App">
      <header className="App-header">
        {isWindows || isVerified ? (
          <Login />
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
            <p className="mt-2 text-lg">This page is only accessible on Windows.</p>
            <div className="mt-4">
              <input
                type="password"
                className="border p-2 rounded"
                placeholder="Enter Security Code"
                value={securityCode}
                onChange={(e) => setSecurityCode(e.target.value)}
              />
              <button
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded"
                onClick={handleVerification}
              >
                Verify
              </button>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
