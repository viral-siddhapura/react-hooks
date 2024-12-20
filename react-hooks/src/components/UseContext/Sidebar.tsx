import { useUserContext } from "./context";

export function Sidebar(){

    const user = useUserContext();

    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Age: {user.age}</p>
        </div>
    );
};