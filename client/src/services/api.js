import axios from 'axios';

const BASE_URL = 'http://localhost:4000'

function getJobs (filters = {}){
return axios.get(`${BASE_URL}/api/admin/jobs`,{params:filters})
.then(res=>res.data)
.catch(err=>{throw err})
}

// function postJob(jobData) {
//   // axios post call
// }

export default { 
    getJobs ,
    // postJob
}