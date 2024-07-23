import axios from "axios"

export const getJobApplications = async (jobId) => {
    try {
        const response = await axios.get(`http://localhost:3005/job/${jobId}/applications`);
        return response.data;
    } catch (error) {
        console.error('Fetch error:', error);
        throw error;
    }
};