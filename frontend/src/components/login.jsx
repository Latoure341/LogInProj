import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        // TODO: perform auth here
        navigate('/dashboard')
    }

    return(
        <>
            <div className="flex items-center justify-center mt-10 w-full">
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mt-10 w-full max-w-sm items-center ">
                    <h2 className="text-xl font-extrabold text-gray-900 text-center">E<span className="text-indigo-600">.</span></h2>
                    <label className="block text-sm font-medium" htmlFor="email">Email: <br/></label><br/>
                    <input id="email" type="email" placeholder='Enter your email' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>
                    <label className="block text-sm font-medium" htmlFor="password">Password: <br/></label><br/>
                    <input id="password" type="password" placeholder='Enter your password' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>
                    <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-3xl hover:bg-indigo-700">Log In</button>
                </form>
            </div>
        </>
    )
}
export default Login