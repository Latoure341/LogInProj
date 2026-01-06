import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup(){
	const navigate = useNavigate()
	const [form, setForm] = useState({ name: '', email: '', password: '', confirm: '' })
	const [error, setError] = useState('')

	const handleChange = (e) => {
		const { id, value } = e.target
		setForm(prev => ({ ...prev, [id]: value }))
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setError('')
		if (!form.name || !form.email || !form.password || !form.confirm) {
			setError('Please fill all fields')
			return
		}
		if (form.password !== form.confirm) {
			setError('Passwords do not match')
			return
		}
		// TODO: perform signup request here
		const response = await fetch("http://localhost:3000/api/auth/signup", {	
			method: 'POST',
			headers: { 'Content-Type': 'application/json'},
			body: JSON.stringify({ name: form.name, email: form.email, password: form.password})
		})
		const data = await response.json();
		if(response.ok){
			console.log('User registered successfully:', data);
			navigate('/login');
		}
		else{
			setError(data.message || 'Signup failed');
			navigate('/signup');
		}
		
	}

	return (
		<>
			<div className="flex items-center justify-center w-full">
				<form onSubmit={handleSubmit} className="bg-gray-100 p-4 rounded-lg shadow-md mt-5 w-full max-w-sm items-center ">
					<h2 className="text-xl font-extrabold text-gray-900 text-center">E<span className="text-indigo-600">.</span></h2>
					{error && <p className="text-sm text-red-600 text-center">{error}</p>}

					<label className="block text-sm font-medium" htmlFor="name">Name: <br/></label><br/>
					<input id="name" value={form.name} onChange={handleChange} type="text" placeholder='Enter your name' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>

					<label className="block text-sm font-medium" htmlFor="email">Email: <br/></label><br/>
					<input id="email" value={form.email} onChange={handleChange} type="email" placeholder='Enter your email' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>

					<label className="block text-sm font-medium" htmlFor="password">Password: <br/></label><br/>
					<input id="password" value={form.password} onChange={handleChange} type="password" placeholder='Enter your password' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>

					<label className="block text-sm font-medium" htmlFor="confirm">Confirm Password: <br/></label><br/>
					<input id="confirm" value={form.confirm} onChange={handleChange} type="password" placeholder='Confirm your password' className="p-2 focus:outline-none focus:ring-indigo-200 rounded-3xl w-full bg-gray-600"/> <br/><br/>

					<button type="submit" className="w-full bg-indigo-600 text-white py-4 rounded-3xl hover:bg-indigo-700">Sign Up</button>
				</form>
			</div>
		</>
	)
}

export default Signup

