"use client";
import React, { useState } from "react";

interface RegisterCardProps {
  onClose: () => void;
}

const RegisterCard: React.FC<RegisterCardProps> = ({ onClose }) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = () => {
    if (!fullName || !email || !password) {
      alert("Please fill in all fields");
      return;
    }

    alert(`${fullName}, you have successfully registered!`);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-md w-full max-w-sm text-black">
        <h2 className="text-xl font-bold mb-4">Register</h2>

        {/* Input Fields */}
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-4"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border border-gray-300 px-4 py-2 rounded mb-6"
        />

        {/* Buttons with spacing */}
        <div className="flex flex-col space-y-4 text-white">
          <button
            onClick={handleRegister}
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
          >
            Register
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

export default RegisterCard;


