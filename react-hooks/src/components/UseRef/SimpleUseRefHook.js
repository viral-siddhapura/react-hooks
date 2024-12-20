import React, { useRef } from 'react';

const SimpleUseRefHook = () => {

    const intervalRef = useRef(0);
    const inputRef = useRef(null);

    const handleClick = () => {
        intervalRef.current = intervalRef.current + 1;
        console.log("intervalRef.current: ", intervalRef.current);
        alert(intervalRef.current);
    }

    function handleInputClick() {
        inputRef.current.focus();
    }

    return (
        <>
            {/* intervalRef.current will remain as ZERO (0) because useRef does not create re-render 
              *  Information that’s used for rendering should be state instead *
              *  Also reading or writing  == {ref.current}  is a bad practice - instead of that write during functions / effects */}

            <p>{intervalRef.current}</p>

            <button onClick={handleClick}>Click me</button>

            <input ref={inputRef} type="text" />
            <button onClick={handleInputClick}>Focus</button>
        </>
    );
};

export default SimpleUseRefHook;