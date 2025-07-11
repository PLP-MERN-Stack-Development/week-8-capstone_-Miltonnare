
const JobCard=({job,onEdit,onDelete})=>{

    return(
        <div className="border rounded p-4 shadow-md mb-4">
            <h3 className="text-lg font-semibold">{job.title}</h3>
            <p>{job.description}</p>
            <p className="text-sm text-gray-500">{job.location}</p>
            <p className="text-sm text-gray-500">{job.Type}</p>
            <p className="text-green-700 font-bold">KSH.{job.salary}</p>

            <div className="mt-2 flex gap-2">
                <button onClick={()=>onEdit(job)}className="bg-yellow-400 px-2 py-1 rounded text-sm">Edit</button>
                <button onClick={()=>onDelete(job._id)}className="bg-red-500 px-2 py-1 rounded text-white text-sm">Delete</button>

            </div>
        </div>

    );
};

export default JobCard;