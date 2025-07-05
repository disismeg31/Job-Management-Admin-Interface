import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { SlLocationPin } from "react-icons/sl";
import { RiUserVoiceLine } from "react-icons/ri";

function SearchComponent() {
  return (
    <div className='text-[#686868] flex justify-between w-full h-12 divide-x-4 divide-solid divide-[#EAEAEA] bg-red-300 px-4 sm:px-6 lg:px-8'>
      <label className='flex items-center' htmlFor="textSearch">
      <span className='mr-2'><IoSearchOutline/></span>
      <input id="textSearch" type="text" placeholder="Search By Job Title, Role"/>
      </label>
      <label className='flex items-center' htmlFor="location">
        <span className='mr-2'><SlLocationPin/></span>
        <select name="location" id="location">
          <option value="" hidden>Preffered Location</option>
          <option value="banglore">Banglore</option>
          <option value="kochi">Kochi</option>
          <option value="chennai">Chennai</option>
          <option value="hydrabad">Hydrabad</option>
        </select>
      </label>
      <label className='flex items-center' htmlFor="jobType">
        <span className='mr-2'><RiUserVoiceLine/></span>
        <select name="jobType" id="jobType">
          <option value="" hidden>Job type</option>
          <option value="fullTime">FullTime</option>
          <option value="partTime">PartTime</option>
          <option value="contract">Contract</option>
          <option value="internship">Internship</option>
        </select>
      </label>
      <label>Salary Per Month
        <input type="range" />
      </label>
    </div>
  )
}

export default SearchComponent