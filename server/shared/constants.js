const CONSTANTS = {
    PORT:4141,
    mongoDBName:'job-management-admin-app',
    collectionName:{
            jobs_collection:'jobs'
    },
    URLS:{
        ADMIN_PREFIX:'/api/admin'
    },
    subUrls:{
        admin:{
            Get_Jobs:'/jobs',
            Add_Job:'/jobs'
        }
    }
}



module.exports = CONSTANTS