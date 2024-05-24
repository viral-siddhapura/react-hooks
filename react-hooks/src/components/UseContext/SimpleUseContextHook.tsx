import React, { useState } from "react";
import Button from "../Theme/useThemeContext";
import { ThemeProvider, ThemeContext } from "@emotion/react";

const SimpleUseContextHook = () => {

    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div>
                <Button onClick={toggleTheme}>Toggle Theme</Button>
            </div>
        </ThemeContext.Provider>
    )
}

export default SimpleUseContextHook;