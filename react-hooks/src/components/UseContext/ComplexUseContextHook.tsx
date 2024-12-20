import React, { useState } from "react";
import { DashBoardContext } from "./context";
import MyDashBoard from "./MyDashBoard";

export interface userProps { 
    name: string;
    age: number;
    isGotJob: boolean;
}

interface DemoProps {}

const ComplexUseContextHook = ({}: DemoProps) => {

    const [user] = useState<userProps>({
        name: "Viral",
        age: 25,
        isGotJob: false
      });
    
    return (
        <div>
            <h1>Complex UseContext Hook</h1>
            <DashBoardContext.Provider value={user}>
                <MyDashBoard />
            </DashBoardContext.Provider>
        </div>
    )
}

export default ComplexUseContextHook;