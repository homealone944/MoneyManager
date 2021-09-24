import { React, useState } from 'react';
import {Button} from "@mui/material"

function Overview(props){
    const { acctInfo } = props;
    const [calcInfo, setCalcInfo] = useState({
        "FTax" : ["0$","0%"],
        "STax" : ["0$","0%"],
        "FicaTax": ["0$","0%"],
        "401k contributions": ["0$","0$"],
        "Takehome": ["71000$","4000$"],

    });
    const handleUpdateCalcInfo = (k, v) => {
        var temp = calcInfo
        temp[k] = v
        setCalcInfo(temp)
    }
    const UpdateAllCalcs = () => {
        var temp401k = []
        temp401k[0] = acctInfo["Base Salary"] * acctInfo["Your 401k Contribution %"]/100
        temp401k[1] = acctInfo["Base Salary"] * acctInfo["Company 401k Contribution %"]/100
        handleUpdateCalcInfo("401k contributions", temp401k);
        //Does not rerender
    }
    
    return(
        <div>
            <h3>Overview</h3>
            
            <h4>Account info</h4>
            {Object.keys(acctInfo).map((infoKey)=>(
                <div>
                    <li>{infoKey}: {acctInfo[infoKey]}</li>
                </div>
            ))}

            <h4>Calculated Info</h4>
            {Object.keys(calcInfo).map((infoKey)=>(
                <div>
                    <li>{infoKey}: {calcInfo[infoKey]}</li>
                </div>
            ))}

            <Button onClick={UpdateAllCalcs}>Update</Button>
        </div>
    );
}

export default Overview