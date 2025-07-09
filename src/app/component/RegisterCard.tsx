// components/RegisterCard.tsx
"use client";
import React from "react";

interface RegisterCardProps {
  onClose: () => void;
}

const RegisterCard: React.FC<RegisterCardProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-blue-500">
      <div className="bg-white p-6 rounded-md w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-gray-300 px-4 py-2 rounded mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 px-4 py-2 rounded mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 px-4 py-2 rounded mb-3"
        />
        <button className="w-full bg-black text-white py-2 rounded hover:bg-gray-800">
          Register
        </button>
        <button onClick={onClose} className="mt-3 text-sm text-gray-600 underline">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default RegisterCard;
