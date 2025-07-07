import React,{useState,useEffect, useRef} from 'react';
// import { IoChevronDown } from "react-icons/io5";
import chevron from './../assets/chevron.png'

function JobTypeDropdown({value, onChange,options}) {
    const [isOpen, setIsOpen] = useState(false)
    // const [selected, setSelected] = useState("Job type")
    const dropdownRef = useRef(null);
    // const options = ["FullTime", "PartTime", "Contract", "Internship"]
    const toggleDropdown = () => setIsOpen((prev) => !prev);

    useEffect(() => {
        function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left w-64 text-[#686868]">
          <button
            onClick={toggleDropdown}
            // onClick={() => setIsOpen(!isOpen)}
            className="inline-flex justify-between items-center w-full rounded-md bg-white px-4 py-2  border-none"
          >
            {value||"Job type"}
            <img src={chevron} alt="dropdown" className="w-3 h-1.5" />
            {/* <IoChevronDown className="ml-2 text-gray-400" /> */}
          </button>
          {isOpen && (
        <div className="absolute z-10 mt-2 w-full rounded-md bg-white shadow-lg ring-1 ring-black/10">
          <ul className="py-1 text-sm text-[#686868]">
            {options.map((option) => (
              <li
                key={option}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => {
                  onChange(option)
                  // setSelected(option)
                  setIsOpen(false)
                }}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default JobTypeDropdown