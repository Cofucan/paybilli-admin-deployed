import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "../context/AuthContext.jsx";

const LoggedOutAuthenticator = () => {
    const {authData} = useAuth()

    if (authData) return <Navigate to={"/"} replace/>

    return (<Outlet/>)
}
export default LoggedOutAuthenticator
