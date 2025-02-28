import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // ✅ Import Link

export default function WindowsCheckPage() {
  const [isWindows, setIsWindows] = useState(false);

  useEffect(() => {
    const platform = window.navigator.userAgent.toLowerCase();
    setIsWindows(platform.includes("win"));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {isWindows ? (
          <div className="text-center">
            <h1 className="text-4xl font-bold">Welcome!</h1>
            <p className="mt-2 text-lg">You are using Windows.</p>
          </div>
        ) : (
          <div className="text-center">
            <h1 className="text-4xl font-bold text-red-500">Access Denied</h1>
            <p className="mt-2 text-lg">This page is only accessible on Windows.</p>
          </div>
        )}
        <Link to="/login">
          <button className="mt-4 p-2 bg-blue-500 text-white rounded">Go to Login</button>
        </Link>
      </header>
    </div>
  );
}
