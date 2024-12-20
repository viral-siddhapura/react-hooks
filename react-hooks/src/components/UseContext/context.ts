import { createContext, useContext } from "react";
import { userProps } from "./ComplexUseContextHook";

export const DashBoardContext = createContext<userProps | undefined>(undefined);

export function useUserContext(){
    const user = useContext(DashBoardContext);

    if (user === undefined) {
        throw new Error("useUserContext must be used within a DashBoardContext.Provider");
    }

    return user;
}