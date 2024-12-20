import { Profile } from "./Profile";
import { Sidebar } from "./Sidebar";

export default function MyDashBoard() {
    
    return (
        <div>
            <h1>My DashBoard</h1>
            <Sidebar />
            <Profile />
        </div>
    )
};