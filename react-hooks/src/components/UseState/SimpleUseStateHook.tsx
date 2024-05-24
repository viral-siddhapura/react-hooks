import React, { useState } from "react";

const SimpleUseStateHook = () => {

    const [value, setValue] = useState(0);

    return (
        <div>
            <h1>Simple UseState hook</h1>

            <hr />

            <button onClick={() => setValue(value + 1)}>Increment</button>
            <button onClick={() => setValue(value - 1)}>Decrement</button>
            <button onClick={() => setValue(0)}>Reset</button>

            <hr />

            <h2>Value is : {value}</h2>
        </div>
    );
};

export default SimpleUseStateHook;