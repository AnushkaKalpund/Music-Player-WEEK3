import React from "react";
import { Link } from "react-router-dom";

function Home() {
  const user = JSON.parse(localStorage.getItem("user")) || { name: "Guest" };

  return (
    <div className="container mt-5">
      <h1>Welcome, {user.name}!</h1>
      <p>Thank you for logging in. Explore the features available to you:</p>

      <div className="row mt-4">
        {/* Feature 1 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Profile</h5>
              <p className="card-text">
                View and edit your personal information and settings.
              </p>
              <Link to="/profile" className="btn btn-primary">
                Go to Profile
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 2 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Dashboard</h5>
              <p className="card-text">
                Access your dashboard and view statistics or other data.
              </p>
              <Link to="/dashboard" className="btn btn-success">
                Open Dashboard
              </Link>
            </div>
          </div>
        </div>

        {/* Feature 3 */}
        <div className="col-md-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h5 className="card-title">Settings</h5>
              <p className="card-text">
                Update your preferences and application settings.
              </p>
              <Link to="/settings" className="btn btn-warning">
                Go to Settings
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-5">
        <h4>Recent Updates</h4>
        <ul>
          <li>New feature added to the dashboard!</li>
          <li>Bug fixes and performance improvements.</li>
          <li>Stay tuned for more updates.</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
