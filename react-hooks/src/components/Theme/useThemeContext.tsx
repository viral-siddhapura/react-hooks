import { ThemeContext } from "@emotion/react";
import { useContext } from "react";

function Button({children, onClick}: {children: React.ReactNode, onClick: () => void}) {
    const { theme } = useContext<any>(ThemeContext);

    const buttonStyles: { [key: string]: { backgroundColor: string; color: string } } = {
        light : {
            backgroundColor: 'white',
            color: 'black'
        },
        dark : {
            backgroundColor: 'black',
            color: 'white'
        },
    };

    return (
        <button style={buttonStyles[theme]} onClick={onClick}>{children}</button>
    );
}

export default Button;