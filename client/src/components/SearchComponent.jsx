import React,{useContext} from 'react'
import './SearchComponentStyles.css';
import { IoSearchOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { RiUserVoiceLine } from "react-icons/ri";
import Dropdown from './Dropdown.jsx';
import JobTypeDropdown from './JobTypeDropdown.jsx';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { JobsContext } from '../context/JobContext.jsx';

function SearchComponent() {
  // const [value,setValue] = useState([30000, 120000]);
const { jobs, filters, setFilters } = useContext(JobsContext);
  const handleChange = (event, newValue) => {
    // setValue(newValue);
    setFilters(f=>({...f,salary:newValue}));
  };
  const formatToK = (val) => `₹${Math.round(val / 1000)}k`;
  const locations = ["None",...new Set(jobs.map(job => job.location))];
  const jobType = ["None",...new Set(jobs.map(job=>job.jobType))]

  return (
    <div className='text-[#686868] flex flex-wrap  justify-between items-center w-full min-h-12 divide-x-2 divide-[#EAEAEA]  px-4 sm:px-6 lg:px-8'>
      <label className='flex flex-1 justify-center items-center min-w-[300px]'>
      <span className='mx-3'><IoSearchOutline/></span>
      <input className='w-full h-10 focus:outline-0 placeholder:text-[#686868]' 
      id="textSearch" 
      type="text" 
      value={filters.search}
      placeholder="Search By Job Title, Role"
      onChange={(e) => setFilters(f => ({ ...f, search: e.target.value }))}
      />
      </label>
      <label className='flex flex-1 justify-center items-center min-w-[300px]'>
        <span className='mx-3'><SlLocationPin/></span>
        <input className='w-full h-10 focus:outline-0 placeholder:text-[#686868]' 
        id="textSearch" 
        type="text" 
        value={filters.location}
        placeholder="Preffered Location"
        onChange={(e) => setFilters(f => ({ ...f, location: e.target.value }))}
        />
        {/* <Dropdown 
        options={locations}
        value={filters.location}
        onChange={(val)=>setFilters(f=>({...f,location:val === "None" ? "":val}))}
        /> */}
      </label>
      <label className='flex flex-1 justify-center items-center min-w-[300px]'>
        <span className='mr-3'><RiUserVoiceLine/></span>
        <JobTypeDropdown
        options={jobType}
        value={filters.jobType}
        onChange={(val)=>setFilters(f=>({...f,jobType:val === "None" ? "" : val}))}
        />
      </label>
      <div className='text-[#222222] items-center flex flex-1 flex-col justify-center min-w-[300px]'>
      <div className="flex justify-between items-center mt-2">
        <span className='text-sm'>Salary Per Month</span>
        <span>{formatToK(filters.salary[0])} - {formatToK(filters.salary[1])}</span>
      </div>
        {/* <br /> */}
        <Box sx={{ width: '100%' ,padding:"10px"}}>
        <Slider
        getAriaLabel={() => 'Salary range'}
        value={filters.salary}
        onChange={handleChange}
        valueLabelDisplay="off"
        min={0}
        max={1000000}
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