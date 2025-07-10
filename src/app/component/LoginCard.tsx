"use client";
import React, { useState } from "react";

interface LoginCardProps {
  onClose: () => void;
}

const LoginCard: React.FC<LoginCardProps> = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter email and password");
      return;
    }

    // Extract the username before '@' from email for alert
    const username = email.split("@")[0];
    alert(`${username}, you have successfully logged in!`);

    // You can now optionally close the modal
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-white">
  <div className="bg-white p-6 rounded-md w-full max-w-sm">
    <h2 className="text-xl font-bold mb-4 text-black">Login</h2>

    {/* Input Fields */}
    <label htmlFor="email"></label>
    <input
      type="email"
      placeholder="Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
    />
    <label >Password</label>
    <input
      type="password"
      placeholder="Password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      className="w-full border border-gray-300 px-4 py-2 rounded mb-6"
    />

    {/* Button Group with Spacing */}
    <label htmlFor="">Enter</label>
    <div className="flex flex-col space-y-4">
      <button
        onClick={handleLogin}
        className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
      >
        Login
      </button>
      
      <button
        onClick={onClose}
        className="w-full text-black bg-red-500 py-2 rounded hover:bg-red-600 transition"
      >
        Cancel
      </button>
    </div>
  </div>
</div>


  );
};

export default LoginCard;

