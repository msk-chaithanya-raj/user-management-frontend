import React, { useState } from "react";
import axios from "axios";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "https://user-management-backend-3hpb.onrender.com/api/auth/register",
        {
          email,
          password,
          role,
        }
      );
      alert("Registration successful");
      window.location.href = "/";
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Register</h2>
      <input
        type="email"
        placeholder="Email"
        className="block w-full mb-2 p-2 border"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="block w-full mb-4 p-2 border"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <select
        value={role}
        onChange={(e) => setRole(e.target.value)}
        className="block w-full mb-4 p-2 border"
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button type="submit" className="w-full p-2 bg-green-500 text-white">
        Register
      </button>
      <p className="mt-4">
        Already have an account?{" "}
        <a href="/" className="text-blue-500">
          Login here
        </a>
      </p>
    </form>
  );
};

export default Register;
