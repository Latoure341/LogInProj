import React from 'react'
import { Link } from 'react-router-dom'

function About(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 w-full py-10">
      <header className="max-w-4xl mx-auto px-6 py-12 text-center">
        <h1 className="text-4xl font-extrabold text-orange-600">About Evolve</h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
          Evolve is a small design-led brand focused on elevated essentials and thoughtful details.
          We blend street-ready confidence with clean silhouettes and comfortable fabrics so you can
          feel intentional in every outfit.
        </p>
      </header>

      <section className="max-w-6xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <article className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
          <p className="mt-2 text-sm text-gray-600">Create pieces that empower movement and personal style without being loud — design that fits life.</p>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Sustainability</h3>
          <p className="mt-2 text-sm text-gray-600">We prioritize durable materials and ethical manufacturing. Our collections are made to last and to be loved.</p>
        </article>

        <article className="p-6 bg-white rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900">Community</h3>
          <p className="mt-2 text-sm text-gray-600">We design for people who move differently — creators, makers, and everyday explorers. Join us.</p>
        </article>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-semibold text-orange-600">Team</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Alex Morgan</h4>
            <p className="text-sm text-gray-600">Founder & Creative Director</p>
          </div>
          <div className="p-4 bg-white rounded-lg shadow-sm">
            <h4 className="font-medium">Sam Rivera</h4>
            <p className="text-sm text-gray-600">Product & Operations</p>
          </div>
        </div>
      </section>

      <footer className="max-w-4xl mx-auto px-6 py-8 text-center text-sm text-gray-600">
        <p>Want to get in touch? <Link to="/contact" className="text-indigo-600 hover:underline">Contact us</Link>.</p>
        <p className="inline-block space-x-4">All right reserved. <Link to='/home' className='hover:text-black text-black'>Home</Link> </p>
      </footer>
    </div>
  )
}

export default About
