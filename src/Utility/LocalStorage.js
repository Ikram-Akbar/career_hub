

const getStoredJobsApplication = () => {
    const storedJobApplication = localStorage.getItem("job-applications");
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}


const saveJobApplication = (id) => {
    const storedJobApplications = getStoredJobsApplication();
    const exists = storedJobApplications.find(jobId => jobId === id);
    if (!exists) {
        storedJobApplications.push(id);
        localStorage.setItem("job-applications", JSON.stringify(storedJobApplications));
    }
};
export {
    saveJobApplication,
    getStoredJobsApplication
}


// const jobApplicationsKey = "job-applications";

// const getStoredJobsApplication = () => {
//     // Retrieve stored job applications from localStorage
//     const storedJobApplications = localStorage.getItem(jobApplicationsKey);
//     // Parse JSON only once and store the parsed result
//     return storedJobApplications ? new Set(JSON.parse(storedJobApplications)) : new Set();
// }

// const saveJobApplication = (id) => {
//     // Retrieve currently stored job applications
//     const storedJobApplications = getStoredJobsApplication();
//     // Add the new ID to the set
//     storedJobApplications.add(id);
//     // Update localStorage with the updated set
//     localStorage.setItem(jobApplicationsKey, JSON.stringify([...storedJobApplications]));
// };

// export { saveJobApplication,getStoredJobsApplication };
