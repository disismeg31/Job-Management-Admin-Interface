import axios from 'axios';

// const BASE_URL = 'http://localhost:4000'
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function getJobs (filters = {}){
return axios.get(`${BASE_URL}/api/admin/jobs`,{params:filters})
.then(res=>res.data)
.catch(err=>{throw err})
}

function postJob(jobData) {
  return axios.post(`${BASE_URL}/api/admin/jobs`,jobData)
  .then(res=>res.data)
  .catch(err => {throw err})
}

export default { 
    getJobs ,
    postJob
}