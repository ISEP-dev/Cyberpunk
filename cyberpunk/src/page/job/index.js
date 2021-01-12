import {useEffect} from "react";
import {redirectToAuthPageIfNotConnected} from "../../service/local-auth";

const Job = (props) => {
    useEffect(() => redirectToAuthPageIfNotConnected(), [])

    const jobs = props.jobs
    console.log(jobs)

    const jobList = jobs.map(element =>{
        return(
            <div key={element.id}>
                <div>
                    <div><h1>{element.title}</h1></div>
                </div>
                <div className='flex'>
                    <div className='w-1/4'>
                        <p>Fixer :{element.fixer}</p>
                        <p>Henchmen :{element.henchmenCount}</p>
                        <p>reward :{element.reward}</p>
                    </div>
                    <p className='w-3/4'>{element.description}</p>
                </div>
            </div>
        )
    })  
    return (
        <div>
            {jobList}
        </div>
    );
};

export default Jobs;