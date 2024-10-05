import { Link } from 'react-router-dom';
import img1 from '../../../public/pool-with-hammock-area.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {
    const { createUser, ProfileUpdate} = useContext(AuthContext)
    const [success, setSuccess] = useState('')
    const [registerError, setRegisterError] = useState('')
    // const navigate = Navigate()
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const name = form.get('name')
        const photo = form.get('photo')
        const password = form.get('password')

        //Reset success
        setSuccess('')
        // Reset Error
        setRegisterError('')

        //Check password validation
        if (!/.{6,}/.test(password)) {
            return setRegisterError('Password should be at least 6 characters long.');
        }
        if (!/[A-Z]/.test(password)) {
            return setRegisterError('Password should contain at least one uppercase letter.');
        }
        if (!/[a-z]/.test(password)) {
            return setRegisterError('Password should contain at least one lowercase letter.');
        }

        //create new user
        createUser(email, password)
        .then(() => {
            return ProfileUpdate(name, photo);
        })
        .then(() => {
            setSuccess('User account created and profile updated successfully');
        })
        .catch(error => {
            console.log(error);
            setRegisterError('Failed to create account or update profile');
        });
        
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backgroundBlendMode: 'darken',
            }}
        >
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Name</label>
                        <input
                            type="text"
                            name='name'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Photo URL</label>
                        <input type="text"
                            name='photo'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your photo URL" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-white text-sm font-semibold mb-2">Email</label>
                        <input
                            type="email"
                            name='email'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-semibold mb-2">Password</label>
                        <input
                            type="password"
                            name='password'
                            className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Enter your password" />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
                    </div>
                </form>
                {
                    success && <p className="text-green-400">{success}</p>
                }
                {
                    registerError && alert(registerError)
                }
                <p className="text-white text-center mt-6">Already have an account? <Link to='/login' className="text-blue-400 hover:underline">Login</Link></p>
            </div>
        </div>
    );
};

export default Register;