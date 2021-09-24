import { React, useState } from 'react';

function Overview(props){
    const [info, setInfo] = useState([
        "Base Salary",
        "Rough Taxes (with %)",
        "401k contributions",
        "Rough Takehome",
        "Rough Monthly",
    ])
    return(
        <div>
            <h3>Overview</h3>
            <h4>Info of the following:</h4>
            {info.map((item)=>(
                <li>{item}</li>
            ))}
        </div>
    );
}

export default Overview