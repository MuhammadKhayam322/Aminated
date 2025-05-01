"use client";
import { motion } from "framer-motion";
import React from "react";

type ProButtonProps = {
  label: string;
 
};

const ProButton: React.FC<ProButtonProps> = ({ label }) => {
  ;

  return (
    <motion.button
     
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="bg-gray-800 text-white rounded-sm px-4 py-2"
    style={{backgroundColor:"rgba(46, 46, 46, 1)"}}>
      <h1 className="text-white">{label}</h1>
    </motion.button>
  );
};

export default ProButton;


