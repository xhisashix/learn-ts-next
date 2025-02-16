import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Application</h1>
      <nav>
        <ul className="flex space-x-4">
          <li className="inline-block"><Link className="hover:underline" href="/">Home</Link></li>
          <li className="inline-block"><Link className="hover:underline" href="/about">About</Link></li>
          <li className="inline-block"><Link className="hover:underline" href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Header