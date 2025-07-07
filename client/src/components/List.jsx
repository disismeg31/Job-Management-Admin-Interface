import React,{useContext} from 'react'
import Card from './Card';
// import api from './../services/api';
import { JobsContext } from './../context/JobContext';
import { Waveform } from 'ldrs/react'
import 'ldrs/react/Waveform.css'

function List() {
  const {loading,filteredJobs} = useContext(JobsContext);
 
  if (loading) {
    return( 
    <> 
    <div className='flex justify-center items-center h-20'>
      <Waveform
      size="35"
      stroke="3.5"
      speed="1"
      color="black" 
    />
    </div>
      </>
  )};

  if (filteredJobs.length === 0) {
    return <p className="text-center text-gray-600 mt-4">No jobs found matching your filters.</p>;
  }

  return (
    <div className='flex flex-wrap justify-center items-center'> 
    {
      filteredJobs.map((item,index)=>(
      <Card key={index} item={item}/>
      ))
    }
    </div>
  )
}

export default List