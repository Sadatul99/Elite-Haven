import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {user, loading}= useContext(AuthContext)
    // To ensure quality experience we need to redirect to the page after user logged in
    const location = useLocation() // this function gets the location
    // console.log(location.pathname)

    if(loading){
        
        return (
            <div className="min-h-screen flex justify-center items-center">
                <span className="loading loading-spinner text-warning text-6xl"></span>
            </div>
        )
    }
    

    if(user){
        return children
    }
    
    return (
        // Here 'state' means the starting location an 'to' is the destination
        <Navigate state={location.pathname} to='/login' ></Navigate>
    )
};

export default PrivateRoute;