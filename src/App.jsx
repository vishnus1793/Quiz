import { useEffect, useState } from "react";
import "./App.css";
import Login from "./components/Login"; // Import the Login component

export default function App() {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    setIsWindows(platform.includes("win"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isWindows ? (
          <Login />
          
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
            <p className="mt-2 text-lg">This page is only accessible on Windows.</p>
          </div>
        )}
      </header>
    </div>
  );
}
