import React,{useState} from 'react'
import './SearchComponentStyles.css';
import { IoSearchOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { RiUserVoiceLine } from "react-icons/ri";
import Dropdown from './Dropdown.jsx';
import JobTypeDropdown from './JobTypeDropdown.jsx';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function SearchComponent() {
  const [value,setValue] = useState([30000, 120000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const formatToK = (val) => `₹${Math.round(val / 1000)}k`;

  return (
    <div className='text-[#686868] flex flex-wrap  justify-between items-center w-full min-h-12 divide-x-2 divide-[#EAEAEA]  px-4 sm:px-6 lg:px-8'>
      <label className='flex flex-1 justify-center items-center min-w-[300px]'>
      <span className='mr-3'><IoSearchOutline/></span>
      <input className='w-full h-10 focus:outline-0 placeholder:text-[#686868]' id="textSearch" type="text" placeholder="Search By Job Title, Role"/>
      </label>
      <label className='flex flex-1 justify-center items-center min-w-[300px]'>
        <span className='mr-3'><SlLocationPin/></span>
        <Dropdown/>
        {/* <select className='w-64 focus:outline-0 appearance-none pr-6 select-chevron' name="location" id="location">
          <option value="" hidden>Preffered Location</option>
          <option value="banglore">Banglore</option>
          <option value="kochi">Kochi</option>
          <option value="chennai">Chennai</option>
          <option value="hydrabad">Hydrabad</option>
        </select> */}
      </label>
      <label className='flex flex-1 justify-center items-center min-w-[300px]'>
        <span className='mr-3'><RiUserVoiceLine/></span>
        <JobTypeDropdown/>
        {/* <select className='w-64 focus:outline-0 appearance-none pr-6 select-chevron' name="jobType" id="jobType">
          <option value="" hidden>Job type</option>
          <option value="fullTime">FullTime</option>
          <option value="partTime">PartTime</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select> */}
      </label>
      <div className='text-[#222222] items-center flex flex-1 flex-col justify-center min-w-[300px]'>
      <div className="flex justify-between items-center mt-2">
        <span className='text-sm'>Salary Per Month</span>
        <span>{formatToK(value[0])} - {formatToK(value[1])}</span>
      </div>
        {/* <br /> */}
        <Box sx={{ width: '100%' ,padding:"10px"}}>
        <Slider
        getAriaLabel={() => 'Salary range'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={10000}
        max={700000}
        sx={{
            color: '#222222', // Change slider color
            height: 2, // thinner track
            '& .MuiSlider-thumb': {
            width: 10,
            height: 10,
            },
          }}
          
        />
        </Box>
      </div>
    </div>
  )
}

export default SearchComponent