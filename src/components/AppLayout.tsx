import { Outlet } from "react-router"
import NavBar from "./NavBar"

const AppLayout = () => {
    return (<>
        <NavBar />
        ____________________________
        <Outlet />
    </>)
}

export default AppLayout