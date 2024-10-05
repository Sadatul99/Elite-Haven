import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const UpdateProfile = () => {
    const { user, ProfileUpdate } = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const handleUpdateProfile = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const photo = form.get('photo')

        //
        ProfileUpdate(name, photo)
            .then(() => {
                setSuccess('Profile updated successfully please Refresh')
            }).catch(() => {
                // An error occurred
                // ...
            });

    }
    return (
        <div className="min-h-screen flex  justify-center items-center ">
            <form className="w-1/3 " onSubmit={handleUpdateProfile}>
                <div className="mb-4">
                    <label className="block text-white text-sm font-semibold mb-2">Name: {user.displayName}</label>
                    <input
                        type="text"
                        name='name'
                        className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter new Name" />
                </div>
                <div className="mb-6">
                    <label className="block text-white text-sm font-semibold mb-2">Photo URL</label>
                    <input
                        type="text"
                        name='photo'
                        className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="New Image URL" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Save</button>
                {
                    success && <p className="text-green-400">{success}</p>
                }
            </form>

        </div>
    );
};

export default UpdateProfile;