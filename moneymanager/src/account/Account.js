import { React } from 'react';
import { TextField } from '@mui/material';

function Account(props){
    const { acctInfo, updateAcctInfoFn} = props;

    return(
        <div>
            <h3>Your Info</h3>
            {Object.keys(acctInfo).map((infoKey)=>(
                <div>
                <TextField
                    label={infoKey}
                    defaultValue={acctInfo[infoKey]}
                    onChange={(event) => updateAcctInfoFn(infoKey, event.target.value)}
                />
                <br/>
                <br/>
                </div>
            ))}
        </div>
    );
}

export default Account