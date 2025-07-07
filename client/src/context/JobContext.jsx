import React, { createContext, useState, useEffect } from 'react';
import api from './../services/api';

export const JobsContext = createContext();

function JobContextProvider({children}) {
    // const [jobData,setJobData] = useState({

    // })
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredJobs, setFilteredJobs] = useState([]);
    const [filters,setFilters] = useState({
        search:'',
        location:'',
        jobType:'',
        salary:[0,Infinity]
    })
    const [message,setMessage]=useState("")
    useEffect(() => {
    api.getJobs()
    .then(data => {
      setJobs(data.payload);
      console.log(data.payload)
      setFilteredJobs(data.payload);
    })
    .catch(err=> console.error(err))
    .finally(() => setLoading(false));
  }, []);

  // useEffect(()=>{
  //   if (!jobData || Object.keys(jobData).length === 0) return; 
  //   api.postJob(jobData)
  //   .then(result=>setMessage(result.message))
  //   .catch(err => setMessage(err.response?.data?.message || "Something went wrong"))
  // },[jobData])

  useEffect(()=>{
    let updated = jobs;
    if (filters.search) {
      updated = updated.filter(job =>
        job.title.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    if (filters.location) {
      updated = updated.filter(job => job.location === filters.location);
    }

    if (filters.jobType) {
      updated = updated.filter(job => job.jobType === filters.jobType);
    }

    updated = updated.filter(job => {
      const salary = parseInt(job.salaryRange?.min || 0);
      return salary >= filters.salary[0] && salary <= filters.salary[1];
    });

    setFilteredJobs(updated);
  },[filters, jobs])


  return (
    <JobsContext.Provider value={{ jobs, filteredJobs, filters, setFilters,loading,message,setMessage,setJobs, setFilteredJobs }}>
      {children}
    </JobsContext.Provider>
  )
}

export default JobContextProvider