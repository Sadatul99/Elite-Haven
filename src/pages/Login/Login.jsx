import { Link, useLocation, useNavigate } from 'react-router-dom';
import img1 from '../../../public/pool-with-hammock-area.jpg';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {
    const [success, setSuccess] = useState('')
    const { signInWithEmail } = useContext(AuthContext)
    // Using location we can know from where it came from
    const location = useLocation()
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        
        //Reset
        setSuccess('')


        // Sign in
        signInWithEmail(email, password)
            .then(result => {
                console.log(result)
                setSuccess('User logged in successfully')
                // Navigate after login
                navigate(location?.state ? location.state : '/')
            })
            .catch(error => {console.log(error)})
    }

    return (
        <div
            className="min-h-screen flex items-center justify-center"
            style={{
                backgroundImage: `url(${img1})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adding a dark overlay effect
                backgroundBlendMode: 'darken', // Blending the image with the color
            }}
        >
            <div className="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg max-w-sm w-full">
                <h2 className="text-2xl font-bold text-white text-center mb-6">Please Login</h2>
                <form onSubmit={handleLogin}>
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
                        className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-60 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
                </form>
                {
                    success && <p className='text-green-400'>{success}</p>
                }
                <p className="text-white text-center mt-6">Don't have an account? <Link to='/register' className="text-blue-400 hover:underline">Sign up</Link></p>
            </div>
        </div>
    );
};

export default Login;
