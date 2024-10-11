import React, { useState } from 'react';

interface DropboxProps {
  options: string[]; // Array of dropdown options
  placeholder?: string; // Optional placeholder for dropdown button
  onSelect: (option: string) => void; // Callback function when an option is selected
  value: string
}

const Dropbox: React.FC<DropboxProps> = ({ options, placeholder = "Select Level", onSelect, value}) => {
  const [isOpen, setIsOpen] = useState(false); // State to manage open/close dropdown
  const [selectedOption, setSelectedOption] = useState<string | null>(null); // State for selected option

  const toggleDropdown = () => setIsOpen(!isOpen); // Toggle dropdown visibility

 const handleSelect = (option:string) => {
    setSelectedOption(option); // Set the selected option
    setIsOpen(false); // Close the dropdown after selection
    onSelect(option); // Call the onSelect callback
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          
          onClick={toggleDropdown}
          className="ml-0 inline-flex justify-center w-60 rounded-md  border shadow-sm px-18 py-2 text-sm font-medium text-gray hover:bg-white/10 hover:text-white focus:outline-none"
        >
          {selectedOption || placeholder}
          <svg
            className={`ml-4 h-4 w-4 transition-transform ${isOpen ? 'transform rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
           
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute  mt-1 w-56 rounded-md shadow-lg bg-black/100 ring-5 ring-black ring-opacity-10 z-50 ">
          <div className="py-0" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            {options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className=" block px-12 py-2 text-sm hover:bg-white/10 hover:text-white w-30 text-left"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export {Dropbox};
