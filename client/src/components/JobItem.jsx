
const JobItem=({job})=>{
    return(
        <div className="border rounded p-4 shadow-sm mb-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p className="text-sm text-gray-500">{job.location}.{job.Type}</p>
            <p className="mt-2">{job.description}</p>
            <p className="text-green-700 font-bold">KSH.{job.salary}</p>

        </div>
    );
};

export default JobItem;