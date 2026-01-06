import { useState } from 'react'
import { Link } from 'react-router-dom'

import assets from '../assets/femaleOutfit.jpg'
import streetwear from '../assets/streetwear.jpg'
import formal from '../assets/formal.jpg'
import '../App.css'

function Home(){
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
        <>
        <nav className="bg-white/95 backdrop-blur-sm border-b rounded-full shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center space-x-4">
              <a href="#" className="text-xl font-extrabold text-gray-900">E<span className="text-indigo-600">.</span></a>
              <span className="hidden sm:inline-block text-sm text-gray-500">Evolve</span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <div className="flex items-center space-x-3">
                <Link to="/login" className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900">Log In</Link>
                <Link to="/signup" className="px-4 py-2 bg-orange-600 text-white rounded-md text-sm hover:bg-orange-700">Sign Up</Link>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setMobileOpen(!mobileOpen)} className="p-2 rounded-md inline-flex items-center justify-center text-gray-700 hover:bg-gray-100">
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t">
            <div className="px-4 py-4 space-y-2">
              <Link to="/about" className="block text-gray-700">About</Link>
              <div className="pt-3 border-t mt-2">
                <Link to="/login" className="block px-4 py-2 text-gray-700">Log In</Link>
                <Link to="/signup" className="block px-4 py-2 mt-2 bg-indigo-600 text-white text-center rounded-md">Sign Up</Link>
              </div>
            </div>
          </div>
        )}
      </nav>

      <main className="p-8">
                    <div className="max-w-3xl mx-auto text-center">
                      <h1 className="text-3xl font-semibold text-orange-900">Welcome</h1>
                      <p className="mt-2 text-gray-600">Wear your edge with pieces designed to stand out without trying too hard.
      Clean silhouettes, premium comfort, and street-ready confidence in every fit.
      Built for those who move differently and dress with purpose.</p>
                    </div>
      
                    <div className="mt-10 p-6 flex justify-center">
                      <ul className="flex justify-center space-x-12">
                        <li className="bg-gray-300 rounded-2xl"><img className="rounded-2xl" src={assets} alt="A female outfit" height="300" width="200"/></li>
                        <li className=""><img className="rounded-2xl" src={formal} alt="Classic outfit" height="300" width="300"/></li>
                        <li className="bg-gray-300 rounded-2xl"><img className="rounded-2xl" src={streetwear} alt="A streetwear outfit" height="300" width="200"/></li>
                      </ul>
                    </div>
        </main>

        <footer className="bg-gray-200 p-4 mt-20 bottom-0 w-full">
            <div>2026 Evolve. All Rights Reserved</div>
        </footer>
    </>
    )
}
export default Home;