import React from "react";
import Button from "./Button";
import { sunIcon, moonIcon } from "../assets/icons";

// const DarkModeToggle = () => {
//   const [darkMode, setDarkMode] = useState(false);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);

//     localStorage.setItem("darkMode", !darkMode);
//   };

//   const containerClassName = darkMode
//     ? "bg-gray-900 text-white"
//     : "bg-white text-gray-900";

//   return (
//     <div
//       className={`flex items-center justify-center fixed bottom-0 right-0 m-8 ${containerClassName} p-2 rounded-full`}
//     >
//       <button className="focus:outline-none" onClick={toggleDarkMode}>
//         {darkMode ? (
//           <sunIcon className="h-6 w-6" />
//         ) : (
//           <moonIcon className="h-6 w-6" />
//         )}
//       </button>
//     </div>
//   );
// };

const DarkModeToggle = ({ darkMode, toggleDarkMode, containerClassName }) => {
  return (
    <div className={`flex items-center justify-center fixed bottom-0 right-0 m-8 ${containerClassName} p-2 rounded-full`}>
      <Button
        label={darkMode ? "Light Mode" : "Dark Mode"}
        onClick={toggleDarkMode} 
        backgroundColor={darkMode ? "bg-white" : "bg-gray-900"} 
        textColor={darkMode ? "text-gray-900" : "text-white"}
        borderColor={darkMode ? "border-gray-900" : "border-white"} 
      />
    </div>
  );
};


export default DarkModeToggle;
