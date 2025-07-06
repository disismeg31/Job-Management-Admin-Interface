import React,{useEffect,useState} from 'react'
import Card from './Card';
import api from './../services/api';
function List() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
//   const jobs = [
// {
//         title:"Full Stack Developer",
//         company:"Amazon",
//         location:"Kochi",
//         jobType:"partTime",
//         salaryRange:{
//             min:"300000",
//             max:"500000"
//         },
//         deadline:"2025-08-05",
//         description:"A user-friendly interface lets you browse stunning photos and videos.Filter destinations based on interests and travel style, and create personalized ",
//         requirements:"Proficiency in JavaScript, React, and modern frontend tools.",
//         responsibilities:"Develop and maintain responsive web interfaces across platforms."
//     },
//     {
//         title:"Full Stack Developer",
//         company:"Swiggy",
//         location:"Kochi",
//         jobType:"partTime",
//         salaryRange:{
//             min:"300000",
//             max:"500000"
//         },
//         deadline:"2025-08-05",
//         description:"A user-friendly interface lets you browse stunning photos and videos.Filter destinations based on interests and travel style, and create personalized ",
//         requirements:"Proficiency in JavaScript, React, and modern frontend tools.",
//         responsibilities:"Develop and maintain responsive web interfaces across platforms."
//     },
//     {
//         title:"Full Stack Developer",
//         company:"Tesla",
//         location:"Kochi",
//         jobType:"partTime",
//         salaryRange:{
//             min:"300000",
//             max:"500000"
//         },
//         deadline:"2025-08-05",
//         description:"A user-friendly interface lets you browse stunning photos and videos.Filter destinations based on interests and travel style, and create personalized ",
//         requirements:"Proficiency in JavaScript, React, and modern frontend tools.",
//         responsibilities:"Develop and maintain responsive web interfaces across platforms."
//     },
//     {
//         title:"Full Stack Developer",
//         company:"Tesla",
//         location:"Kochi",
//         jobType:"partTime",
//         salaryRange:{
//             min:"300000",
//             max:"500000"
//         },
//         deadline:"2025-08-05",
//         description:"A user-friendly interface lets you browse stunning photos and videos.Filter destinations based on interests and travel style, and create personalized ",
//         requirements:"Proficiency in JavaScript, React, and modern frontend tools.",
//         responsibilities:"Develop and maintain responsive web interfaces across platforms."
//     },
//   ]


  useEffect(()=>{
    api.getJobs()
    .then(data => {
      // console.log('API response:', data);
      setJobs(data.payload)
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false))
  },[])

  if (loading) return <p>Loading...</p>;
  return (
    <div className='flex flex-wrap justify-center items-center'> 
    {
      jobs.map((item,index)=>(
      <Card key={index} item={item}/>
      ))
    }
    </div>
  )
}

export default List