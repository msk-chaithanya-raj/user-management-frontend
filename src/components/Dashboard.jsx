import React from "react";

const Dashboard = () => {
  const role = localStorage.getItem("role");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    window.location.href = "/";
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl">Dashboard</h1>
      {role === "admin" && (
        <p className="text-green-500">Welcome, Admin! You have full access.</p>
      )}
      {role === "user" && (
        <p className="text-blue-500">Welcome, User! You have limited access.</p>
      )}
      <button onClick={handleLogout} className="mt-4 p-2 bg-red-500 text-white">
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
