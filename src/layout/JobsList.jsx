// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { FiMapPin, FiClock, FiDollarSign, FiCalendar } from "react-icons/fi"; // Example icons import

// const JobsList = () => {
//   const [jobs, setJobs] = useState([]);

//   useEffect(() => {
//     const fetchJobs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3005/job/", {
//           headers: {
//             "Cache-Control": "no-cache, no-store, must-revalidate",
//             Pragma: "no-cache",
//             Expires: "0",
//           },
//         });
//         console.log("Response data:", response.data);
//         const dataJobs = response.data;
//         if (Array.isArray(dataJobs)) {
//           setJobs(dataJobs);
//         } else {
//           console.error("Invalid data format:", dataJobs);
//         }
//       } catch (error) {
//         console.error("Error fetching jobs:", error);
//         if (error.response) {
//           console.error("Error Response Data:", error.response.data);
//           console.error("Error Response Status:", error.response.status);
//           console.error("Error Response Headers:", error.response.headers);
//         }
//       }
//     };

//     fetchJobs();
//   }, []);

//   console.log("Jobs state before rendering:", jobs);

//   return (
//     <div className="list-job" style={{ marginTop: "100px" }}>
//       <section className="card p-4 border rounded-lg shadow-md bg-white">
//         {jobs && jobs.length > 0 ? (
//           jobs.map((job) => (
//             <div key={job.id} className="job-listing">
//               <h2>{job.title}</h2>
//               {/* Replace with actual variables from job object */}
//               {/* Example rendering */}
//               <img src={job.companyLogo} alt="Company Logo" style={{ maxWidth: '100px', maxHeight: '100px' }} />
//               <div>
//                 <h4 className='text-back mb-1'>{job.companyName}</h4>
//                 <h3 className="text-lg font-semibold mb-2">{job.jobTitle}</h3>
//                 <div className="text-dark/70 text-base flex flex-wrap gap-2 mb-2">
//                   <span className="flex items-center gap-2"><FiMapPin /> {job.country} </span>
//                   <span className="flex items-center gap-2"><FiClock /> {job.employmentType} </span>
//                   <span className="flex items-center gap-2"><FiDollarSign /> {job.minSalary}--{job.maxSalary} </span>
//                   <span className="flex items-center gap-2"><FiCalendar /> {job.postingDate} </span>
//                 </div>
//                 <p className="text-base text-gray">{job.description}</p>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p>No jobs available</p>
//         )}
//       </section>
//     </div>
//   );
// };


// export default JobsList;
