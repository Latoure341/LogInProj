import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login(){
    const navigate = useNavigate()
    const [form, setForm] = useState({ email: '', password: '' })
    const [error, setError] = useState('')

    const handleChange = (e) => {
        const { id, value } = e.target
        setForm(prev => ({ ...prev, [id]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            if (!form.email || !form.password) {
                setError('Please fill all fields')
                return
            }

            const response = await fetch("http://localhost:3000/api/users/login", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ userEmail: form.email, userPassword: form.password })
            })
            const data = await response.json()

            if (response.ok) {
                console.log('Login successful:', data)
                navigate('/dashboard')
            } else {
                setError(data.message || 'Login failed')
            }
        } catch (err) {
            setError(err.message || 'Network error')
        }
    }
    return(
        <>
            <div className="flex items-center justify-center mt-10 w-full">
                <form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mt-10 w-full max-w-sm items-center ">
                    <h2 className="text-xl font-extrabold text-gray-900 text-center">E<span className="text-indigo-600">.</span></h2>
                    <label className="block text-sm font-medium" htmlFor="email">Email: <br/></label><br/>
                    <input id="email" value={form.email} onChange={handleChange} type="email" placeholder='Enter your email' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>
                    <label className="block text-sm font-medium" htmlFor="password">Password: <br/></label><br/>
                    <input id="password" value={form.password} onChange={handleChange} type="password" placeholder='Enter your password' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>
                    {error && <p className="text-sm text-red-600 text-center">{error}</p>}
                    <button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-3xl hover:bg-indigo-700">Log In</button>
                </form>
            </div>
        </>
    )
}
export default Login