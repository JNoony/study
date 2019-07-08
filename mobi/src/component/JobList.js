import React from 'react';

const handleClick = (e) =>{
    let target = e.currentTarget;
    let jobContent = target.nextSibling.nextSibling.nextSibling;

    jobContent.style.display = (jobContent.dataset.toggled ^= 1) ? "block" : "none";
}

const JobList = (props) => {
    return(
        <ul className="job-con-list">
             { props.list.map((job,index)=>(
                <li key={index} className={job.state == '마감' ? "close" : ""} >
                    <p><span className="label-box">{job.label}</span></p>
                    <p>{job.job}</p>
                    <p className="job-con-list-title" onClick={handleClick}>
                        {job.title}<span className="new">N</span>
                    </p>
                    <p>{job.state}</p>
                    <p>{job.date}</p>

                    <div className='job-con-list-view' >
                        { job.content.split('\n').map(line => {
                            return  <pre>{line}</pre> 
                        }) }
                    </div>
                </li>
            )) }
        </ul>
    )
}

export default JobList;