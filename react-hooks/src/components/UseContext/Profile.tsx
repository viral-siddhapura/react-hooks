import React, { useState } from 'react';
import { useUserContext } from "./context";

export function Profile(){
    const user = useUserContext();
    const [isGotJob, setIsGotJob] = useState(user.isGotJob);

    const toggleJobStatus = () => {
        setIsGotJob(!isGotJob);
    };

    return (
        <div>
            <button onClick={toggleJobStatus}>
                {isGotJob ? 'Got the job' : 'Not got the job'}
            </button>
        </div>
    );
};