const mongoose = require('mongoose');
const CONSTANTS = require('./../shared/constants');

const jobSchema = new mongoose.Schema({
    title:{

    },
    company:{

    },
    location:{

    },
    jobType:{

    },
    salaryRange:{

    },
    description:{

    },
    requirements:{

    },
    responsibilities:{

    },
    deadline:{

    }
})

const Job = mongoose.model(CONSTANTS.collectionName.jobs_collection,jobSchema);
module.exports = Job; 