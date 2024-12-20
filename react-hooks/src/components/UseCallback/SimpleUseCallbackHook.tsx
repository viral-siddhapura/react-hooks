import React, { useCallback, useState } from "react";
import List from "./List";

const SimpleUseCallbackHook = () => {

    const [number, setNumber] = useState(0);
    const [dark, setDark] = useState(false);

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2];
    },[number]);

    const theme = {
        backgroundColor: dark ? "#333" : "#FFF",
        color: dark ? "#FFF" : "#333"
    }

    return (
        <div style={theme}>
            <h1>Simple UseCallback hook</h1>
            <input
                type="number"
                value={number}
                onChange={e => setNumber(parseInt(e.target.value))}
            />
            <button onClick={() => setDark(prevDark => !prevDark)}>Toggle theme</button>
            <List getItems={getItems} />
        </div>
    )
}

export default SimpleUseCallbackHook;