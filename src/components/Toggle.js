import React, { useState } from "react";
import { motion } from "framer-motion";
import { BsChevronDown } from "react-icons/bs";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h2 layout className="question-h2">
        {title}
        {toggle === true ? (
          <BsChevronDown size={20} className="question-icon" />
        ) : (
          <BsChevronDown size={20} className="question-icon active" />
        )}
      </motion.h2>
      {toggle ? children : ""}
      <motion.div layout className="question-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
