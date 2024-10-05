import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Profile = () => {
    const {user}= useContext(AuthContext)
    return (
        <div className="min-h-screen">
            <img className="h-36 w-36 rounded-full" src={user.photoURL} alt="" />
            <p className="text-4xl font-bold">Name: {user.displayName}</p>
        </div>
    );
};

export default Profile;