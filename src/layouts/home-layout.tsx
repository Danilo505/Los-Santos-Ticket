import { Outlet } from "react-router-dom";

export function HomeLayout(){
    return(
        <div>
            <h1>Sidebar</h1>
            <h2>Header</h2>

            <Outlet />
        </div>
    )
}